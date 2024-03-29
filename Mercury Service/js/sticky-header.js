var centerDivMargin;
$(function () {
  var bookNowBtn = $('.other-header-links .lg-content .book-now');
  var breadcrumbParent = $('.breadcrumbParent');
  centerDivMargin = $('.header-3-nav').innerHeight() - 0;
  setTimeout(() => {
    centerDivMargin = $('.header-3-nav').innerHeight() - 0;
  }, 100);
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > $('.header-3-nav .top').height() - 1) {
      if (window.innerWidth <= 767) {
        console.log('window.innerWidth <= 767 => ', window.innerWidth);
        breadcrumbParent.css({
          'margin-top': centerDivMargin,
        });
      }
      $('.header-3-nav').addClass('sticky-header');
      $('.menu-lg-logo-link').addClass('toggle');

      bookNowBtn.css({
        'background-color': 'var(--secondary-color)',
        color: 'var(--white',
      });
      breadcrumbParent.css({
        'margin-top': centerDivMargin,
      });
      if ($('#right-cta-buttons.affix').length) {
        $('#right-cta-buttons.affix').css({
          'margin-top': $('.header-3-nav .bottom').height() + 5,
        });
      }
    } else {
      $('.header-3-nav').removeClass('sticky-header');
      $('.menu-lg-logo-link').removeClass('toggle');
      bookNowBtn.removeAttr('style');
      $('#CenterDiv').css({
        'margin-top': 0,
      });
      $('#right-cta-buttons.affix').removeAttr('style');
      breadcrumbParent.removeAttr('style');
    }
  });
});
