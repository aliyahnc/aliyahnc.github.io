$(document).ready(function() {

	 $(window).resize(function (){
        $("body").css({
            position:'absolute',
            left: ($(window).width() - $("body").outerWidth())/2,
   
        });
    });

	$(".img1").hover(function() {
		$("body").css("background-image", "url(stars.png)");
	});

	$(".img2").hover(function() {
		$("body").css("background-image", "url(calais.jpg)");
	});

	$(".img3").hover(function() {
		$("body").css("background-image", "url(stars2.jpg)");
	});

	$(".home").hover(function() {
		$("body").css("background-image", "url(grey.jpg)");
	});




});