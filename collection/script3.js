$(document).ready(function() {

		 $(window).resize(function (){
        $("body").css({
            position:'absolute',
            left: ($(window).width() - $("body").outerWidth())/2,
   
        });
    });

	$(".img1").hover(function() {
		$("body").css("background-image", "url(Speckle.jpg)");
	});

	$(".img2").hover(function() {
		$("body").css("background-image", "url(stripe.jpg)");
	});

	$(".img3").hover(function() {
		$("body").css("background-image", "url(squares.jpg)");
	});

	$(".home").hover(function() {
		$("body").css("background-image", "url(grey.jpg)");
	});




});