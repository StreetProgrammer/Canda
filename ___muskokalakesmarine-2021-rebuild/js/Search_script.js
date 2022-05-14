document.getElementById("searchbox")
	.addEventListener("keyup", function (event) {
		event.preventDefault();
		if (event.keyCode === 13) {
			document.getElementById("searchbtn").click();
		}
	});
function srch() {
	//var e = document.getElementById("pagedd");
	//var dest= e.options[e.selectedIndex].value;
	var valuee = document.getElementById('searchbox').value;
	if (valuee != "") {
		window.location = "/Search-Inventory/search/".concat(valuee);
	}
	else {
		document.getElementById('searchbox').placeholder = "This field is required";
		var sheet = window.document.styleSheets[0];
		sheet.insertRule('input#searchbox::-webkit-input-placeholder {color: red !important}', sheet.cssRules.length);
		sheet.insertRule('input#searchbox::-moz-placeholder {color:#909; opacity:1;}', sheet.cssRules.length);
		sheet.insertRule('input#searchbox:-moz-placeholder {color:#909; opacity:1;}', sheet.cssRules.length);
	}
}



$(function () {
	/*$('.search-form').submit(function(){
	window.location.href='/'+pageName+'/search/'+$('.search-form .modernFilterText').val();
	});*/

	$('.Subcategory .loadMore').click();
	$('#subcategory_filterSection').on('shown.bs.collapse', function () {
		$('.Subcategory .loadMore').click();
	});
	setTimeout(function () {
		$('.Subcategory .loadMore').click();
	}, 1000);
});
