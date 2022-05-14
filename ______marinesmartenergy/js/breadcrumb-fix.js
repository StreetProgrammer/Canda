var pathes = {'/Products/':['/build-a-package','/featured-&-on-sale','/marine-product-sales','/marine-alternators','/marine-alternators/cruiser-marine-alternators','/marine-alternators/cruiser-foot-mount-marine-alternator','/marine-alternators/cruiser-saddle-mount-marine-alternator','/marine-alternators/genmaax-marine-alternators','/marine-batteries','/marine-batteries/carbon-marine-batteries','/marine-batteries/electromaax-lithium-ion-marine-batteries','/marine-batteries/battery-safety-disconnect','/packages-alternators-&-regulators','/packages-alternators-&-regulators/volvo','/packages-alternators-&-regulators/volvo/fm-alternators-&-regulators-100-amp-160-amp','/packages-alternators-&-regulators/volvo/fm-alternators-&-regulators-215-amp-250-amp','/packages-alternators-&-regulators/volvo/jm-alternators-&-regulators-215-amp-250-amp','/packages-alternators-&-regulators/westerbeke','/packages-alternators-&-regulators/westerbeke/fm-1-alternators-&-regulators-100-amp-160-amp','/packages-alternators-&-regulators/yanmar','/packages-alternators-&-regulators/yanmar/sm-alternators-&-regulators-100-amp-160-amp','/packages-alternators-&-regulators/yanmar/sm-alternators-&-regulators-215-amp-250-amp','/serpentine-pulley-kits','/serpentine-pulley-kits/yanmar-serpentine-pulley-kits','/serpentine-pulley-kits/yanmar-serpentine-pulley-kits/yanmar-ym-series-serpentine-pulley-kits','/serpentine-pulley-kits/yanmar-serpentine-pulley-kits/yanmar-gm-series-serpentine-pulley-kits','/serpentine-pulley-kits/yanmar-serpentine-pulley-kits/yanmar-hm-series-serpentine-pulley-kits','/serpentine-pulley-kits/yanmar-serpentine-pulley-kits/other-yanmar-serpentine-pulley-kits','/serpentine-pulley-kits/volvo-serpentine-pulley-kits','/serpentine-pulley-kits/perkins-serpentine-pulley-kits','/serpentine-pulley-kits/westerbeke-serpentine-pulley-kits','/serpentine-pulley-kits/universal-serpentine-pulley-kits','/serpentine-pulley-kits/lehman-serpentine-pulley-kits','/serpentine-pulley-kits/nanni-serpentine-pulley-kits','/serpentine-pulley-kits/vetus-serpentine-pulley-kits','/smart-regulators','/smart-regulators/e-maax-csr-smart-regulator','/smart-regulators/e-maax-plus-smart-regulator','/smart-regulators/e-maax-pro-smart-regulator','/marine-accessories'
]};
$(function () {
  if ($('.breadcrumb').size() > 0) {
	  var pathname = location.pathname.toLowerCase();
	  $.each(pathes,function(index,arr){		  
		  if(jQuery.inArray( pathname, arr ) > -1) {
			  console.log(jQuery.inArray( pathname, arr ),pathname); 
			 var link = $('.breadcrumb-item').eq(1).find('a');
			  if (link.size() > 0) {
				link.text(index.replace(/-/g,' ').replace(/\//g,''));
				link.attr('href', index);
			  }
		  }

	  })
  }


})
