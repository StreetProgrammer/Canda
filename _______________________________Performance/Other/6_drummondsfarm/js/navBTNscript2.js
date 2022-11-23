$(document).ready(function() {
    /* ? btn */
    var nav_btn = $('#qu_btn');
    var tab = $('#header-qu');

    nav_btn.click(() => {
        tab.fadeIn(500);
    })
    tab.click(() => {
            tab.fadeOut(500);
        })
        /*Hours btn*/
    var hr_btn = $('#hr_btn');
    var tab2 = $('#header-hr');

    hr_btn.click(() => {
        tab2.fadeIn(500);
    })
    tab2.click(() => {
        tab2.fadeOut(500);
    })
});