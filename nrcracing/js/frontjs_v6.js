var _plm = _plm || [];
var toggl = 0;
var inv_pages = setInterval(
	function () {

		//if($("#myTab-accordion .panel-heading").size() ==0){$('#myTab').tabCollapse(); toggl=1;}


		if ($("#detailsParentDiv").size() && $(".right-cta-buttons").size()) {
			$('.inventory-page').css("display", "none");
			$('#CenterDiv .movableHtml:nth-child(1)').css("display", "none");
			$('.seobutton').css("display", "none");

			/*Add Shop Accessories*/
			$(".right-cta-buttons").append('<a class="rt-action-btn accessories" href="/Kawasaki-Accessories"><span class="glyphicon glyphicon-tags">&nbsp;</span>Shop Accessories</a>');
			$(".rt-action-btn.get-financed").attr('href', '/Finance-Center/');
			$(".rt-action-btn.get-financed").attr('onclick', ' ');
			$(".ad-tabs").appendTo("#detailsParentDiv");


			/* Parts pages modification*/
			if (window.location.pathname.search("Covers") > 0 | window.location.pathname.search("covers") > 0 | window.location.pathname.search("Motorcycle-Virgil") > 0 | window.location.pathname.search("ATV-Virgil") > 0 | window.location.pathname.search("Side-x-Side-Virgil") > 0) {
				$("a[aria-controls='ad-docs']").text("Instructions");
				$(".documents h3").text("Instructions");
				$(".documents h3").after("Click on the PDF Download Link Below");
				$("a[aria-controls='ad-Contact']").css("display", "none");
			}
			toggl = 1;
		}

		/* Weather script */
		if ($(".pelm-container").size() == 0 && $(".plemx-root").size() == 0) {

			_plm.push(['_btn', 113562]);
			_plm.push(['_loc', 'caon11723']);
			_plm.push(['location', document.location.host]);
			(function (d, e, i) {
				if (d.getElementById(i)) return;
				var px = d.createElement(e);
				px.type = 'text/javascript';
				px.async = true;
				px.id = i;
				px.src = ('https:' == d.location.protocol ? 'https:' : 'http:') + '//widget.twnmm.com/js/btn/pelm.js?orig=en_ca';
				var s = d.getElementsByTagName('script')[0];

				var py = d.createElement('link');
				py.rel = 'stylesheet'
				py.href = ('https:' == d.location.protocol ? 'https:' : 'http:') + '//widget.twnmm.com/styles/btn/styles.css'

				s.parentNode.insertBefore(px, s);
				s.parentNode.insertBefore(py, s);
			})(document, 'script', 'plmxbtn');

		}



		/* Make the Sidebar Filter sticky*/
		$('#accordion1').affix({
			offset: {
				top: function () {
					return (this.top = $('#HeaderDiv').outerHeight(true) + $('.filters').outerHeight(true) + $('#CenterDiv > div:first-child').outerHeight(true))
				},
				bottom: 0,
			}
		})





		if (toggl) { clearInterval(inv_pages); }


	}, 10);

/*
var toggl2=0;
var myTab= setInterval(
function(){
	
	if($("#myTab-accordion .panel-heading").size() ==0){$('#myTab').tabCollapse(); toggl2=1;}

	
if(toggl2){clearInterval(myTab);}


},10);

*/


/* Add FavIcon MEta tags */
(function () {
	var link = document.createElement('link'); link.type = 'image/x-icon'; link.rel = 'shortcut icon'; link.href = '/site-uploads/1001191/Files/favicon_1.ico'; document.getElementsByTagName('head')[0].appendChild(link);
}());

$(document).ready(function () {
	/* Make Video bg sticky to avoid the header gap */
	$('.video-background').affix({
		offset: {
			top: function () {
				return (this.top = $('#HeaderDiv').outerHeight(true))
			},

		}
	});
	/* Sticky slider to be toggled*/
});

function stickyToggle() {
	$('#sticky-slider').toggleClass('coll');
}

