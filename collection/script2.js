$(document).ready(function() {

	 $(window).resize(function (){
        $("body").css({
            position:'absolute',
            left: ($(window).width() - $("body").outerWidth())/2,
   
        });
    });
    $(window).resize();

	$(".img1").hover(function() {
		$("body").css("background-image", "url(bouquet2.jpg)");
	});

	$(".img2").hover(function() {
		$("body").css("background-image", "url(lucky.jpg)");
	});

	$(".img3").hover(function() {
		$("body").css("background-image", "url(bouquet.jpg)");
	});

	$(".img4").hover(function() {
		$("body").css("background-image", "url(flor.jpg)");
	});

	$(".home").hover(function() {
		$("body").css("background-image", "url(grey.jpg)");
	});






});