$(function () {
  var centerDivMargin = $('.header-1-nav').innerHeight() - 0;
  var menu_cart = $('.lg-content .shopping-cart');
  menu_cart.hide()
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > ($('.header-1-nav .top').height() - 1)) {
      $(".header-1-nav").addClass("sticky-header");
      $(".menu-lg-logo-link").addClass("toggle");
      // console.log('centerDivMargin => ', centerDivMargin);
      $('#comp_1637093505748').css({
        "margin-top": centerDivMargin
      });
      if ($('#right-cta-buttons.affix').length) {
        $('#right-cta-buttons.affix').css({
          "margin-top": $('.header-1-nav .bottom').height() + 5
        });
      }

      menu_cart.show();
    } else {
      $(".header-1-nav").removeClass("sticky-header");
      $(".menu-lg-logo-link").removeClass("toggle");
      $('#comp_1637093505748').css({
        "margin-top": 0
      });
      $('#right-cta-buttons.affix').removeAttr("style");
      menu_cart.hide()
    }
  });
});