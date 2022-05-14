$(document).ready(function () {
  var slider = null
  slider = $('#descktop-brands-slider').multislider({
    // continuous: true,
    interval: 3000,
    duration: 3000,
    // pauseAbove: 767
  });
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