$(document).ready(function () {

    function changeBoxesContent() {
        $('.price .ttl').each(function () {
            var IndicatorText = $(this).text().trim().toLowerCase()
            if (IndicatorText === 'contact for price') {
                $(this).text('Contact for price/availability')
            }
        });

        $('.price-box .our-price-div .primary').each(function () {
            var IndicatorText = $(this).text().trim().toLowerCase()
            if (IndicatorText === 'contact for price') {
                $(this).text('Contact for price/availability')
            }
        });
    }

    changeBoxesContent()

    $.ajaxSetup({
        beforeSend: function () {
            console.log('test');
        },
        complete: function () {
            console.log('completed');

            changeBoxesContent()
        }
    });
})
