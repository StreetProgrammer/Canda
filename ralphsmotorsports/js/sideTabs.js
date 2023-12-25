$(function () {

  $("#sideTabs .tab-link").each(function (index) {
    // $(this).css({ "left": "-60px" });
    $(this).css({ "left": "-8vh" });
  });

  $(".tab-content")
    .mouseover(function () {
      if ($(this).attr('id') === "panelHCWH") {
        $(this).css({ "left": "-400px", "width": "400px" })
      } else if ($(this).attr('idx') === "panelWeather") {
        $(this).css({ "left": "-500px", "width": "500px" })
      } else {
        $(this).css("left", "-300px")
      }
    })
    .mouseout(function () {
      $(this).css("left", "0px")
    });


  // Expand all Filters by default
  $('.filter-collapse-container .collapse').collapse('show');
  $(this).prop('disabled', true);
  $('#collapse-trigger-collapse').prop('disabled', false);

  // to put left and right fixed menus under header
  function handleFixedMenusPos() {
    var headerHeight = $('#html_1565898881394').height() + $('#comp_1565898895352').height() + 5
    $('#sideTabs').css({ "top": headerHeight });
  }

  handleFixedMenusPos()


  $(window).on('resize', function () {
    handleFixedMenusPos()
  });

});