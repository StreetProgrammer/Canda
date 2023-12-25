$(document).ready(function () {
  //handle show hide hours
  $('.toggle-hours').on("click", function () {
    if ($(this).hasClass("open")) {
      $(this).removeClass('open')
    } else {
      $(this).addClass('open')
    }
    console.log('clicked');
  });
});

$(document).ready(function () {
  $('#up-down').on('click', function () {
    var spanClass = $(".bottom-fixed .controller span").attr('class');
    var spanNewClass
    var border
    if (spanClass === 'down') {
      spanNewClass = 'up'
      border = true;
    } else {
      spanNewClass = 'down'
      border = false;
    }
    console.log(spanClass);
    $(".bottom-fixed .content").slideToggle("slow", function () {
      $(".bottom-fixed .controller span").removeClass();
      $(".bottom-fixed .controller span").addClass(spanNewClass);
      if (border) {
        $(".bottom-fixed .controller").css('border-top', '5px solid var(--main-color)');
      } else {
        $(".bottom-fixed .controller").css('border-top', '0');
      }
    });
  });
});

function handleFixedMenusPos() {
  var headerHeight = $('.header-0-nav').height() + 5
  $('#side-navs').css({ "top": headerHeight + 'px' });
}

$(document).ready(function () {
  $('body').find('i').text('');

  handleFixedMenusPos()
});

$(window).on('resize', function () {
  handleFixedMenusPos()
});

jQuery(function ($) {
  if ($("div.trbordd").length) {
    $("div.trbordd").addClass('table-responsive')
  }
});
