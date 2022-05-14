$(document).ready(function () {
  var slider = null

  slider = $('#descktop-brands-slider').multislider({
    interval: 400,
    duration: 800,
    // pauseAbove: 1
  });
  slider.multislider('pause')
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