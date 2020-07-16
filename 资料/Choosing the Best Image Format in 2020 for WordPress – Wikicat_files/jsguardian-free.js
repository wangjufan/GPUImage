/* obfuscate = null */
/*
JSGuardian
Copyright 2019 AnyWhichWay, LLC

JSGuardian is licensed under SSPL v1.

https://www.mongodb.com/licensing/server-side-public-license

In brief, you may host the code on your own servers exclusively for your own use. If you make the
code available to others as part of a service, you must provide the source code including all of 
your changes and the source code to all supporting services available to others.

THERE IS NO WARRANTY FOR THE PROGRAM, TO THE EXTENT PERMITTED BY APPLICABLE LAW. EXCEPT WHEN OTHERWISE
STATED IN WRITING THE COPYRIGHT HOLDERS AND/OR OTHER PARTIES PROVIDE THE PROGRAM “AS IS” WITHOUT WARRANTY 
OF ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF 
MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. THE ENTIRE RISK AS TO THE QUALITY AND PERFORMANCE 
OF THE PROGRAM IS WITH YOU. SHOULD THE PROGRAM PROVE DEFECTIVE, YOU ASSUME THE COST OF ALL NECESSARY 
SERVICING, REPAIR OR CORRECTION.

IN NO EVENT UNLESS REQUIRED BY APPLICABLE LAW OR AGREED TO IN WRITING WILL ANY COPYRIGHT HOLDER, OR ANY 
OTHER PARTY WHO MODIFIES AND/OR CONVEYS THE PROGRAM AS PERMITTED ABOVE, BE LIABLE TO YOU FOR DAMAGES, 
INCLUDING ANY GENERAL, SPECIAL, INCIDENTAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF THE USE OR INABILITY 
TO USE THE PROGRAM (INCLUDING BUT NOT LIMITED TO LOSS OF DATA OR DATA BEING RENDERED INACCURATE OR LOSSES 
SUSTAINED BY YOU OR THIRD PARTIES OR A FAILURE OF THE PROGRAM TO OPERATE WITH ANY OTHER PROGRAMS), EVEN IF 
SUCH HOLDER OR OTHER PARTY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.

 */
