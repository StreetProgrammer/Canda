var centerDivMargin;
$(function () {
  var breadcrumbParent = $('.breadcrumbParent');
  centerDivMargin = $('.header-1-nav').innerHeight() - 0;
  setTimeout(() => {
    centerDivMargin = $('.header-1-nav').innerHeight() - 0;
  }, 100);
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > $('.header-1-nav .top').height() - 1) {
      if (window.innerWidth <= 767) {
        console.log('window.innerWidth <= 767 => ', window.innerWidth);
        breadcrumbParent.css({
          'margin-top': centerDivMargin,
        });
      }
      // else {

      // }
      $('.header-1-nav').addClass('sticky-header');
      $('.menu-lg-logo-link').addClass('toggle');
      // console.log('centerDivMargin => ', centerDivMargin);
      $('#CenterDiv').css({
        // 'margin-top': centerDivMargin,
        'margin-top': 0,
      });
      if ($('#right-cta-buttons.affix').length) {
        $('#right-cta-buttons.affix').css({
          'margin-top': $('.header-1-nav .bottom').height() + 5,
        });
      }
    } else {
      $('.header-1-nav').removeClass('sticky-header');
      $('.menu-lg-logo-link').removeClass('toggle');
      $('#CenterDiv').css({
        'margin-top': 0,
      });
      $('#right-cta-buttons.affix').removeAttr('style');
      breadcrumbParent.removeAttr('style');
    }
  });
});

// if ($('#51785').length || $('#51810').length || $('#51810').length) {
//   $(document).ajaxComplete(function () {
//     centerDivMargin = $('.header-1-nav').innerHeight() - 0;
//     console.log("2 centerDivMargin => ", centerDivMargin);
//   });
// }
