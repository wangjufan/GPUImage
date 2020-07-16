var pbjs = pbjs || {};
pbjs.que = pbjs.que || [];

var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];

(function(window, document, pbjs, googletag) {
'use strict';
if (typeof(hbManager) !== 'undefined') return;

var TARGET_ORDER = "1353";
var PREBID_TIMEOUT = 3000; // ms
var FAILSAFE_TIMEOUT = 5000; // ms
var REFRESH_ONRESIZE = false;
var DFP_PAGEURL = "";
var DFP_SRA = true;
var APS = false;
var APS_PUBID = "";

var adUnits = [
    {
        "hbm_zone": {
            "userid": 475,
            "websiteid": 1353,
            "zoneid": 4137,
            "lazy_loading": 0,
            "lazy_loading_offset": 200,
            "refresh": 0,
            "refresh_limit": 0,
            "nontracked": 0,
            "outofpage": 0,
            "slot_code": "/21863221228/Header_Bidding_WK_1_Unit_1_300x250",
            "slot_sizes": [
                [
                    300,
                    250
                ]
            ]
        },
        "code": "div-gpt-ad-1591522004732-0",
        "mediaTypes": {
            "banner": {
                "sizes": [
                    [
                        300,
                        250
                    ]
                ]
            }
        },
        "bids": [
            {
                "bidder": "medianet",
                "params": {
                    "cid": "8CU2S7H8Y",
                    "crid": "416944336"
                }
            },
            {
                "bidder": "sovrn",
                "params": {
                    "tagid": "707068"
                }
            },
            {
                "bidder": "between",
                "params": {
                    "w": "300",
                    "h": "250",
                    "s": "3919627"
                }
            },
            {
                "bidder": "smartyads",
                "params": {
                    "placementId": "18997"
                }
            },
            {
                "bidder": "reklamstore",
                "params": {
                    "regionId": 1086956
                }
            }
        ]
    },
    {
        "hbm_zone": {
            "userid": 475,
            "websiteid": 1353,
            "zoneid": 4138,
            "lazy_loading": 0,
            "lazy_loading_offset": 200,
            "refresh": 0,
            "refresh_limit": 0,
            "nontracked": 0,
            "outofpage": 0,
            "slot_code": "/21863221228/Header_Bidding_WK_1_Unit_2_300x250",
            "slot_sizes": [
                [
                    300,
                    250
                ]
            ]
        },
        "code": "div-gpt-ad-1591522019759-0",
        "mediaTypes": {
            "banner": {
                "sizes": [
                    [
                        300,
                        250
                    ]
                ]
            }
        },
        "bids": [
            {
                "bidder": "medianet",
                "params": {
                    "cid": "8CU2S7H8Y",
                    "crid": "842259324"
                }
            },
            {
                "bidder": "sovrn",
                "params": {
                    "tagid": "731204"
                }
            },
            {
                "bidder": "between",
                "params": {
                    "w": "300",
                    "h": "250",
                    "s": "3919630"
                }
            },
            {
                "bidder": "smartyads",
                "params": {
                    "placementId": "18881"
                }
            },
            {
                "bidder": "reklamstore",
                "params": {
                    "regionId": 1086957
                }
            }
        ]
    },
    {
        "hbm_zone": {
            "userid": 475,
            "websiteid": 1353,
            "zoneid": 4139,
            "lazy_loading": 0,
            "lazy_loading_offset": 200,
            "refresh": 0,
            "refresh_limit": 0,
            "nontracked": 0,
            "outofpage": 0,
            "slot_code": "/21863221228/Header_Bidding_WK_1_Unit_3_728x90",
            "slot_sizes": [
                [
                    728,
                    90
                ]
            ]
        },
        "code": "div-gpt-ad-1591522034099-0",
        "mediaTypes": {
            "banner": {
                "sizes": [
                    [
                        728,
                        90
                    ]
                ]
            }
        },
        "bids": [
            {
                "bidder": "medianet",
                "params": {
                    "cid": "8CU2S7H8Y",
                    "crid": "861758043"
                }
            },
            {
                "bidder": "sovrn",
                "params": {
                    "tagid": "735488"
                }
            },
            {
                "bidder": "between",
                "params": {
                    "w": "728",
                    "h": "90",
                    "s": "3919631"
                }
            },
            {
                "bidder": "smartyads",
                "params": {
                    "placementId": "18996"
                }
            },
            {
                "bidder": "reklamstore",
                "params": {
                    "regionId": 1086958
                }
            }
        ]
    },
    {
        "hbm_zone": {
            "userid": 475,
            "websiteid": 1353,
            "zoneid": 4140,
            "lazy_loading": 0,
            "lazy_loading_offset": 200,
            "refresh": 0,
            "refresh_limit": 0,
            "nontracked": 0,
            "outofpage": 0,
            "slot_code": "/21863221228/Header_Bidding_WK_1_Unit_4_300x600",
            "slot_sizes": [
                [
                    300,
                    600
                ]
            ]
        },
        "code": "div-gpt-ad-1591522049976-0",
        "mediaTypes": {
            "banner": {
                "sizes": [
                    [
                        300,
                        600
                    ]
                ]
            }
        },
        "bids": [
            {
                "bidder": "medianet",
                "params": {
                    "cid": "8CU2S7H8Y",
                    "crid": "958274387"
                }
            },
            {
                "bidder": "sovrn",
                "params": {
                    "tagid": "731206"
                }
            },
            {
                "bidder": "between",
                "params": {
                    "w": "600",
                    "h": "300",
                    "s": "3919632"
                }
            },
            {
                "bidder": "smartyads",
                "params": {
                    "placementId": "18998"
                }
            },
            {
                "bidder": "reklamstore",
                "params": {
                    "regionId": 1086959
                }
            }
        ]
    },
    {
        "hbm_zone": {
            "userid": 475,
            "websiteid": 1353,
            "zoneid": 4236,
            "lazy_loading": 0,
            "lazy_loading_offset": 200,
            "refresh": 0,
            "refresh_limit": 0,
            "nontracked": 0,
            "outofpage": 0,
            "slot_code": "/21863221228/Header_Bidding_WK_1_Unit_5_300x600",
            "slot_sizes": [
                [
                    300,
                    600
                ]
            ]
        },
        "code": "div-gpt-ad-1592325815970-0",
        "mediaTypes": {
            "banner": {
                "sizes": [
                    [
                        300,
                        600
                    ]
                ]
            }
        },
        "bids": [
            {
                "bidder": "medianet",
                "params": {
                    "cid": "8CU2S7H8Y",
                    "crid": "628386653"
                }
            },
            {
                "bidder": "sovrn",
                "params": {
                    "tagid": "735487"
                }
            },
            {
                "bidder": "between",
                "params": {
                    "w": "300",
                    "h": "600",
                    "s": "3918184"
                }
            },
            {
                "bidder": "reklamstore",
                "params": {
                    "regionId": 1086678
                }
            },
            {
                "bidder": "smartyads",
                "params": {
                    "placementId": "19256"
                }
            }
        ]
    },
    {
        "hbm_zone": {
            "userid": 475,
            "websiteid": 1353,
            "zoneid": 4240,
            "lazy_loading": 0,
            "lazy_loading_offset": 200,
            "refresh": 0,
            "refresh_limit": 0,
            "nontracked": 0,
            "outofpage": 0,
            "slot_code": "/21863221228/Header_Bidding_WK_1_Unit_6_728x90",
            "slot_sizes": [
                [
                    728,
                    90
                ]
            ]
        },
        "code": "div-gpt-ad-1592672991533-0",
        "mediaTypes": {
            "banner": {
                "sizes": [
                    [
                        728,
                        90
                    ]
                ]
            }
        },
        "bids": [
            {
                "bidder": "medianet",
                "params": {
                    "cid": "8CU2S7H8Y",
                    "crid": "697548552"
                }
            },
            {
                "bidder": "sovrn",
                "params": {
                    "tagid": "741476"
                }
            },
            {
                "bidder": "between",
                "params": {
                    "w": "728",
                    "h": "90",
                    "s": "3919633"
                }
            },
            {
                "bidder": "smartyads",
                "params": {
                    "placementId": "19257"
                }
            },
            {
                "bidder": "reklamstore",
                "params": {
                    "regionId": 1086929
                }
            }
        ]
    },
    {
        "hbm_zone": {
            "userid": 475,
            "websiteid": 1353,
            "zoneid": 4241,
            "lazy_loading": 0,
            "lazy_loading_offset": 200,
            "refresh": 0,
            "refresh_limit": 0,
            "nontracked": 0,
            "outofpage": 0,
            "slot_code": "/21863221228/Header_Bidding_WK_1_Unit_7_320x50",
            "slot_sizes": [
                [
                    320,
                    50
                ]
            ]
        },
        "code": "div-gpt-ad-1592676038695-0",
        "mediaTypes": {
            "banner": {
                "sizes": [
                    [
                        320,
                        50
                    ]
                ]
            }
        },
        "bids": [
            {
                "bidder": "medianet",
                "params": {
                    "cid": "8CU2S7H8Y",
                    "crid": "765376729"
                }
            },
            {
                "bidder": "sovrn",
                "params": {
                    "tagid": "741477"
                }
            },
            {
                "bidder": "between",
                "params": {
                    "w": "320",
                    "h": "50",
                    "s": "3919638"
                }
            },
            {
                "bidder": "smartyads",
                "params": {
                    "placementId": "19258"
                }
            },
            {
                "bidder": "reklamstore",
                "params": {
                    "regionId": 1086960
                }
            }
        ]
    },
    {
        "hbm_zone": {
            "userid": 475,
            "websiteid": 1353,
            "zoneid": 4242,
            "lazy_loading": 0,
            "lazy_loading_offset": 200,
            "refresh": 0,
            "refresh_limit": 0,
            "nontracked": 0,
            "outofpage": 0,
            "slot_code": "/21863221228/Header_Bidding_WK_1_Unit_8_300x250",
            "slot_sizes": [
                [
                    300,
                    250
                ]
            ]
        },
        "code": "div-gpt-ad-1592732136354-0",
        "mediaTypes": {
            "banner": {
                "sizes": [
                    [
                        300,
                        250
                    ]
                ]
            }
        },
        "bids": [
            {
                "bidder": "medianet",
                "params": {
                    "cid": "8CU2S7H8Y",
                    "crid": "636639884"
                }
            },
            {
                "bidder": "sovrn",
                "params": {
                    "tagid": "741515"
                }
            },
            {
                "bidder": "between",
                "params": {
                    "w": "300",
                    "h": "250",
                    "s": "3919639"
                }
            },
            {
                "bidder": "smartyads",
                "params": {
                    "placementId": "19259"
                }
            },
            {
                "bidder": "reklamstore",
                "params": {
                    "regionId": 1086961
                }
            }
        ]
    }
];

var adConfig = {
    "priceGranularity": "auto",
    "currency": {
        "adServerCurrency": "CHF",
        "granularityMultiplier": 1
    },
    "cache": {
        "url": false
    },
    "userSync": {
        "filterSettings": {
            "all": {
                "bidders": "*",
                "filter": "include"
            }
        }
    }
};

var adBidderConfig = [];

var adBidders = [];

var blockAdsLoad = false;
if (blockAdsLoad && window.__cmp) {
	window.__cmp('getGooglePersonalization', function (consent, isSuccess) {
		if (!isSuccess) return;
		blockAdsLoad = false;
		if (!consent.googlePersonalizationData.consentValue) {
			googletag.cmd.push(function () {
				googletag.pubads().setRequestNonPersonalizedAds(1);
			});
		}
	});
}

var adMapping = [];


(function() {
	var pbs = document.createElement('script');
	pbs.type = 'text/javascript';
	pbs.async = true;
	pbs.src = '//hbid.ams3.cdn.digitaloceanspaces.com/prebid.js';
	var target = document.getElementsByTagName('head')[0];
	target.insertBefore(pbs, target.firstChild);
})(); 


(function () {
	var gads = document.createElement('script');
	gads.async = true;
	gads.type = 'text/javascript';
	gads.src = '//www.googletagservices.com/tag/js/gpt.js';
	var target = document.getElementsByTagName('head')[0];
	target.insertBefore(gads, target.firstChild);
})();

if (APS) {
	!function(a9,a,p,s,t,A,g){if(a[a9])return;function q(c,r){a[a9]._Q.push([c,r])}a[a9]={init:function(){q("i",arguments)},fetchBids:function(){q("f",arguments)},setDisplayBids:function(){},targetingKeys:function(){return[]},_Q:[]};A=p.createElement(s);A.async=!0;A.src=t;g=p.getElementsByTagName(s)[0];g.parentNode.insertBefore(A,g)}("apstag",window,document,"script","//c.amazon-adsystem.com/aax2/apstag.js");
}

(function () {
	if ('IntersectionObserver' in window &&
		'IntersectionObserverEntry' in window &&
		'intersectionRatio' in window.IntersectionObserverEntry.prototype) return;
	var plf = document.createElement('script');
	plf.type = 'text/javascript';
	plf.async = true;
	plf.src = '//hbid.ams3.cdn.digitaloceanspaces.com/polyfill.min.js';
	var target = document.getElementsByTagName('head')[0];
	target.insertBefore(plf, target.firstChild);
	window.hbm_polyfill = plf;
})();

function getCpm(bidCpm, bid, pubshare, floor) {
	var bidUSD = (typeof bid.getCpmInNewCurrency === "function") ? bid.getCpmInNewCurrency('USD') : bid.cpm;
	if(bidUSD * pubshare < floor){
		return 0;
	}
	return bidCpm * pubshare; 
}

function getBidderCode(bidderCode) {
	if (adBidders && adBidders[bidderCode]) {
		bidderCode += ',' + adBidders[bidderCode];
	}
	return bidderCode; 
}

pbjs.que.push(function() {
	pbjs.setConfig(adConfig);
	if (Object.keys(adBidderConfig).length > 0)
		pbjs.setBidderConfig(adBidderConfig);
	pbjs.bidderSettings = {
		
	};
	pbjs.addAdUnits(adUnits);
	

	
	pbjs.onEvent('auctionInit', function(data){
		for (var i in data.adUnitCodes) {
			var u = adUnits.filter(function(u) {
				return u.code === data.adUnitCodes[i];
			})[0];
			if (!u) return;
			if (!u.hbm_stats) u.hbm_stats = [];
			u.hbm_stats.push({
				event: 'auctionInit',
				v: 'v2',
				user_id: u.hbm_zone.userid,
				website_id: u.hbm_zone.websiteid,
				zone_id: u.hbm_zone.zoneid,
				refresh: u.hbm_zone.isRefresh ? 't' : '',
			});
		}
	});

	pbjs.onEvent('auctionEnd', function(data){
		for (var i in data.adUnitCodes) {
			sendStatistics(data.adUnitCodes[i]);
		}
	});

	pbjs.onEvent('bidRequested', function(data){
		for (var i in data.bids) {
			var u = adUnits.filter(function(u) {
				return u.code === data.bids[i].adUnitCode;
			})[0];
			if (!u) return;
			if (!u.hbm_stats) u.hbm_stats = [];
			u.hbm_stats.push({
				event: 'bidRequested',
				v: 'v2',
				user_id: u.hbm_zone.userid,
				website_id: u.hbm_zone.websiteid,
				zone_id: u.hbm_zone.zoneid,
				bidderCode: getBidderCode(data.bids[i].bidder),
				refresh: u.hbm_zone.isRefresh ? 't' : '',
			});
		}
	});
	pbjs.onEvent('bidTimeout', function(data){
		for (var i in data) {
			var u = adUnits.filter(function(u) {
				return u.code === data[i].adUnitCode;
			})[0];
			if (!u) return;
			if (!u.hbm_stats) u.hbm_stats = [];
			u.hbm_stats.push({
				event: 'bidTimeout',
				v: 'v2',
				user_id: u.hbm_zone.userid,
				website_id: u.hbm_zone.websiteid,
				zone_id: u.hbm_zone.zoneid,
				bidderCode: getBidderCode(data[i].bidder),
				refresh: u.hbm_zone.isRefresh ? 't' : '',
			});
		}
	});
	pbjs.onEvent('bidResponse', function(data){
		var u = adUnits.filter(function(u) {
			return u.code === data.adUnitCode;
		})[0];
		if (!u) return;
		if (!u.hbm_stats) u.hbm_stats = [];
		u.hbm_stats.push({
			event: 'bidResponse',
			v: 'v2',
			user_id: u.hbm_zone.userid,
			website_id: u.hbm_zone.websiteid,
			zone_id: u.hbm_zone.zoneid,
			bidderCode: getBidderCode(data.bidder),
			timeToRespond: data.timeToRespond,
			width: data.width,
			height: data.height,
			cpm: (typeof data.getCpmInNewCurrency === "function") && data.cpm > 0 ? data.getCpmInNewCurrency('USD') : data.cpm,
			refresh: u.hbm_zone.isRefresh ? 't' : '',
		});
	}); 
	pbjs.onEvent('bidWon', function(data){
		var u = adUnits.filter(function(u) {
			return u.code === data.adUnitCode;
		})[0];
		if (!u) return;
		bidWon(u, data);
	});
	
});

function bidWon(u, data) {
	if (!data) return;
	if (!u.hbm_stats) u.hbm_stats = [];
	u.hbm_stats.push({
		event: 'bidWon',
		v: 'v2',
		user_id: u.hbm_zone.userid,
		website_id: u.hbm_zone.websiteid,
		zone_id: u.hbm_zone.zoneid,
		bidderCode: getBidderCode(data.bidder),
		width: data.width,
		height: data.height,
		cpm: (typeof data.getCpmInNewCurrency === "function") && data.cpm > 0 ? data.getCpmInNewCurrency('USD') : data.cpm,
		refresh: u.hbm_zone.isRefresh ? 't' : '',
	});
}

function sendStatistics(code) {
	
	var u = adUnits.filter(function(u) {
		return u.code === code;
	})[0];
	if (!u || u.hbm_zone.nontracked) return;
	if (!u.hbm_stats || u.hbm_stats.length == 0) return;
	try {
		let x;
		let useXDomainRequest = false;

		if (!window.XMLHttpRequest) {
			useXDomainRequest = true;
		} else {
			x = new window.XMLHttpRequest();
			if (x.responseType === undefined) {
				useXDomainRequest = true;
			}
		}
		if (useXDomainRequest) {
			x = new window.XDomainRequest();
		}
		x.open('POST', '//hb.headbidder.net/statistics.php');
		x.timeout = 3000;

		if (!useXDomainRequest) {
			x.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		}
		x.send('data='+encodeURIComponent(JSON.stringify(u.hbm_stats)));
		delete u.hbm_stats;
	} catch (error) {}
	
}

googletag.cmd.push(function() {
	

	googletag.pubads().disableInitialLoad();
	googletag.pubads().addEventListener('slotOnload', function(event) {
		adUnits.filter(function(u) {
			return u.hbm_zone.slot === event.slot;
		}).forEach(function(u) {
			sendStatistics(u.code);
		});
	});

	if (DFP_PAGEURL !== '')
		googletag.pubads().set('page_url',DFP_PAGEURL);
	googletag.pubads().collapseEmptyDivs();
	googletag.pubads().setCentering(true);
	if (DFP_SRA)
		googletag.pubads().enableSingleRequest();
	googletag.enableServices();
});

if (APS) {
	apstag.init({
		pubID: APS_PUBID,
		adServer: 'googletag',
	});
}

function sendAdserverRequest(u) {
	if (!u.hbm_zone.isForSend) return;
	if (u.hbm_zone.back < (1 + APS)) return;
	u.hbm_zone.isForSend = false;

	if (u.hbm_zone.invoke_video_player) {
		var videoUrl = pbjs.adServers.dfp.buildVideoUrl({
			adUnit: u,
			params: u.hbm_zone.build_video_url
		});
		if (typeof window[u.hbm_zone.invoke_video_player] === "function") {
			window[u.hbm_zone.invoke_video_player](videoUrl);
			var bid = pbjs.getHighestCpmBids([u.code])[0];
			bidWon(u, bid);
		}
		sendStatistics(u.code);
		return;
	}
	else {
		googletag.cmd.push(function() {
			pbjs.que.push(function() {
				pbjs.setTargetingForGPTAsync([u.code]);
				googletag.pubads().refresh([u.hbm_zone.slot]);
			});
		});
	}
}

function startAuction(u) {
	if (blockAdsLoad) return;
	if (!u.hbm_zone.isVisible) return;

	if (!u.hbm_zone.counter || u.hbm_zone.isRefresh) {
		console.log("start auction "+u.code);
		u.hbm_zone.counter = u.hbm_zone.counter || 0;
		u.hbm_zone.counter ++;
		u.hbm_zone.isForSend = true;
		u.hbm_zone.back = 0;

		if (APS && !u.hbm_zone.invoke_video_player) {
			var apsSlots = [];
			apsSlots.push({
				slotID: u.code,
				slotName: u.hbm_zone.slot_code,
				sizes: u.hbm_zone.slot_sizes,
			});

			apstag.fetchBids({
				timeout: PREBID_TIMEOUT,
				slots: apsSlots,
			}, function(bids) {
				googletag.cmd.push(function() {
					apstag.setDisplayBids();
					u.hbm_zone.back += 1;
					sendAdserverRequest(u);
				});
			});
		}

		pbjs.que.push(function() {
			pbjs.requestBids({
				timeout: PREBID_TIMEOUT,
				adUnitCodes: [u.code],
				bidsBackHandler: function(){
					u.hbm_zone.back += 1;
					sendAdserverRequest(u); 
				}
			});
		});

		setTimeout(function() {
			u.hbm_zone.back += (1 + APS);
			sendAdserverRequest(u);
		}, FAILSAFE_TIMEOUT);

		if (u.hbm_zone.refresh && (u.hbm_zone.counter <= u.hbm_zone.refresh_limit || !u.hbm_zone.refresh_limit)) {
			setTimeout(function() {
				u.hbm_zone.isRefresh = true;
				startAuction(u);
			}, u.hbm_zone.refresh);
		}
	}
}

onLoad(); 
setInterval(function() { onLoad(); }, 500);

function onLoad() {
	if (blockAdsLoad) return;

	adUnits.filter(function(u) {
		return u.code && !u.hbm_zone.isExists;
	}).forEach(function(u) {
		var target = document.getElementById(u.code);
		if (target) {
			u.hbm_zone.isExists = true;

			googletag.cmd.push(function() {
				if (u.hbm_zone.invoke_video_player) return;
				if (u.hbm_zone.outofpage)
					u.hbm_zone.slot = googletag.defineOutOfPageSlot(u.hbm_zone.slot_code, u.code);
				else
					u.hbm_zone.slot = googletag.defineSlot(u.hbm_zone.slot_code, u.hbm_zone.slot_sizes, u.code);
				if (adMapping[u.hbm_zone.zoneid])
					u.hbm_zone.slot.defineSizeMapping(adMapping[u.hbm_zone.zoneid]);
				u.hbm_zone.slot.addService(googletag.pubads()).setTargeting("hbm_order", TARGET_ORDER);
				if (!target.innerHTML)
					googletag.display(u.code);
			});

			if (u.hbm_zone.lazy_loading && 'IntersectionObserver' in window) {
				target.outerHTML = "<div id='hbm-"+u.code+"'>" + target.outerHTML + "</div>";
				var target2 = document.getElementById('hbm-'+u.code);
				var observerLazyLoading = new IntersectionObserver(intersectionObserverLazyLoading, { root: null, rootMargin: "0px 0px "+u.hbm_zone.lazy_loading_offset+"px 0px", threshold: [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0] });
				observerLazyLoading.observe(target2);
			}
			if (!u.hbm_zone.lazy_loading) {
				u.hbm_zone.isVisible = true;
				u.hbm_zone.isRefresh = false;
				startAuction(u);
			}
		}
	});
}

function intersectionObserverLazyLoading(entries, observer) {
	entries.forEach(function(entry) {
		var u = adUnits.filter(function(u) {
			return 'hbm-'+u.code === entry.target.id;
		})[0];
		if (u) {
			var v = u.hbm_zone.isVisible;
			u.hbm_zone.isVisible = entry.intersectionRatio > 0;
			if (u.hbm_zone.isVisible && !v) {
				if (!u.hbm_zone.counter) {
					u.hbm_zone.isRefresh = false;
					startAuction(u);
				}
				else if (u.hbm_zone.refresh && (u.hbm_zone.counter <= u.hbm_zone.refresh_limit || !u.hbm_zone.refresh_limit)) {
					u.hbm_zone.isRefresh = true;
					startAuction(u);
				}
			}
		}
	});
};

var resizeTimerId;
if (REFRESH_ONRESIZE) {
	window.addEventListener("resize", function() {
		clearTimeout(resizeTimerId);
		resizeTimerId = setTimeout(doneResizing, 1000);
	});
}

function doneResizing(){
	console.log("resized");
	adUnits.forEach(function(u) {
		u.hbm_zone.counter = 0;
		u.hbm_zone.isRefresh = false;
		startAuction(u);
	});
}

function HBManager() {}

HBManager.prototype.dynamic = function(divid, zoneid) {
	var u = adUnits.filter(function(u) {
		return u.hbm_zone.zoneid == zoneid;
	})[0];
	if (!u) return;
	u.code = divid;
}

HBManager.prototype.refresh = function(zoneid) {
	var u = adUnits.filter(function(u) {
		return u.hbm_zone.zoneid == zoneid;
	})[0];
	if (!u) return;
	u.hbm_zone.counter = 0;
	u.hbm_zone.isRefresh = false;
	startAuction(u);
}

window.HBManager = HBManager; 

}(window, document, pbjs, googletag));

var hbManager = new HBManager();
