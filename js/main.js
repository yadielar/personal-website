$(document).ready(function() {

	// Fixed Menu Toggle
	var fixNav = $('#fx-menu-nav'),
	fixNavItems = $('#fx-menu-nav li');

	function showMenu() {
		fixNav.animateCSS('fadeInDown');
		fixNavItems.animateCSS('fadeInDown', function(){
			fixNav.addClass('visible');
		});
	}
	function hideMenu() {
		fixNav.animateCSS('fadeOutUp');
		fixNavItems.animateCSS('fadeOutUp', function(){
			fixNavItems.hide();
			fixNav.removeClass('visible');
		});
	}
	$("#fx-menu-btn").on("tap", function(){
		if (!fixNav.hasClass('visible')) {
			showMenu();
		} else {
			hideMenu();
		}
	});
	$("#fx-menu-nav a").on("click", function(){
		hideMenu();
	});


	// Contact buttons effects
	$("#contact .social img").mouseover(function(){
		$(this).animateCSS('pulse');
	});


	// Initialize lazy loading of images
	$("img.lazy").lazyload({
		effect: "fadeIn",
		threshold: 400
	});

});



$(window).load(function() {

	// Perform a smooth page scroll to an anchor on the same page
	function filterPath(string) {
		return string
		.replace(/^\//,'')
		.replace(/(index|default).[a-zA-Z]{3,4}$/,'')
		.replace(/\/$/,'');
	}
	var locationPath = filterPath(location.pathname);
	var scrollElem = $('html, body');

	$('a[href*=#]').each(function() {
		var thisPath = filterPath(this.pathname) || locationPath;
		if (locationPath == thisPath && (location.hostname == this.hostname || !this.hostname) && this.hash.replace(/#/,'') ) {
			var $target = $(this.hash), target = this.hash;
			if (target) {
				var targetOffset = $target.offset().top;
				$(this).click(function(event) {
					event.preventDefault();
					$(scrollElem).animate({scrollTop: targetOffset}, 400, function() {
						location.hash = target;
					});
				});
			}
		}
	});


	// Only load 3 portfolio items at a time
	$("#portfolio img").hide();
	$("#portfolio img").slice(0, 3).show();
	
	$("#portfolio #more").click(function(){
		var showing = $("#portfolio img:visible").length;
		$("#portfolio img").slice(showing - 1, showing + 3).fadeIn('fast');
		$("#portfolio img").each(function(){
			if($(this).is(':hidden')){
				$("#portfolio #more").show();
			}
			else{
				$("#portfolio #more").hide();
			}
		});
	});
	
});
