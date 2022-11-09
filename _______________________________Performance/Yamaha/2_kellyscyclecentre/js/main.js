// global scripts

/*handle phone numbers anchor href attr*/
$(document).ready(function () {
  // var tel_1 = 'tel:5196883278';
  // $('body').find('a.tel-1').attr('href', tel_1);
  // var tel_2 = 'tel:8556993278';
  // $('body').find('a.tel-2').attr('href', tel_2);
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
    if (!e.target.matches('a')) {
      var href = $(this).data('href');
      window.location = href;
    }
  });
});
/* End Handle Fake anchors */

// Website Scripts

// start Customized Parts VDP Tags Structure
$(document).ready(function () {
  if ($('.parts-vdp').length) {
    var target = $('.right-cta-buttons.hidden-xs');

    target.after(
      '<div class="_added-content">' +
        '<p class="">' +
        '<i class="fas fa-check mr-2"></i> Pickup available at 833 Ellerslie Rd' +
        '</p>' +
        '<p class="">' +
        'Usually ready in 24 hours' +
        '</p>' +
        '<a class="" href="/Map-&-Hours">View store information</a>' +
        '</div>'
    );
  }
});
// End Customized Parts VDP Tags Structure
