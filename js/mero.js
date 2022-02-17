$(document).ready(function(){
$(window).scroll(function(){
	if($(this).scrollTop()>	135)
	{
		$(".bgg").addClass("redd")
	}
	else
	{
		$(".bgg").removeClass("redd")
	}
	if($(this).scrollTop()>	185)
	{
		$(".down").fadeIn()
	}
	else
	{
		$(".down").fadeOut()
	}
})
})

//Wow Animation
new WOW().init();

//Aos Animation
    AOS.init();

//Owl Carousel
    $(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});
    $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1200:{
            items:3,
            nav:true,
            loop:true
        }
    }
})
//Tootip
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$('[data-spy="scroll"]').each(function () {
  var $spy = $(this).scrollspy('refresh')
})

/*
var scrollLink = $('.scroll');

	//Smooth scrolling
	scrollLink.click(function(e) {
		e.preventDefault();
		$('body,html').animate({
			scrollTop: $(this.hash).offset().top
		}, 1000);
	});

	// Active link switching
	$(window).scroll(function(){
		var scrollbarLocation = $(this).scrollTop();

		scrollLink.each(function) {

			var sectionOffset = $(this.hash).offset().top

			if ( sectionOffset <= scrollbarLocation) {
				$(this).parent().addClass('active');
				$(this).parent().siblings().removeClass('active');
			}
		}
	})
*/

