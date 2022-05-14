// to put left and right fixed menus under header
$(function () {

  $("#sideTabs .tab-link").each(function (index) {
    // $(this).css({ "left": "-60px" });
    $(this).css({
      "left": "-8vh"
    });
  });

  $(".tab-content")
    .mouseover(function () {
      if ($(this).attr('id') === "panelPartsFinder") {
        $(this).css({
          "left": "-450px",
          "width": "450px"
        })
      } else if ($(this).attr('id') === "panelWeather") {} else {
        $(this).css("left", "-300px")
      }
    })
    .mouseout(function () {
      $(this).css("left", "0px")
    });
  $(this).css({
    "left": "-500px",
    "width": "500px"
  })

  function handleFixedMenusPos() {
    var menuHeight = $("#comp_1631289418653").height();
    var topHeight = $("#html_1631289355950").height();
    var header_1_navHeight = $(".header-1-nav").height();
    var breadcrumpHeight = $("#comp_1633619149125 nav.breadcrumbParent").height();
    if ($(window).scrollTop() > ($('#html_1631289355950').height() - 1)) {
      $('#sideTabs').css({
        "top": menuHeight
      });
      if (window.innerWidth > 786) {
        $('#side-navs').css({
          "top": menuHeight
        });
      }
    } else {
      var top = $(".header-1-nav").height() + $("nav.breadcrumbParent").height();
      $('#sideTabs').css({
        "top": top
      });
      if (window.innerWidth > 786) {
        $('#side-navs').css({
          "top": top
        });
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