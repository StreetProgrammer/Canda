$(document).ready(function () {
  $('.toggle-hours li').on('click', function () {
    $('.toggle-hours .current').removeClass('current');
    $(this).addClass('current');
    $('.opening-hours .hours .active').removeClass('active');
    var target = $(this).attr('target');
    $(this)
      .parent()
      .parent()
      .children('.hours')
      .children(target)
      .addClass('active');
    // $(target).addClass('active');
  });
});

$(document).ready(function () {
  $('#up-down').on('click', function () {
    var spanClass = $('.bottom-fixed .controller span').attr('class');
    var spanNewClass;
    var border;
    if (spanClass === 'down') {
      spanNewClass = 'up';
      border = true;
    } else {
      spanNewClass = 'down';
      border = false;
    }
    console.log(spanClass);
    $('.bottom-fixed .content').slideToggle('slow', function () {
      $('.bottom-fixed .controller span').removeClass();
      $('.bottom-fixed .controller span').addClass(spanNewClass);
      if (border) {
        $('.bottom-fixed .controller').css(
          'border-top',
          '5px solid var(--main-color)'
        );
      } else {
        $('.bottom-fixed .controller').css('border-top', '0');
      }
    });
  });

  $('.toggle-hours').on('click', function () {
    if ($(this).hasClass('open')) {
      $(this).removeClass('open');
    } else {
      $(this).addClass('open');
    }
    console.log('clicked');
  });
});

$(document).ready(function () {
  $('body').find('i').text('');
});

$(document).ready(function () {
  if ($('.model-action-btn.back-btn').length) {
    var el = $('.model-action-btn.back-btn');
    var html = el.html();
    var html = html.replace('Back to Blogs', 'Back to Careers');
    el.html(html);
  }
});
