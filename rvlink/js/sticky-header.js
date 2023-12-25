var centerDivMargin;
$(function () {
  var bookNowBtn = $('.other-header-links .lg-content .book-now');
  var breadcrumbParent = $('.breadcrumbParent');
  centerDivMargin = $('.header-1-nav').innerHeight() - 0;
  var desktop_logo;
  setTimeout(() => {
    desktop_logo = $('.nav-desktop-logo');
    centerDivMargin = $('.header-1-nav').innerHeight() - 0;
  }, 100);
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > $('.header-1-nav .top').height() - 1) {
      console.log('desktop_logo => ', desktop_logo);
      if (window.innerWidth <= 767) {
        breadcrumbParent.css({
          'margin-top': centerDivMargin,
        });
      }
      $('.header-1-nav').addClass('sticky-header');
      $('.menu-lg-logo-link').addClass('toggle');

      desktop_logo.attr('style', 'margin: 1px;max-width: 70% !important');
      bookNowBtn.css({
        'background-color': 'var(--secondary-color)',
        color: 'var(--white',
      });
      breadcrumbParent.css({
        'margin-top': centerDivMargin,
      });
      if ($('#right-cta-buttons.affix').length) {
        $('#right-cta-buttons.affix').css({
          'margin-top': $('.header-1-nav .bottom').height() + 5,
        });
      }
    } else {
      $('.header-1-nav').removeClass('sticky-header');
      $('.menu-lg-logo-link').removeClass('toggle');
      desktop_logo.attr('style', 'margin: 1px;max-width: 95% !important;');
      bookNowBtn.removeAttr('style');
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
