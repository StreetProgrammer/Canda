function waitForElementToDisplay(selector, time) {
    if (document.querySelector(selector) != null) {
        console.log('here we are');
        var oldEle = document.querySelector(selector)
        var newEle = document.querySelector('div.navbar-brand.visible-xs')
        var parent = document.querySelector('div.navbar-header')
        parent.replaceChild(newEle, oldEle);
    }
    else {
        console.log('Waiting!!');
        setTimeout(function () {
            waitForElementToDisplay(selector, time);
        }, time);
    }
}

waitForElementToDisplay('a.navbar-brand.visible-xs', 500)


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