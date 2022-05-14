
// function handleTel() {
//     var ele = document.querySelector('a.navbar-brand.visible-xs')
//     console.log('ele => ', ele);
// }

// handleTel()


$(document).ready(function () {
    console.log('DOM is Ready');
    // $('a.navbar-brand.visible-xs').replaceWith('<div class="navbar-brand visible-xs" > <a class="xs-phone" href="tel:1-855-833-0058"><span class="glyphicon glyphicon-earphone"></span> <span>Salmon Arm, BC </span></a> <a class="xs-phone" href="tel:1-800-266-9569"><span class="glyphicon glyphicon-earphone"></span> <span>Gibbons, AB </span></a></div>');
});



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
