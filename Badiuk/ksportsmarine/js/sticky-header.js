$(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 100) {
      $(".header-0-nav").addClass("sticky-header");
      var centerDivMargin = $('.header-0-nav').height();
      $('#CenterDiv').css({ "margin-top": centerDivMargin });
    } else {
      $(".header-0-nav").removeClass("sticky-header");
      $('#CenterDiv').css({ "margin-top": 0 });
    }
  });
});

$(function () {
  function changeFavicon() {
    console.log('run')
    $('head').append('<link type="image/x-icon" rel="shortcut icon" href="/site-uploads/1001271/Images/favicon.ico">')
  }

  changeFavicon();

});
