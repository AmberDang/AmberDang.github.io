$(document).ready(function) {
  $("#button").click(function() {
      $('html, body').animate({
          scrollTop: $("#scroll").offset().top
      }, 2000);
  });
