if($('#searchbox').length){
setTimeout(function() {
    document.getElementById("searchbox").addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            document.getElementById("searchbtn2").click();
        }
    });
}, 2000);
}

function srch() {
    //var e = document.getElementById("pagedd");
    //var dest= e.options[e.selectedIndex].value;
    var valuee = document.getElementById('searchbox2').value;
    if (valuee != "") {
        window.location = "/Search-Inventory/search/".concat(valuee);
    } else {
        document.getElementById('searchbox2').placeholder = "This field is required";
        var sheet = window.document.styleSheets[0];
        sheet.insertRule('input#searchbox2::-webkit-input-placeholder {color: red !important}', sheet.cssRules.length);
        sheet.insertRule('input#searchbox2::-moz-placeholder {color:#909; opacity:1;}', sheet.cssRules.length);
        sheet.insertRule('input#searchbox2:-moz-placeholder {color:#909; opacity:1;}', sheet.cssRules.length);
    }
}