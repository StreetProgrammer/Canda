var centerDivMargin;
$(function () {
  var main_logo = $('.menu-lg-logo-link img');
  var bookNowBtn = $('.other-header-links .lg-content .book-now');
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
      $('.header-1-nav').addClass('sticky-header');
      $('.menu-lg-logo-link').addClass('toggle');

      main_logo.attr('src', '/site-uploads/1001372/images/SSRRS_Logo 1.svg');
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
      main_logo.attr('src', '/site-uploads/1001372/images/svg-main-logo.svg');
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
