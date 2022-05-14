// jQuery(function ($) {

//     $(".sidebar-dropdown > a").click(function () {
//         $(".sidebar-submenu").slideUp(200);
//         if (
//             $(this)
//                 .parent()
//                 .hasClass("active")
//         ) {
//             $(".sidebar-dropdown").removeClass("active");
//             $(this)
//                 .parent()
//                 .removeClass("active");
//         } else {
//             $(".sidebar-dropdown").removeClass("active");
//             $(this)
//                 .next(".sidebar-submenu")
//                 .slideDown(200);
//             $(this)
//                 .parent()
//                 .addClass("active");
//         }
//     });

//     $("#close-sidebar").click(function () {
//         $(".page-wrapper").removeClass("toggled");
//     });
//     $("#show-sidebar").click(function () {
//         $(".page-wrapper").addClass("toggled");
//     });

//     $(".close").click(function () {
//         var target = this.getAttribute('close');
//         $('#' + target).collapse('hide')
//     });
// });

// var input = document.querySelector("#phone");
// window.intlTelInput(input, {
//     // allowDropdown: false,
//     // autoHideDialCode: false,
//     // autoPlaceholder: "off",
//     // dropdownContainer: document.body,
//     // excludeCountries: ["us"],
//     // formatOnDisplay: false,
//     // geoIpLookup: function(callback) {
//     //   $.get("http://ipinfo.io", function() {}, "jsonp").always(function(resp) {
//     //     var countryCode = (resp && resp.country) ? resp.country : "";
//     //     callback(countryCode);
//     //   });
//     // },
//     // hiddenInput: "full_number",
//     // initialCountry: "auto",
//     // localizedCountries: { 'de': 'Deutschland' },
//     // nationalMode: false,
//     // onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
//     // placeholderNumberType: "MOBILE",
//     // preferredCountries: ['cn', 'jp'],
//     // separateDialCode: true,
//     utilsScript: "./js/utils.js",
// });


$(function () {
    $('a[href$=#]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 500, 'linear');
    });
});

