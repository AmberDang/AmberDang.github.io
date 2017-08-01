$(function() {
   $('.scroll-down').click (function() {
     $('html, body').animate({scrollTop: $('.ok').offset().top }, 'slow');
     return false;
   });
 });