(function() {
	"use strict";
	/* Used to copy options so that we have a version that can't be changed by external code */
	function cloneObject(obj,done=new Map()) {
		if(done.has(obj)) {
			return done.get(obj);
		}
	    var clone = Array.isArray(obj) ? [] : {};
		done.set(obj,clone);
	    for(var key in obj) {
	        if(typeof(obj[key])=="object" && obj[key] != null) {
	            clone[key] = cloneObject(obj[key],done);
	        } else {
	            clone[key] = obj[key];
	        }
	    }
	    return clone;
	}
	/* Make sure DOMParser instances can't be messed with */
	Object.seal(DOMParser.prototype);
	var parser = new DOMParser();
	function sanitize(value) { 
		if(typeof(value)==="string") {
			var body = parser.parseFromString(value,"text/html").body,
				riskyattributes = ["background","form","autofocus","dirname","onfocus","formaction","onformchange","onforminput","onerror"],
				riskytags = ["link","details","base","object"],
				riskytext = ["${","`","<!--","[CDATA"];
			for(var text of riskytext) {
				if(body.innerHTML.includes(text)) {
					return "";
				}
			}
			for(var aname of riskyattributes) {
				if(body.querySelectorAll(`[${aname}]`).length>0) {
					return "";
				}
			}
			for(var tname of riskytags) {
				if(body.querySelectorAll(tname).length>0) {
					return "";
				}
			}
			if(body.querySelectorAll("[src='#']").length>0) {
				return "";
			}
			return body.innerHTML;
		}
		return "";
	}
	var _addEventListener = window.addEventListener,
		_setAttribute = Element.prototype.setAttribute,
		install_options = cloneObject(typeof(INSTALL_OPTIONS)!=="undefined" 
				? INSTALL_OPTIONS
				: {
					"free": {
						"guardWhen": "before", // before, after
						"guardInnerHTML": "clean", // off, clean, strict
						"guardPrompt": "clean", // off, clean, strict, prevent
						"guardInput": "clean", // off, clean, strict
						"guardTransport": "https-only", // off, https-only
						"guardXSS": "sanitize" // off, sanitize, block
					},
					"plan": "free"
				}),
		options = install_options[install_options.plan||"free"];
	function isExecutable(str) { 
		var functionExp = /([\s\(]*.\(\s*.*\s*\)\s*.*\s*=>)|([\s*.*\s*=>\s*.\{)|([\s\(]*.[Ff]unction\s*.*\s*\(\s*.*\s*\)\s*.*\s*\{)/,
			templateExp = /(\`(\s*.*)\$\{(\s*.*\s*.*)\}(\s*.*)\`)/;
		return functionExp.test(str) || templateExp.test(str)
	};
	function protect() {
		if(options.guardInput && options.guardInput!=="off") {
			(function() {
				if(_addEventListener) {
					_addEventListener.call(window,"change", function(event) {
						var target = event.currentTarget;
						if(target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement) {
							var oldvalue = target.getAttribute("value"),
								clean = sanitize(target.value);
							if(oldvalue===clean) {
								return;
							}
							var executable = isExecutable(clean);
							if((options.guardInput==="clean" || target.value==clean+"") && !executable) {
								target.value = clean;
								_setAttribute.call(target,"value",clean);
							} else if(options.guardInput==="strict" || executable){ 
								target.value = oldvalue;
							}
						}
					});
				}
				var desc = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,"value");
				Object.defineProperty(HTMLInputElement.prototype,"value",{
						enumerable:desc.enumerable,
						configurable:desc.configurable,
						get:desc.get,
						set:function(value) {
							var clean = sanitize(value)+"",
								executable = isExecutable(clean);
							if((options.guardInput==="clean" || value==clean+"")  && !executable) {
								desc.set.call(this,clean);
								return clean;
							}
							// no need to set to old value, it won't have changed
						}
			  	});
			})();
		}

		// https://html5sec.org/index.html#21
		// https://html5sec.org/index.html#97
		// https://html5sec.org/index.html#98
		// https://html5sec.org/index.html#128
		if(options.guardInnerHTML && options.guardInnerHTML!=="off") {
			(function() {
				var desc = Object.getOwnPropertyDescriptor(Element.prototype,"innerHTML");
				Object.defineProperty(Element.prototype,"innerHTML",{
						enumerable:desc.enumerable,
						configurable:false,
						get:desc.get,
						set:function(value) {
							if(options.guardInnerHTML==="prevent") {
								return this.innerHTML;
							}
							var clean = sanitize(value)+"";
							if(options.guardInnerHTML==="clean" || value==clean+"") {
								desc.set.call(this,clean);
								return clean;
							}
							// no need to set to old value, it won't have changed
						}
			  	});
			})();
		}
		
		if(options.guardPrompt && options.guardPrompt!=="off") {
			(function() {
				if(options.guardPrompt==="prevent") {
					Object.defineProperty(window,"prompt",{value:function() { return ""; }})
				} else if(options.guardPrompt==="clean" || options.guardPrompt==="strict"){
					var _prompt = window.prompt.bind(window);
					Object.defineProperty(window,"prompt",{value:
						function (title) {
							var input = _prompt(title),
								sanitized = sanitize(input)+"";
							if(options.guardPrompt==="strict") {
								if(input!=sanitized || isExecutable(sanitized)) {
									window.alert("Invalid input: " + input);
									return "";
								}
							} else if(isExecutable(sanitized)) {
								window.alert("Invalid input: " + input);
								return "";
							}
							return sanitized;
						}
					});
				}
			})();
		}
		
		if(options.guardTransport==="https-only") {
			(function() {
				var meta = document.createElement("meta");
				meta.setAttribute("http-equiv","Content-Security-Policy");
				meta.setAttribute("content","upgrade-insecure-requests");
				document.head.appendChild(meta);
				meta = document.createElement("meta");
				meta.setAttribute("http-equiv","Strict-Transport-Security");
				meta.setAttribute("content","max-age=31536000");
				document.head.appendChild(meta);
			})();
		}
		
		if(options.guardXSS==="sanitize" || options.guardXSS==="block") {
			(function() {
				var meta = document.createElement("meta");
				meta.setAttribute("http-equiv","X-XSS-Protection");
				if(options.guardXSS==="sanitize") {
					meta.setAttribute("content","1");
				} else {
					meta.setAttribute("content","1; mode=block");
				}
				document.head.appendChild(meta);
			})();
		}
		
	}
	
	if(options.guardWhen==="after" && _addEventListener) {
		_addEventListener.call(window,"load", protect);
	} else {
		protect();
	}
})();

			   