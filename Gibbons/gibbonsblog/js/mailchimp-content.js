// $(document).ready(function () {
//     if ($('div#mailchimp').length) {
//         console.log('document ready');
//         $('.col-lg-4.col-md-6.col-12.widget-area').append($('div#mailchimp'));
//     }
// });




// function waitForElementToDisplay(selector, time) {
//     if (document.querySelector(selector) != null) {
//         console.log('here we found div#mailchimp');
//         $(document).ready(function () {
//             console.log('document ready');
//             $('.col-lg-4.col-md-6.col-12.widget-area').append($(selector));
//         });
//         // var oldEle = document.querySelector(selector)
//         // var newEle = document.querySelector('div.navbar-brand.visible-xs')
//         // var parent = document.querySelector('.col-lg-4.col-md-6.col-12.widget-area')
//         // parent.appendChild(selector);
//     }
//     else {
//         console.log('Waiting for div#mailchimp !!');
//         setTimeout(function () {
//             waitForElementToDisplay(selector, time);
//         }, time);
//     }
// }

// waitForElementToDisplay('div#mailchimp', 500)