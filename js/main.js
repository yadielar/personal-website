$(document).ready(function() {
	//$('body').addClass('loading');
	//$('.all-content').hide();
	$("img.lazy").lazyload({ 
	    effect : "fadeIn"
	});

	/* show more */
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

/*
$(window).load(function() {
	$('body').removeClass('loading');
	$('.all-content').fadeIn('slow');
	$('.main-loader').hide();
});
*/