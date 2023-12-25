$(function () {
  var centerDivMargin = $('.header-1-nav').height();
  $(window).on("scroll", function () {
    console.log();
    if ($(window).scrollTop() > ($('.header-1-nav .top').height() - 1)) {
      $(".header-1-nav").addClass("sticky-header");
      console.log('centerDivMargin => ', centerDivMargin);
      $('#comp_1623927710262').css({ "margin-top": centerDivMargin });
      if ($('#right-cta-buttons.affix').length) {
        console.log('Exist');
        $('#right-cta-buttons.affix').css({ "margin-top": $('.header-1-nav .bottom').height() + 5 });
      }
    } else {
      $(".header-1-nav").removeClass("sticky-header");
      $('#comp_1623927710262').css({ "margin-top": 0 });
      $('#right-cta-buttons.affix').removeAttr("style");
    }
  });
});


