// global scripts

/*handle phone numbers anchor href attr*/
$(document).ready(function () {
  // var tel_1 = 'tel:7055262248';
  // $('body').find('a.tel-1').attr('href', tel_1);
  // var tel_2 = '';
  // $('body').find('a.tel-2').removeAttr('href');
});

/* slide to top */
$(document).ready(function () {
  $("a[href='#top']").on('click', function (e) {
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

/* Start Handle Fake anchors */
$(function () {
  $('[data-href]').on('click', function (e) {
    var target = $(this).attr('target') || undefined;
    if (!e.target.matches('a')) {
      console.log('target => ', target);
      var href = $(this).data('href');
      if (target === 'blank') {
        window.open(href, target);
      } else {
        window.location = href;
      }
    }
  });
});
/* End Handle Fake anchors */

// Website Scripts

// Handle header logo
var oldContent = $('.nav.navbar-nav').find('>li:nth-child(1) a').html();
$(document).ready(function () {
  $('.nav.navbar-nav')
    .find('>li:nth-child(1) a')
    .html(
      '<img src="/site-uploads/1001368/images/logo.png" style="margin: 1px;max-width: 80%;">'
    );

  function Change_site_menu_content() {
    if (window.innerWidth > 767) {
      $('.nav.navbar-nav')
        .find('>li:nth-child(1) a')
        .html(
          '<img src="/site-uploads/1001368/images/svg/logo.svg" style="margin: 1px;max-width: 95%;">'
        );
    } else {
      $('.nav.navbar-nav').find('>li:nth-child(1) a').html(oldContent);
      $('.nav.navbar-nav')
        .find('>li:nth-child(1) a')
        .css({ 'font-size': '16px' });
    }
  }
  $(function () {
    Change_site_menu_content();
  });

  $(window).on('resize', function () {
    Change_site_menu_content();
  });
  /* End Change site menu content for mobile */
});

// start handle Home SRP
$(document).ready(function () {
  if ($('#page_53040').length) {
    $('#fitmentSearch').length &&
      $('#fitmentSearch').attr('id', 'customFitmentSearch');
  }
  $('#customFitmentSearch').on('click', function () {
    var paremes = $('#fitmentForm').serialize();
    var href = location.href.replace(/\?.*/, '') + 'Adventure/?' + paremes;
    console.log('href => ', href);
    window.location.assign(href);
  });
});
// End handle Home SRP

/* Start Change site menu content for mobile */
$(function () {
  $('button.navbar-toggle').html(
    '<span class="upper bold">Menu</span>' +
      '<img src="/site-uploads/1001362/images/home/menu-bars.svg" alt="" style="width: 100%;">'
  );
});
/* End Change site menu content for mobile */

/* Start Hide Content in VDP */
$(function () {
  if ($('.parts-vdp').length) {
    $('.parts-vdp').length &&
      $('.hidden-vdp').length &&
      $('.hidden-vdp').remove();
  }
});
/* End Hide Content in VDP */

// start Customized Parts VDP Tags Structure
$(document).ready(function () {
  // if ($('.parts-vdp').length) {
  //   var leftPart = $('#ad-left-content');
  //   var rightPart = $('#ad-right-content');
  //   rightPart.length &&
  //     (function () {
  //       rightPart.children().wrapAll('<div class="__ad-right-content"></div>');
  //     })();
  //   leftPart.length &&
  //     (function () {
  //       leftPart.children().wrapAll('<div class="__ad-left-content"></div>');
  //     })();
  // }
});
// End Customized Parts VDP Tags Structure
