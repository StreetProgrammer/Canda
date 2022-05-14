$(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > ($('#html_1589584633526').height() - 1)) {
      $("#html_1589584633526").css({ 'diplay': 'none' })
      $("#comp_1602511831587").addClass("_fixed");
      var centerDivMargin = $('#comp_1602511831587').height();
      $('#CenterDiv').css({ "margin-top": centerDivMargin });
      if ($('#right-cta-buttons.affix').length) {
        $('#right-cta-buttons.affix').css({ "margin-top": centerDivMargin + 5 });
      }
    } else {
      $("#html_1589584633526").removeAttr("style");
      $("#comp_1602511831587").removeClass("_fixed")
      $('#CenterDiv').css({ "margin-top": 0 });
      $('#right-cta-buttons.affix').removeAttr("style");
    }
  });
});

$(document).ready(function () {
  $('body').find('i').text('');
});

// to put left and right fixed menus under header
$(document).ready(function () {
  function handleFixedMenusPos() {
    var menuHight = $("#comp_1602511831587").height();
    var topHight = $("#html_1589584633526").height();

    if ($(window).scrollTop() > ($('#html_1589584633526').height() - 1)) {
      $('#sideTabs').css({ "top": menuHight });
      if (window.innerWidth > 786) {
        $('#side-navs').css({ "top": menuHight });
      }
    } else {
      $('#sideTabs').css({ "top": topHight + menuHight });
      if (window.innerWidth > 786) {
        $('#side-navs').css({ "top": 0 });
      }
    }
  }
  handleFixedMenusPos()
  $(window).on("scroll", function () {
    handleFixedMenusPos()
  });
  $(window).on('resize', function () {
    handleFixedMenusPos()
    // console.log(window.innerWidth);
  });
});


