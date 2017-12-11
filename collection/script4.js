$(document).ready(function() {

	 $(window).resize(function (){
        $("body").css({
            position:'absolute',
            left: ($(window).width() - $("body").outerWidth())/2,
   
        });
    });


});