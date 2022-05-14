setInterval(function () {
  if ($('#comp_1577369906184').size() > 0 && $('.updated-rand').size() == 0) {
    $('#comp_1577369906184 .randomAdDetails.pushstate').each(function () {
      var oldUrl = $(this).attr('href'); // Get current url
      var newUrl = oldUrl.replace('Home', 'Featured-&-On-Sale');
      newUrl = newUrl.replace('randad', 'adid'); // Create new url

      var oldclass = $(this).attr('class'); // Get current url
      var newclass = oldclass.replace('pushstate', 'updated-rand'); // Create new url

      $(this).attr('href', newUrl); // Set herf value
      $(this).attr('class', newclass); // Set herf value
    });
  }

  /* ADding Docs to Specs section and remove specs section while its empty*/
  $('a[aria-controls="model-docs"]').text('specifications');

  if ($('#model-Contact').size && !$('.updated-location-info').size()) {
    $('#model-Contact .col-sm-5').html(
      '<div class="updated-location-info dealer-address text-left">		<h3 class="col-xs-12" ><span class="glyphicon glyphicon-envelope"></span>&nbsp;Contact Information	</h3>		<hr><h4>Electromaax Canada</h4>		 			<div class="col-xs-12"> 			<p><span class="glyphicon glyphicon-map-marker"></span>5552 King Street, Beamsville,<br/> Ontario, Canada, L0R 1B3</p>			</div><div><p>Phone: <a href="tel:1-866-945-8801">1-866-945-8801<a/></p><p>Outside US <a href="tel:1-905-945-8800">1-905-945-8800</a></p><p>Fax: 1-905-563-8806</p></div>					<hr/>	<h4>Electromaax USA</h4>					<div class="col-xs-12">				<p><span class="glyphicon glyphicon-map-marker"></span>2045 Niagara Falls Blvd Unit #9 <br/>  Niagara Falls, NY, 14304</p>			</div>			<div><p>Phone: <a href="tel:1-866-945-8801">1-866-945-8801</a></p><p>Alternative#:<a href="tel:1-905-945-8800"> 1-905-945-8800</a></p></div>	<div> </div>'
    );

    /* Add star for required fields */
    $(".required[type='text'], #comment").after(
      "<span class='required-star'>*</span>"
    );
  }

  /* Adding model title to BreadCrump */
  // if ($("#detailsParentDiv").size() > 0 && $('.breadcrumbParent').size() == 0 && $('.breadcrumb-details').size() == 0) {
  // 	$('.custom-breadcrumb').addClass("breadcrumb-details");
  // 	$('.breadcrumb li:last-child').wrapInner(function () {
  // 		return "<a href='/" + $('.breadcrumb li:last-child').text() + "'></a>";
  // 	});
  // 	$('.breadcrumb').append("<li>" + $('.model-title').text() + "</li>");
  // }
}, 30);

$(document).ready(function () {
  if ($('#detailsParentDiv').length) {
    var $wrapper = $('#detailsParentDiv');

    var ul = $wrapper.find('#detals-tabs');
    var htmlContent = ul.html();
    htmlContent = htmlContent.replace('Overview', 'Description');
    ul.html(htmlContent);
    console.log('ANCHR => ', ul.html());
  }
});
