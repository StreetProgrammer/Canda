
setTimeout(function () {
  function clickSearchBtn(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
      document.getElementById("searchbtn").click();
    }
  }
  document.getElementById("searchbox").addEventListener("keyup", function (e) { clickSearchBtn(e) });
  document.getElementById("sm-searchbox").addEventListener("keyup", function (e) { clickSearchBtn(e) });
  document.getElementById("sm-searchbtn").addEventListener("click", function (e) { srch() });

}, 2000);


function srch() {
  console.log('Search function run');
  //var e = document.getElementById("pagedd");
  //var dest= e.options[e.selectedIndex].value;
  var valuee = document.getElementById('searchbox').value || document.getElementById('sm-searchbox').value;
  if (valuee != "") {
    window.location = "/Search-Inventory/search/".concat(valuee);
  }
  else {
    document.getElementById('searchbox').placeholder = "This field is required";
    document.getElementById('sm-searchbox').placeholder = "This field is required";
    var sheet = window.document.styleSheets[0];
    sheet.insertRule('input#searchbox::-webkit-input-placeholder {color: red !important}', sheet.cssRules.length);
    sheet.insertRule('input#searchbox::-moz-placeholder {color:#909; opacity:1;}', sheet.cssRules.length);
    sheet.insertRule('input#searchbox:-moz-placeholder {color:#909; opacity:1;}', sheet.cssRules.length);
  }
}