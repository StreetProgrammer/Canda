var $masterOfFilters ='';
var $filter_url='?filters[lastFilter]=model&modernFilter=true&isStaticFilter=true&filters[page]=1';
var $categories_list={
	'ATV-UTV':
		{
		'Accessories':'17569831',
		},
	'CASUAL':{
		'Accessories':'16787534',
		'Lifestyle - Apparel':'16777753',
		'Riding Gear':'16786321'
		},
	'MARINE':{
		'Accessories':'17331249',
		'Lifestyle - Apparel':'16777675',
		'Riding Gear':'16786545',
		'Safety & PFDs':'16786546',
		},
	'MOTORCYCLE':{
		'Accessories':'16792764',

		},
	'SNOWMOBILE':{
		'Accessories':'16785178',
		'Lifestyle - Apparel':'16786047',
		'Riding Gear':'16772510_1',
		'Safety & PFDs':'16787626',
		'Helmets':'16784321',
		'Tracks':'16787507',
		},
	'YETI':{
		'Accessories':'17800252',
		},
}
$(function () {
function sort_alpha(a, b) {                   
	 if ( a[1]['text'] < b[1]['text'] ){
		return -1;
	  }
	  if ( a[1]['text'] > b[1]['text'] ){
		return 1;
	  }
	  return 0;
}
function convert_to_arr(filt){
	var sortable = [];
	$.each(filt, function (key, val) 
	{
		sortable.push([key, val]);
	});
	return sortable;
}
	var $supported_pages=[51785,51810,51041];
	//if($supported_pages.includes(pageId)){
		var $masterOfFilters ='';
		var $filter_url='?filters[lastFilter]=model&modernFilter=true&isStaticFilter=true&filters[page]=1';
		$.getJSON('https://www.equipmentsearch.com/api/json-ads-listings/?dealerId_prog=0&dealerId=8354&dealerInventory=all&categoryId=&subcategoryId=&page=1&order=year%20DESC&limit=100&ShowCatsFirst=0&filterType=static&filtersToList=categories_filter,subcategories_filter,make_filter,model_filter,trim_filter,saleType_filter,price_stats,year_stats,odometer_stats,color_filter,transmission_filter,fuelType_filter,engine_filter,bodyStyle_filter,location_filter&is_part=1&sortFilters%5B0%5D%5Bid%5D=model_filter&sortFilters%5B0%5D%5Border%5D=0&sortFilters%5B0%5D%5Bexpand%5D=true&sortFilters%5B0%5D%5BcustomLabel%5D=Activity&sortFilters%5B0%5D%5Benable%5D=true&sortFilters%5B1%5D%5Bid%5D=categories_filter&sortFilters%5B1%5D%5Border%5D=1&sortFilters%5B1%5D%5Bexpand%5D=true&sortFilters%5B1%5D%5BcustomLabel%5D=Categories&sortFilters%5B1%5D%5Benable%5D=true&sortFilters%5B2%5D%5Bid%5D=subcategories_filter&sortFilters%5B2%5D%5Border%5D=2&sortFilters%5B2%5D%5Bexpand%5D=false&sortFilters%5B2%5D%5BcustomLabel%5D=SubCategories&sortFilters%5B2%5D%5Benable%5D=true&sortFilters%5B3%5D%5Bid%5D=make_filter&sortFilters%5B3%5D%5Border%5D=3&sortFilters%5B3%5D%5Bexpand%5D=true&sortFilters%5B3%5D%5BcustomLabel%5D=Make&sortFilters%5B3%5D%5Benable%5D=true&sortFilters%5B4%5D%5Bid%5D=trim_filter&sortFilters%5B4%5D%5Border%5D=4&sortFilters%5B4%5D%5Bexpand%5D=false&sortFilters%5B4%5D%5BcustomLabel%5D=Trim&sortFilters%5B4%5D%5Benable%5D=true&sortFilters%5B5%5D%5Bid%5D=price_stats&sortFilters%5B5%5D%5Border%5D=5&sortFilters%5B5%5D%5Bexpand%5D=false&sortFilters%5B5%5D%5BcustomLabel%5D=Price&sortFilters%5B5%5D%5Benable%5D=true&startingParams%5Bis_part%5D=1&startingParams%5BdealerId%5D=8354&startingParams%5BdealerMake%5D=&startingParams%5BdealerInventory%5D=&startingParams%5BcategoryId%5D=&startingParams%5BsubcategoryId%5D=&startingParams%5Bonly_instock%5D=0&&relatedFilters%5BrelatedItemsLimit%5D=4&relatedFilters%5BrelatedItemsCategory%5D=&relatedFilters%5BrelatedItemsSubCategory%5D=&relatedFilters%5BrelatedItemsDealer%5D=&relatedFilters%5BrelatedItemsInventory%5D=&token=7xZiF2f4tlD9qZ5Ao3viNcOpDfBPhSr2', function(data) {
		   $masterOfFilters = data["masterOfFilters"]; 
		   
			$.each($masterOfFilters.model_filter, function (modelkey, modelval) {
				$modelClass = modelkey.replace("/", "-");
					$('.main-tabs').append('<li class="dropdown"><a href="#" id="'+$modelClass+'" class="dropdown-toggle" data-toggle="dropdown" role="button">'+modelkey+'&nbsp;&nbsp;<i class="fas fa-caret-down"></i></a>\
					<div class="dropdown-menu mega-level-2">\
					<div class="level-2-hdr"><div>Shop '+modelkey+'</div><div><a href="#" class="mega-filter-link" data-filter="&filters[model]='+modelkey+'">All '+modelkey+'&nbsp;<i class="fas fa-chevron-right"></i></a></div></div>\
						<ul class="'+$modelClass+'-cat-list ">\
						</ul>\
					</div></li>\
						');
					var categories = convert_to_arr(modelval.category_filter);
					categories.sort(sort_alpha);
					
					$.each(categories, function (catkey, catval) {
						//console.log(catval);
						var $cat_icon= ($modelClass in $categories_list && catval[1]['text'] in $categories_list[$modelClass])? '<img class="cat-icon" src="https://www.equipmentsearch.com/uploadedimages/8354/'+$categories_list[$modelClass][catval[1]['text']]+'.jpg">': '';
					 $('.'+$modelClass+'-cat-list').append('<li class="level-2-li">'+$cat_icon+'<a href="#" id="'+catval[1]['text']+'" class="mega-filter-link" data-catid="'+catval[0]+'" data-filter="&filters[categoryId]='+catval[0]+'&filters[model]='+modelkey+'">'+catval[1]['text']+'</a></li>');
						
						var sub_categories = convert_to_arr(catval[1]['subcategory_filter']);
						sub_categories.sort(sort_alpha);
						
						$.each(sub_categories, function (subkey, subval) {
						 $('.'+$modelClass+'-cat-list').append('<li class="level-3-li '+catval[0]+'"><a href="#" id="'+subval[1]['text']+'" class="mega-filter-link" data-filter="&filters[subcategoryId]='+subval[0]+'&filters[model]='+modelkey+'">'+subval[1]['text']+'</a></li>');
					});
					$('.'+$modelClass+'-cat-list').append('<li class="level-3-li shop-all-link '+catval[0]+'"><a href="#" id="'+catval[1]['text']+'" class="mega-filter-link" data-filter="&filters[categoryId]='+catval[0]+'&filters[model]='+modelkey+'">Shop All '+catval[1]['text']+'</a></li>');
				});
			});
			$.browser.device = (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()));
			//if($.browser.device){
				$('.mega-filter-link,.level-2-hdr a').on( "click", function() {
					event.preventDefault();
					//
					var updated_filter= '/shop-online/'+$filter_url+$(this).data('filter');
					window.location.replace(updated_filter);		
				});
			/*}
			else{
				$('.mega-filter-link').on( "click", function() {
					event.preventDefault();
					var updated_filter= $filter_url+$(this).data('filter');
					loadContent(updated_filter);
				});
			}*/
		
			
			if($.browser.device){
				$('.level-2-li > a').unbind();
				$('.dropdown-menu.mega-level-2').on( "click", function(e) {
					e.stopPropagation();
				});
				$('.level-2-li > a').on( "click", function(event){
					
					event.preventDefault();
					$('.level-3-li').removeClass('open');
					$list_selector = '.level-3-li.'+$(this).data('catid');
					$($list_selector).toggleClass('open');
				});
			}
		});

		$('[ppanel="Breadcrumbs"]').eq(0).hide();
		
	//}
	if($supported_pages.includes(pageId)){
		$('.header-1-nav').append('<a class="shop-online-btn visible-xs" href="#">Shop Online&nbsp;&nbsp;<i class="fas fa-store-alt">&nbsp;</i></a>');
	}
	$('.shop-online-btn').on( "click", function(){
		event.preventDefault();
		$('.tabs-control-container').eq(0).addClass('open');
	});
	//$('.shop-online-btn').css({'top':$('.header-1-nav').eq(0).outerHeight()});
	$('.shop-online-close-btn, .container.tabs-control-container.open:before').on( "click", function(){
		event.preventDefault();
		$('.tabs-control-container').eq(0).removeClass('open');
	});
	
	

});

/*
$(document).ajaxComplete(function () {

});

*/