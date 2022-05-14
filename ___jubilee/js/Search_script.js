
setTimeout(function () {
  function clickSearchBtn(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
      document.getElementById("sm-searchbtn").click();
    }
  }
  if (typeof (document.getElementById('searchbox')) != 'undefined' && document.getElementById('searchbox') != null) document.getElementById("searchbox").addEventListener("keyup", function (e) { clickSearchBtn(e) });
  document.getElementById("sm-searchbox").addEventListener("keyup", function (e) { clickSearchBtn(e) });
  document.getElementById("sm-searchbtn").addEventListener("click", function (e) { srch() });

}, 2000);


function srch() {
  console.log('Search function run');

  var valuee = document.getElementById('sm-searchbox').value;
  if (valuee != "") {
    window.location = "/Search-Inventory/search/".concat(valuee);
  }
  else {
    if (typeof (document.getElementById('searchbox')) != 'undefined' && document.getElementById('searchbox') != null) {
      document.getElementById('searchbox').placeholder = "This field is required";
    }
    document.getElementById('sm-searchbox').placeholder = "This field is required";
    var sheet = window.document.styleSheets[0];
    sheet.insertRule('input#searchbox::-webkit-input-placeholder {color: red !important}', sheet.cssRules.length);
    sheet.insertRule('input#searchbox::-moz-placeholder {color:#909; opacity:1;}', sheet.cssRules.length);
    sheet.insertRule('input#searchbox:-moz-placeholder {color:#909; opacity:1;}', sheet.cssRules.length);
  }
}