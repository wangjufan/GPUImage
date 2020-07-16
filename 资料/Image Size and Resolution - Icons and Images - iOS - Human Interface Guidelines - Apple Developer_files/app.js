$(document).ready(function() {

	var navItems = document.querySelectorAll('.doc-nav .side .has-sublist');
	var hasChildItems, navItemAnchor;
	// function closeAllItems(except) {
	// 	for (var i = 0; i < navItems.length; i++) {
	// 		if (navItems[i] !== except) {
	// 			navItems[i].classList.remove('open');
	// 		}
	// 	}
	// }
	for (var i = 0; i < navItems.length; i++) {
		hasChildItems = !!navItems[i].querySelector('li');
		navItemAnchor = navItems[i].querySelector('a');
		if (hasChildItems) {
			navItemAnchor.addEventListener('click', function (e) {
				e.preventDefault();
				// closeAllItems(e.target.parentNode);
				e.target.parentNode.classList.toggle('open');
				// setNavTop();
				setNavPosition();
			}, true);
		}
	}

	// var openNav, navOffset, openNavOffset;
	// var navContainer = $('.main .doc-nav-container');
	// var selectedNav = navContainer.find('.selected');
	// var navContainerOffset = navContainer.offset().top;
	// var navListOffset = navContainer.children().first().offset().top;
	
	// Position Navigation and Highlight Section in view when Window Scrolls
	// function setNavTop() {
	// 	openNav = navContainer.find('.selected');
	// 	if ($(document).width() > 1023) {
	// 		if (!openNav.length) {
	// 			openNav = selectedNav;
	// 		}
	// 		openNavOffset = -openNav.offset().top + navListOffset; // Y Position of the Open Element in the side navigation
	// 		openNavOffset -= navContainerOffset - navContainer.offset().top; // Adjust by the difference already offset by the sticky pos
	// 		openNavOffset = Math.round(Math.min(openNavOffset, 0));
	// 	}
	// 	navContainer.css('top', openNavOffset);
	// }

	// setNavTop();
	
	var navContainer = $('.main .doc-nav-container');
	var docNav = $('.main .doc-nav-container .doc-nav');
	var alignEnd;
	function setNavPosition() {
		
		if ($(window).height() > docNav.height() + 52 + 25 + 17) {
			if (alignEnd || typeof alignEnd === 'undefined') {
				navContainer.css('align-self', 'flex-start');
				navContainer.css('top', '');
				alignEnd = false;
			}
		} else {
			if (!alignEnd) {
				navContainer.css('align-self', 'flex-end');
				navContainer.css('top', 'initial');
				alignEnd = true;
			}
		}
		
	}

	$(window).resize(setNavPosition);
	setNavPosition();

	// Fade in Videos on load

	$('video').hide(0).fadeIn(500).css("display", "block");

	// Play Videos if clicked

	$('video').click(function() {
		if ($(this).parent().hasClass('device-iphonex-container')) {
			$(this).parent().siblings('.video-play, .video-replay, .video-frame-poster').addClass('hidden');
			$(this)[0].play();
		} else {
			$(this).siblings('.video-play, .video-replay, .video-frame-poster').addClass('hidden');
			$(this)[0].play();
		}
	});

	$('.video-frame-poster').click(function() {
		$(this).addClass('hidden');
		$(this).siblings('.video-play, .video-replay').addClass('hidden');
		$(this).siblings('video')[0].play();
	});

	// For iPhoneX

	$('.device-iphonex-frame').click(function() {
		try {
			$(this).siblings('.video-frame-poster').addClass('hidden');
			$(this).parent().siblings('.video-play, .video-replay').addClass('hidden');
			$(this).siblings('video')[0].play();
		}
		catch(error) {
			//catch errors that are throwing on a single image with no video and supress them.
		}
	});

	// Play Videos with Controls

	$('.video-play, .video-replay, .video-frame-poster').click(function() {
		$(this).addClass('hidden');
		if ($(this).parent().hasClass('video-container-device-iphonex')) {
			$(this).siblings('.video-frame-container').children('.video-frame-poster').fadeOut(50);
			$(this).siblings('.video-frame-container').children('video')[0].play();
		} else {
			$(this).siblings('.video-frame-poster').fadeOut(50);
			$(this).siblings('video')[0].play();
		}
	});

	$('video').bind("ended", function() {
		if ($(this).parent().hasClass('device-iphonex-container')) {
			$(this).parent().siblings('.video-play').hide();
			$(this).parent().siblings('.video-replay, .video-frame-poster').show().css('display', 'block').removeClass('hidden');
			$(this).siblings('.video-frame-poster').hide().removeClass('hidden').fadeIn(600);
		} else {
			$(this).siblings('.video-play').hide();
			$(this).siblings('.video-replay, .video-frame-iphone6s-poster').show().css("display", "block").removeClass('hidden');
			$(this).siblings('.video-frame-poster').hide().removeClass('hidden').fadeIn(600);
		}
	});

	// Animate Scroll to Anchor Links

	$("a[href^=#]").click(function(e) {

		e.preventDefault();
		if ($(this).attr('href') == '#') {
			return;
		}
		var dest = $(this).attr('href');

		$('html,body').animate({ scrollTop: $(dest).offset().top - 64 }, 300);

	});

});


document.addEventListener('DOMContentLoaded', init, false);

var directoryNavMenu, directoryNavFooter, sectionMenuHead, sectionFooterHead;

function init() {
	directoryNavMenu = document.getElementById('directorynav-menu');
	//directoryNavFooter = document.getElementById('directorynav-footer');

	if(directoryNavMenu != null) {
		sectionMenuHead = directoryNavMenu.getElementsByTagName('h3');
		for(var i=0;i<sectionMenuHead.length;i++){
			sectionMenuHead[i].addEventListener('click',toggleFooterNav,false);
		}
	}

	/*if(directoryNavFooter != null) {
		sectionFooterHead = directoryNavFooter.getElementsByTagName('h3');
		for(var i=0;i<sectionFooterHead.length;i++){
			sectionFooterHead[i].addEventListener('click',toggleFooterNav,false);
		}
	}*/

}


function toggleFooterNav(e) {
	e.currentTarget.classList.toggle('enhance');
}
