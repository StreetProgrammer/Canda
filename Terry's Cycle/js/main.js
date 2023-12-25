(function () {
  var nav = $('#nav_63720'),
    navParent = $('#HeaderDiv'),
    phone = $('.phoneDesktop'),
    search = $('.search-div'),
    stickyOffset = nav.offset().top,
    padding = nav.height();
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= stickyOffset) {
      nav.addClass('sticky-nav');
      phone.addClass('phoneDesktopScroll');
      search.addClass('search-divScroll');
      navParent.css({
        paddingTop: padding + 'px',
      });
      if (window.innerWidth <= 767) {
        var centerDiv = $('#CenterDiv');
        centerDiv.css({
          'margin-top': padding,
        });
      }
    } else {
      nav.removeClass('sticky-nav');
      phone.removeClass('phoneDesktopScroll');
      if (window.innerWidth <= 767) {
        var centerDiv = $('#CenterDiv');
        centerDiv.css({
          'margin-top': padding,
        });
      }
      search.removeClass('search-divScroll');
      navParent.removeAttr('style');
    }
  });
})();

/*handle phone numbers anchor href attr*/
$(document).ready(function () {
  var tel_1 = 'tel:306-842-2711';
  $('body').find('a.tel-1').attr('href', tel_1);
  var tel_2 = '';
  $('body').find('a.tel-2').removeAttr('href');
});

/* slide to top */
$(document).ready(function () {
  $('#scroll-up').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate(
      {
        scrollTop: 0,
      },
      'slow'
    );
    return false;
  });
});

// remove spaces from i tags
$(document).ready(function () {
  $('body').find('i').text('');
});
