// global scripts

/*handle phone numbers anchor href attr*/
$(document).ready(function () {
  var tel_1 = 'tel:18443776734';
  $('body').find('a.tel-1').attr('href', tel_1);
  var tel_2 = 'tel:9056813836';
  $('body').find('a.tel-2').attr('href', tel_2);
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

$(function () {
  $('#mfg-gallery').lightSlider({
    item: 5,
    slideMove: 2,
    easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
    speed: 600,
    auto: true,
    loop: true,
    pager: false,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          item: 3,
          slideMove: 1,
          slideMargin: 6,
        },
      },
      {
        breakpoint: 480,
        settings: {
          item: 2,
          slideMove: 1,
        },
      },
    ],
  });

  // $('#imageGallery').on('DOMSubtreeModified', function () {
  //   if ($('#normal_vdp').size() > 0) {
  //     $('.vertical .lSSlideWrapper').prepend($('.stock-num, div.back-btn'));
  //   }
  // });

  $('.slid-logo .lSSlideOuter').prepend($('.lSAction'));
});
