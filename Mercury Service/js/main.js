// global scripts

/*handle phone numbers anchor href attr*/
$(document).ready(function () {
  var tel_1 = 'tel:3066934804';
  $('body').find('a.tel-1').attr('href', tel_1);
  var tel_2 = '9056813836';
  $('body').find('a.tel-2').removeAttr('href');
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
