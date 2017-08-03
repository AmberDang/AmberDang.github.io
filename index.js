window.sr = ScrollReveal();
  sr.reveal('.showcase-bottom', {
    mobile: true,
    duration: 2000,
    origin:'bottom'
  });

  sr.reveal('.showcase-left', {
    mobile: true,
    distance: '60px',
    duration: 3500,
    origin:'left'
  });

  sr.reveal('.showcase-right', {
    mobile: true,
    distance: '60px',
    duration: 3500,
    origin:'right'
  });


  sr.reveal('.showcase-enter', {
    mobile: true,
    duration: 3500,
    easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
  });


  function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
  }

  var $root = $('html, body');
  $('a').click(function() {
      $root.animate({
          scrollTop: $( $.attr(this, 'href') ).offset().top
      }, 500);
      return false;
  });
