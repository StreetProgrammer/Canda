// global scripts

/*handle phone numbers anchor href attr*/
$(document).ready(function () {
  var tel_1 = 'tel:18443776734';
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
    if (!e.target.matches('a')) {
      var href = $(this).data('href');
      window.location = href;
    }
  });
});
/* End Handle Fake anchors */

// Website Scripts

/* Start Change site menu content for mobile */
$(function () {
  $('button.navbar-toggle').html(
    $('button.navbar-toggle').html() + '<span>Menu</span>'
  );
});
/* End Change site menu content for mobile */

/* Start  */
$(function () {
  var content = [
    {
      html: '<h3>Mobile e-contracting</h3><p>Sign documents and contracts wherever you are.</p>',
      img: '/site-uploads/1001400/images/icons/hand-dollar.svg',
    },
    {
      html: '<h3>Digital pre-approval</h3><p>Fast-track the approval process by applying online and get your results fast!</p>',
      img: '/site-uploads/1001400/images/icons/coins.svg',
    },
    {
      html: '<h3>Low monthly payments</h3><p>You can own and save at the same time with reduced monthly payments.</p>',
      img: '/site-uploads/1001400/images/icons/handshake.svg',
    },
    {
      html: '<h3>Competitive interest rates</h3><p>Our team will work to provide you with the lowest interest rates on the market.</p>',
      img: '/site-uploads/1001400/images/icons/hand-dollar.svg',
    },
    {
      html: '<h3>Approval within minutes</h3><p>Don’t wait! Get approved for a plan today.</p>',
      img: '/site-uploads/1001400/images/icons/coins.svg',
    },
    {
      html: '<h3>Newfoundland owned and operated</h3><p>We are proudly invested in our home province and all those a part of it.</p>',
      img: '/site-uploads/1001400/images/icons/handshake.svg',
    },
  ];

  $('.circle-wrapper .toggler.active img').attr(
    'src',
    $('.circle-wrapper .toggler.active img').attr('src').replace('r-', '')
  );

  $('.circle-wrapper').on('click', '.toggler', function (e) {
    e.preventDefault();

    $('.circle-wrapper .toggler.active img').attr(
      'src',
      $('.circle-wrapper .toggler.active img')
        .attr('src')
        .replace('/icons/', '/icons/r-')
    );

    var target = $(this).parent().find('.inner-content');
    target.html(content[$(this).data('target')]['html']);

    $(this).parent().find('.toggler').removeClass('active');

    $(this).addClass('active');

    $('.circle-wrapper .toggler.active img').attr(
      'src',
      content[$(this).data('target')]['img']
    );
  });
});
/* End  */
