// ;
// "use strict";

jQuery(document).ready(function($){
  
$('.imageBlock-mainImage').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: true,
	fade: true,
	asNavFor: '.gallery',
	prevArrow: $('.leftButton'),
	nextArrow: $('.rightButton'),
	speed: 200
});

$('.gallery').slick({
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  asNavFor: '.imageBlock-mainImage',
	  centerMode: true,
	  focusOnSelect: true,
	  arrows: true,
	  prevArrow: $('.leftButton'),
	  nextArrow: $('.rightButton'),
	  speed: 200,
	  dots: false
});

$(document).ready(function(){
	
	$('.imageBlock').removeClass('m-display_none');

    $(window).scroll(function () {
    	var doc_w = $(document).width();

        if ($(this).scrollTop() > 200 && doc_w > 1000) {
            $('.upButton').fadeIn();
        } else {
            $('.upButton').fadeOut();
        }
    });
    $('.upButton').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
});

});// jQuery wrapper function end