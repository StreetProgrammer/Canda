$(function () {
  var centerDivMargin = $('.header-2-nav').innerHeight() - 0;
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 20) {
      $(".header-2-nav").addClass("sticky-header");
      // $(".menu-lg-logo-link").addClass("toggle");
      // console.log('centerDivMargin => ', centerDivMargin);
      $('#comp_1637851101408').css({
        "margin-top": centerDivMargin
      });
      if ($('#right-cta-buttons.affix').length) {
        $('#right-cta-buttons.affix').css({
          "margin-top": $('.header-2-nav .bottom').height() + 5
        });
      }

    } else {
      $(".header-2-nav").removeClass("sticky-header");
      // $(".menu-lg-logo-link").removeClass("toggle");
      $('#comp_1637851101408').css({
        "margin-top": 0
      });
      $('#right-cta-buttons.affix').removeAttr("style");
    }
  });
});