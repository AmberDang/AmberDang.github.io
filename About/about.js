window.sr = ScrollReveal();
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
