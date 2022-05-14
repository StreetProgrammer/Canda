// function waitForElementToDisplay(selector, time) {
//     if (document.querySelector(selector) != null) {
//         console.log('here we are', window.innerWidth);
//         var oldEle = document.querySelector(selector)
//         var newEle = document.querySelector('div.navbar-brand.visible-xs')
//         var parent = document.querySelector('div.navbar-header')

//         parent.replaceChild(newEle, oldEle);
//     }
//     else {
//         console.log('Waiting!!');
//         setTimeout(function () {
//             waitForElementToDisplay(selector, time);
//         }, time);
//     }
// }

// waitForElementToDisplay('div.SW-container.hidden-xs', 500)

$(function () {
    function changeFavicon() {
        console.log('run')
        $('head').append('<link type="image/x-icon" rel="shortcut icon" href="/site-uploads/1001237/Images/favicon.ico">')
    }

    changeFavicon();
});