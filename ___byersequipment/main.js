$(document).ready(function () {

    function changeModalContent() {
        if ($('.deposit-info').length > 0) {
            console.log('founded');
            $('.modal-content p').text("If you're interested in a vehicle or piece of equipment & would like to purchase it, we recommend you place a Deposit on it to Reserve it. Holds require a Non-refundable deposit which is an authorization on your credit card. This is your COMMITMENT to purchase. If you are unsure of a model, we recommend that you call, email or stop in and speak with one of our knowledgeable sales staff before placing your deposit.* Pre-Owned Equipment will have the option for refund within 24hrs if the customer stops in to view the vehicle and is not what they were hoping it to be. We try to be as transparent as we can be with our pre-owned listing information & photos. ")
        } else {
            console.log('Not Here');
        }
    }

    changeModalContent()

    $.ajaxSetup({
        beforeSend: function () {
            console.log('test');
        },
        complete: function () {
            console.log('completed');

            changeModalContent()
        }
    });
})
