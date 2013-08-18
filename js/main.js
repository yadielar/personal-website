$(document).ready(function() {
	//$('body').addClass('loading');
	//$('.all-content').hide();


	// Perform a smooth page scroll to an anchor on the same page
	function filterPath(string) {
		return string
		.replace(/^\//,'')
		.replace(/(index|default).[a-zA-Z]{3,4}$/,'')
		.replace(/\/$/,'');
	}
	var locationPath = filterPath(location.pathname);
	var scrollElem = scrollableElement('html', 'body');

	$('a[href*=#]').each(function() {
		var thisPath = filterPath(this.pathname) || locationPath;
		if (locationPath == thisPath
		&& (location.hostname == this.hostname || !this.hostname)
		&& this.hash.replace(/#/,'') ) {
			var $target = $(this.hash), target = this.hash;
			if (target) {
				var targetOffset = $target.offset().top;
				$(this).click(function(event) {
					event.preventDefault();
					$(scrollElem).animate({scrollTop: targetOffset}, 600, function() {
						location.hash = target;
					});
				});
			}
		}
	});
	// use the first element that is "scrollable"
	function scrollableElement(els) {
		for (var i = 0, argLength = arguments.length; i <argLength; i++) {
			var el = arguments[i],
			$scrollElement = $(el);
			if ($scrollElement.scrollTop()> 0) {
				return el;
			} else {
				$scrollElement.scrollTop(1);
				var isScrollable = $scrollElement.scrollTop()> 0;
				$scrollElement.scrollTop(0);
				if (isScrollable) {
					return el;
				}
			}
		}
		return [];
	}


	// Initialize lazy loading of images
	$("img.lazy").lazyload({ 
	    effect : "fadeIn",
	    threshold : 400
	});

});



$(window).load(function() {
	//$('body').removeClass('loading');
	//$('.all-content').fadeIn('slow');
	//$('.main-loader').hide();

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
