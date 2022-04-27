
//Wow Animation
new WOW().init();

//Aos Animation
AOS.init();

//Tootip
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

$('[data-spy="scroll"]').each(function () {
    var $spy = $(this).scrollspy('refresh')
})