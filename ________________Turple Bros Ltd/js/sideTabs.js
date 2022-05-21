// to put left and right fixed menus under header
$(function () {
  var x = '3.4722222222222vw';
  $('#sideTabs .tab-link').each(function (index) {
    // $(this).css({ "left": "-60px" });
    $(this).css({
      left: '-' + x,
    });
  });

  $('.tab-content')
    .mouseover(function () {
      if ($(this).hasClass('sm-event')) {
        $(this).find('.tab-link').css({
          left: '-5vw',
          width: '5vw',
        });
      } else if ($(this).attr('id') === 'panelPartsFinder') {
        $(this).css({
          left: '-450px',
          width: '450px',
        });
      }
    })
    .mouseout(function () {
      $(this).css('left', '0px');
      $(this)
        .find('.tab-link')
        .css({
          left: '-' + x,
          width: x,
        });
    });
  $(this).css({
    left: '-500px',
    width: '500px',
  });

  function handleFixedMenusPos() {
    var menuHeight = $('#comp_1631289418653').height();
    var topHeight = $('#html_1631289355950').height();
    var header_1_navHeight = $('.header-1-nav').height();

    var centerDivTop = $('#CenterDiv').offset();
    var centerDivTop = centerDivTop.top;
    // console.log('centerDivTop ', x);

    var breadcrumpHeight = $(
      '#comp_1633619149125 nav.breadcrumbParent'
    ).height();

    $('#sideTabs').css({
      top: centerDivTop,
    });
    if ($(window).scrollTop() > $('#html_1645757966430').height() - 1) {
      $('#sideTabs').css({
        top: menuHeight,
      });
      if (window.innerWidth > 786) {
        $('#side-navs').css({
          top: menuHeight,
        });
      }
    } else {
      var top =
        $('.header-1-nav').height() + $('nav.breadcrumbParent').height();
      $('#sideTabs').css({
        top: centerDivTop,
      });
      if (window.innerWidth > 786) {
        $('#side-navs').css({
          top: top,
        });
      }
    }
  }
  handleFixedMenusPos();
  $(window).on('scroll', function () {
    handleFixedMenusPos();
  });
  $(window).on('resize', function () {
    handleFixedMenusPos();
    // console.log(window.innerWidth);
  });
});
