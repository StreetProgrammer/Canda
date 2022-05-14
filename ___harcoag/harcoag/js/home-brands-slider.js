$(document).ready(function () {
  if ($('#descktop-brands-slider').length) {
    var slider = null
    slider = $('#descktop-brands-slider').multislider({
      continuous: true,
      duration: 8000,
      // interval: 3000,
      // slideAll: true,
      // pauseAbove: 767
    });
    slider.multislider('pause');
    setTimeout(() => {
      slider.multislider('continuous')
      slider.multislider('unPause');
      $('#descktop-brands-slider .MS-content').trigger('mouseenter');
      $('#descktop-brands-slider .MS-content').trigger('mouseleave');

    }, 1000);

    // $('#descktop-brands-slider .MS-content').on('mouseenter', function () {
    //   console.log("CCCC");
    // })
  }
  if ($(window).width() > 749) {
    $("#descktop-brands-slider").prependTo("#lg-placeholder");
  }
  if ($(window).width() < 749) {
    $("#descktop-brands-slider").prependTo("#sm-placeholder");
  }
  $(window).resize(function () {
    if ($(window).width() > 749) {
      $("#descktop-brands-slider").prependTo("#lg-placeholder");
    }
    if ($(window).width() < 749) {
      $("#descktop-brands-slider").prependTo("#sm-placeholder");
    }
  });
})
// slider = $('#mobile-brands-slider').multislider({
//   continuous: true,
//   // interval: 3000,
//   duration: 3000,
//   // pauseAbove: 767
// });