$(document).ready(function () {
  if (!window.location.href.includes('eshop/checkout')) {

    if ($('#descktop-home-brands-slider').length) {
      var slider1 = null;
      slider1 = $('#descktop-home-brands-slider').multislider({
        continuous: true,
        duration: 6000
        // interval: 400,
        // duration: 800,
        // pauseAbove: 1
      });
      slider1.multislider('pause');
      setTimeout(() => {
        slider1.multislider('unPause');
      }, 2000);
    }

    if ($('#descktop-global-brands-slider').length) {
      var slider2 = null;
      slider2 = $('#descktop-global-brands-slider').multislider({
        continuous: true,
        duration: 6000
        // interval: 400,
        // duration: 800,
        // pauseAbove: 1
      });
      slider2.multislider('pause');
      setTimeout(() => {
        // slider2.multislider('unPause');
      }, 2000);
    }
  }

});