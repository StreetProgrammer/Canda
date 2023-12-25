$(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > $('.header-0-nav .top').height() - 1) {
      $(".header-0-nav").addClass("sticky-header");
      var centerDivMargin = $('.header-0-nav').height();
      $('#CenterDiv').css({ "margin-top": centerDivMargin });
    } else {
      $(".header-0-nav").removeClass("sticky-header");
      $('#CenterDiv').css({ "margin-top": 0 });
    }
  });
});


