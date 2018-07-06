$(document).ready(function(){

  /*-----header-----*/
  //HAMBURGER
  $('.nav-icon').click(function(){
      $(this).toggleClass('open');
      $('.main-menu').toggleClass('open-menu');
  });

  $('.nav-icon').click(function(){
      $(this).toggleClass('open-menu');
      $('body').toggleClass('disable-scroll');
  });

  /*-----header-----*/
  $('.one-time').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });

  /*----animate-----*/
  $(".main-about_animate-left").animated( "fadeInLeft");
  $(".main-about_animate-right").animated( "fadeInRight");

  $(".main-servises_antimate").animated( "fadeInLeft");
  $(".main-servises_antimate-1").animated( "fadeInRight");
  $(".main-servises_antimate-2").animated( "fadeInRight");

  $(".product_1").animated( "fadeInRight");
  $(".product_2").animated( "fadeInRight");
  $(".product_3").animated( "fadeInRight");
  $(".product_4").animated( "fadeInRight");

  $(".product_4").animated( "fadeInRight");
  /*----animate-----*/

   $('.price__btn').click(function(){
       $(this).toggleClass('active');
   });

   $('.price-child__btn').click(function(){
       $(this).toggleClass('active');
   });


});
