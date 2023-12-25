$(document).ready(function () {

    function changeTextContent() {
        $('.row.specs-row .col-lg-6.col-md-2.col-sm-2.col-xs-5.specs-titles.titleColumnResponsive').each(function () {
            var IndicatorText = $(this).text().trim().toLowerCase()
            if (IndicatorText === 'vin') {
                $(this).text('Serial Number')
            }
        });

        // $('.price-box .our-price-div .primary').each(function () {
        //     var IndicatorText = $(this).text().trim().toLowerCase()
        //     if (IndicatorText === 'contact for price') {
        //         $(this).text('Contact for price/availability')
        //     }
        // });
    }

    changeTextContent()

    $.ajaxSetup({
        beforeSend: function () {
            console.log('test');
        },
        complete: function () {
            console.log('completed');

            changeTextContent()
        }
    });
})