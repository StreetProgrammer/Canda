var toggl=0;
var inv_pages= setInterval(
function(){if($("#detailsParentDiv").size()&& $(".right-cta-buttons").size()){
	$('.inventory-page').css("display","none");
	$('#CenterDiv .movableHtml:nth-child(1)').css("display","none"); 
	$('.seobutton').css("display","none"); 
	
	if(window.location.pathname.search('14602738')>0)
	{
		$(".right-cta-buttons").append('<a class="rt-action-btn get-financed" href="https://www.motorsportsgear.ca/collections/mule-pro-fxr" target="_blank"><span class="glyphicon glyphicon-tags">&nbsp;</span>Shop Accessories</a>');
	}
	else if(window.location.pathname.search('14503951')>0)
	{
		$(".right-cta-buttons").append('<a class="rt-action-btn get-financed" href="https://www.motorsportsgear.ca/collections/shop-all-suzuki-kingquad-750-accessories" target="_blank"><span class="glyphicon glyphicon-tags">&nbsp;</span>Shop Accessories</a>');
	}
	else if(window.location.pathname.search('14585258')>0)
	{
		$(".right-cta-buttons").append('<a class="rt-action-btn get-financed" href="https://www.motorsportsgear.ca/collections/shop-all-suzuki-kingquad-750-accessories" target="_blank"><span class="glyphicon glyphicon-tags">&nbsp;</span>Shop Accessories</a>');
	}
	else if(window.location.pathname.search('14530519')>0)
	{
		$(".right-cta-buttons").append('<a class="rt-action-btn get-financed" href="https://www.motorsportsgear.ca/collections/shop-all-suzuki-kingquad-750-accessories" target="_blank"><span class="glyphicon glyphicon-tags">&nbsp;</span>Shop Accessories</a>');
	}
	else if(window.location.pathname.search('14602733')>0)
	{
		$(".right-cta-buttons").append('<a class="rt-action-btn get-financed" href="https://www.motorsportsgear.ca/collections/brute-force-750-4x4i" target="_blank"><span class="glyphicon glyphicon-tags">&nbsp;</span>Shop Accessories</a>');
	}
	else if(window.location.pathname.search('14602759')>0)
	{
		$(".right-cta-buttons").append('<a class="rt-action-btn get-financed" href="https://www.motorsportsgear.ca/collections/kawasaki-teryx4" target="_blank"><span class="glyphicon glyphicon-tags">&nbsp;</span>Shop Accessories</a>');
	}
	else if(window.location.pathname.search('14602758')>0)
	{
		$(".right-cta-buttons").append('<a class="rt-action-btn get-financed" href="https://www.motorsportsgear.ca/collections/kawasaki-teryx4" target="_blank"><span class="glyphicon glyphicon-tags">&nbsp;</span>Shop Accessories</a>');
	}
	else if(window.location.pathname.search('15539756')>0)
	{
		$(".right-cta-buttons").append('<a class="rt-action-btn get-financed" href="https://www.motorsportsgear.ca/collections/shop-all-suzuki-dr650se-accessories" target="_blank"><span class="glyphicon glyphicon-tags">&nbsp;</span>Shop Accessories</a>');
	}
	else if(window.location.pathname.search('14749378')>0)
	{
		$(".right-cta-buttons").append('<a class="rt-action-btn get-financed" href="https://www.motorsportsgear.ca/collections/shop-all-suzuki-v-strom-650-accessories" target="_blank"><span class="glyphicon glyphicon-tags">&nbsp;</span>Shop Accessories</a>');
	}
	else if(window.location.pathname.search('14749379')>0)
	{
		$(".right-cta-buttons").append('<a class="rt-action-btn get-financed" href="https://www.motorsportsgear.ca/collections/shop-all-suzuki-v-strom-1000-accessories" target="_blank"><span class="glyphicon glyphicon-tags">&nbsp;</span>Shop Accessories</a>');
	}
	else if(window.location.pathname.search('14530508')>0)
	{
		$(".right-cta-buttons").append('<a class="rt-action-btn get-financed" href="https://www.motorsportsgear.ca/collections/shop-all-arctic-cat-atv-accessories" target="_blank"><span class="glyphicon glyphicon-tags">&nbsp;</span>Shop Accessories</a>');
	}
	else if(window.location.pathname.search('14530511')>0)
	{
		$(".right-cta-buttons").append('<a class="rt-action-btn get-financed" href="https://www.motorsportsgear.ca/collections/shop-all-arctic-cat-atv-accessories" target="_blank"><span class="glyphicon glyphicon-tags">&nbsp;</span>Shop Accessories</a>');
	}
	else
	{
		$(".right-cta-buttons").append('<a class="rt-action-btn get-financed" href="https://www.motorsportsgear.ca" target="_blank"><span class="glyphicon glyphicon-tags">&nbsp;</span>Shop Accessories</a>');
	}
	
	$(".ad-tabs").appendTo("#detailsParentDiv");
	toggl=1;
	}
	
	/* Moving Text Us Botton to below the slider for Homepage and in CenterDiv for Inner Pages */
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) &&  $('.kenect-moved').size()==0) {
		//alert('test');
			if($('#carousel-36380').size()>0){
			$('#carousel-36380').after($('#kenect-widget-yhTalnSb2FcfI04a6alU'));
			}
			else{
				$('#CenterDiv').prepend($('#kenect-widget-yhTalnSb2FcfI04a6alU'));
			}
			$('#kenect-widget-yhTalnSb2FcfI04a6alU').attr('class','kenect-moved');
			
			if($('.kenect-moved').size()>0)
				toggl=1;
		}

if(toggl){clearInterval(inv_pages);}
},10);


