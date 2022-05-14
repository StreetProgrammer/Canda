var searchBox = document.getElementById("searchbox")

if (searchBox) {
    searchBox.addEventListener("keyup", function (event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            document.getElementById("searchbtn").click();
        }
    });
}


function srch(pageurl) {
    var e = document.getElementById("pagedd");
    var dest = e.options[e.selectedIndex].value;

    var valuee = document.getElementById('searchbox').value;
    if (valuee != "") {
        if (document.getElementById("pagedd").value == 'new') {
            window.location = "/" + pageurl + "/search/".concat(valuee);
        }
        if (document.getElementById("pagedd").value == 'used') {
            window.location = "/Used-Inventory/search/".concat(valuee);
        }

    }
    else {
        document.getElementById('searchbox').placeholder = "This field is required";

        var sheet = window.document.styleSheets[0];
        sheet.insertRule('input#searchbox::-webkit-input-placeholder {color: red !important}', sheet.cssRules.length);
        sheet.insertRule('input#searchbox::-moz-placeholder {color:#909; opacity:1;}', sheet.cssRules.length);
        sheet.insertRule('input#searchbox:-moz-placeholder {color:#909; opacity:1;}', sheet.cssRules.length);

    }
}

$(document).ready(function () {
    $(".caption.card-body.model-specs.row .col-sm-6.cta-btns.flex-container .green.lightboxs").html('<span class="glyphicon glyphicon-info-sign">&nbsp;</span>Apply For It')

    function changeBoxesContent() {
        $(".caption.card-body.model-specs.row .col-sm-6.cta-btns.flex-container .green.lightboxs").each(function () {
            var IndicatorText = $(this).text().trim().toLowerCase()

            if (IndicatorText === 'request a quote') {
                console.log('IndicatorText F=> ', IndicatorText);
                $(this).html('<span class="glyphicon glyphicon-info-sign">&nbsp;</span>Apply For It')
            }
        });
    }

    $.ajaxSetup({
        beforeSend: function () {
            console.log('test');
        },
        complete: function () {
            console.log('completed');
            changeBoxesContent()
            $(".caption.card-body.model-specs.row .col-sm-6.cta-btns.flex-container .green.lightboxs").html('<span class="glyphicon glyphicon-info-sign">&nbsp;</span>Apply For It')
        }
    });

})

$(window).load(function () {
    console.log('LODDED');
    $(".caption.card-body.model-specs.row .col-sm-6.cta-btns.flex-container .green.lightboxs").html('<span class="glyphicon glyphicon-info-sign">&nbsp;</span>Apply For It')
});




function waitForElementToDisplay(selector, time) {
    if (document.querySelectorAll(selector).length != 0) {
        console.log("Elements Found => ", document.querySelectorAll(selector));
        elements = document.querySelectorAll(selector)
        var index = 0
        for (index; index < elements.length; index++) {
            console.log(elements[index].innerHtml);
            const element = elements[index];

        }
        return;
    }
    else {
        console.log('Waiting!!');
        setTimeout(function () {
            waitForElementToDisplay(selector, time);
        }, time);
    }
}

waitForElementToDisplay('.green.lightboxs', 500)
// var targets = document.querySelectorAll('.green.lightboxs');
// console.log('our targets => ', targets);