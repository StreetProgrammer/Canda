$(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 100) {
      $(".row.main-header-row").addClass("sticky-header");
      var centerDivMargin = $('.row.main-header-row').height();
      $('#CenterDiv').css({ "margin-top": centerDivMargin });
    } else {
      $(".row.main-header-row").removeClass("sticky-header");
      $('#CenterDiv').css({ "margin-top": 0 });
    }
  });
});

$(function () {
  function changeFavicon() {
    console.log('run')
    $('head').append('<link type="image/x-icon" rel="shortcut icon" href="/site-uploads/1001261/Images/favicon.ico">')
  }

  changeFavicon();
});
