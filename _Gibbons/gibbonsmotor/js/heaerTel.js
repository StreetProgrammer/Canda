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