$(document).on("click touchend", "#openBottomSheet, #closeBottomSheet", function () {
  var sliderContainer = $('.bottom-sheet');
  var openBtn = $('#openBottomSheet');

  var id = $(this).attr('id');
  if ($(this).attr('id') === 'openBottomSheet') {
    sliderContainer.css("bottom", '0');
    openBtn.css("display", 'none');

  } else if ($(this).attr('id') === 'closeBottomSheet') {
    sliderContainer.css("bottom", '-50%');
    openBtn.css("display", 'block');
  }
});

$(document).ready(function () {
  $('body').find('i').text('');
});

$(document).ready(function () {
  var anchors = $('#myTabContent').children('a[data-toggle=tab]');
  for (let i = 0; i < anchors.length; i++) {
    el = $(anchors[i]);
    el.on('click', function () {
      setTimeout(() => {
        handleTabAnchors();
      }, 300);
    })
  }
  handleTabAnchors();
});

function handleTabAnchors() {
  var anchors = $('#myTabContent').children('a[data-toggle=tab]');
  for (let i = 0; i < anchors.length; i++) {
    el = $(anchors[i]);
    el.removeClass('active');
    var tabContent = $(el.next('.tab-pane')[0]);
    var isActive = tabContent.hasClass('active in');
    console.log("isActive => ", isActive);
    if (isActive) {
      el.addClass('active');
    }
  }
}
