setInterval(function(){ 
	/*
	if($('.menu-thumbs').size()==0){
		$('<li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" href="/Showroom/">Inventory<span class="caret"></span></a><ul class="dropdown-menu multi-level"><li class="dropdown-submenu"><a href="#" data-toggle="dropdown" class="dropdown-toggle">Kingfisher</a><ul class="dropdown-menu menu-thumbs"><li class="menu-oem"><img src="/site-uploads/1001193/Images/logo-kingfisher-welded.png"/></li><li><a href="/kingfisher/subid/11320/subname/Offshore%20Series%20"><img alt="OFFSHORE SERIES" src="/site-uploads/1001193/Images/OFFSHORE_SERIES.jpg"><span>OFFSHORE SERIES</span></a></li><li><a href="/kingfisher/subid/11321/subname/Coastal%20Series%20 "><img alt="COASTAL SERIES" src="/site-uploads/1001193/Images/COASTAL_SERIES.jpg"><span>COASTAL SERIES</span></a></li><li><a href="/kingfisher/subid/11322/subname/Sport%20Series%20"><img alt="SPORT SERIES" src="/site-uploads/1001193/Images/SPORT_SERIES.jpg"><span>SPORT SERIES</span></a></li><li><a href="/kingfisher/subid/11323/subname/Multi-Species%20Series%20 "><img alt="Multi-Species Series" src="/site-uploads/1001193/Images/Multi-Species_Series_1.jpg"><span>Multi-Species Series</span></a></li><li><a href="/kingfisher/subid/11324/subname/River%20Jet%20Series%20"><img alt="River Jet Series" src="/site-uploads/1001193/Images/River_Jet_Series.jpg"><span>River Jet Series</span></a></li> </ul></li><li class="dropdown-submenu"><a href="#" data-toggle="dropdown" class="dropdown-toggle">Mercury</a><ul class="dropdown-menu menu-thumbs"><li class="menu-oem"><img src="/site-uploads/1001184/Images/Mercury-logo.png"/></li><li><a href="/MERCURY/subid/8942/subname/Outboards%20-%20Verado®%20 "><img alt="Verado" src="/site-uploads/1001193/Images/verado.png"><span>Verado</span></a></li><li><a href="/MERCURY/subid/8943/subname/Outboards%20-%20SeaPro™%20FourStroke%20"><img alt="seapro" src="/site-uploads/1001193/Images/seapro.png"><span>seapro</span></a></li><li><a href="/MERCURY/subid/8940/subname/Outboards%20-%20OptiMax®%20&%20Pro%20XS™%20"><img alt="Pro XS" src="/site-uploads/1001193/Images/Pro_XS.png"><span>Pro XS</span></a></li><li><a href="/MERCURY/subid/8941/subname/Outboards%20-%20FourStroke%20 "><img alt="FourStroke" src="/site-uploads/1001193/Images/FourStroke.png"><span>FourStroke</span></a></li><li><a href="/MERCURY/subid/8939/subname/Outboards%20-%20Jet%20 "><img alt="Jet" src="/site-uploads/1001193/Images/Get.png"><span>Jet</span></a></li></ul></li><li class="dropdown-submenu"><a href="#" data-toggle="dropdown" class="dropdown-toggle">Marlon Boats</a><ul class="dropdown-menu menu-thumbs"><li class="menu-oem"><img src="/site-uploads/1001184/Images/marlon-logo.png"></li><li><a href="/# "><img alt="Jon Boats" src="/site-uploads/1001193/Images/Jon_Boats.jpg"><span>Jon Boats</span></a></li><li><a href="/#"><img alt="Welded Utility" src="/site-uploads/1001193/Images/Welded_Utility.jpg"><span>Welded Utility</span></a></li><li><a href="/# "><img alt="Highfield Inflatables" src="/site-uploads/1001193/Images/Highfield_Inflatables.jpg"><span>Highfield Inflatables</span></a></li><li><a href="/#"><img alt="Marlon Inflatables" src="/site-uploads/1001193/Images/Marlon_Inflatables.jpg"><span>Marlon Inflatables</span></a></li> </ul></li><li class="dropdown-submenu"><a href="#" data-toggle="dropdown" class="dropdown-toggle">Marlon Trailers</a><ul class="dropdown-menu menu-thumbs"><li class="menu-oem"><img src="/site-uploads/1001184/Images/marlon-logo.png"></li><li><a href="/# "><img alt="Boat" src="/site-uploads/1001193/Images/boattrailers.jpg"><span>Boat</span></a></li><li><a href="/# "><img alt="Pontoon" src="/site-uploads/1001193/Images/pontoontrailers.jpg"><span>Pontoon</span></a></li><li><a href="/#"><img alt="ATV + Side-by-Side" src="/site-uploads/1001193/Images/ATV__Side-by-Side.jpg"><span>ATV + Side-by-Side</span></a></li><li><a href="/Marlon/subid/8097/subname/ATV%20Trailer%20 "><img alt="ATV Pull Behind" src="/site-uploads/1001193/Images/ATV_Pull_Behind.jpg"><span>ATV Pull Behind</span></a></li><li><a href="/# "><img alt="Snowmobile" src="/site-uploads/1001193/Images/Snowmobile.jpg"><span>Snowmobile</span></a></li><li><a href="/Marlon/subid/9799/subname/Utility%20 "><img alt="Utility" src="/site-uploads/1001193/Images/Utility.jpg"><span>Utility</span></a></li><li><a href="/#"><img alt="Watercraft" src="/site-uploads/1001193/Images/Watercraft.jpg"><span>Watercraft</span></a></li><li><a href="/# "><img alt="Motorcycle" src="/site-uploads/1001193/Images/Motorcycle.jpg"><span>Motorcycle</span></a></li><li><a href="/#"><img alt="Scissor" src="/site-uploads/1001193/Images/scissorpontoon_a.jpg"><span>Scissor</span></a></li> </ul></li><li><a href="/Pre-Owned-Inventory/">Pre Owned Inventory </a></li><li><a href="/Clearance-Inventory/">Clearance Inventory </a></li><li><a href="/Trade-In/">Trade In </a></li><li><a href="/Brochures/">Brochures </a></li><li><a href="/Promotions/">Promotions </a></li></ul></li>').insertAfter('.navbar .nav > li:nth-child(1)');
		$('<li class="dropdown appointment-drop" ><a class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" href="/">Make an Appointment<span class="caret"></span></a><ul class="dropdown-menu multi-level"><li class="dropdown-submenu"><a href="#" data-toggle="dropdown" class="dropdown-toggle">Salmon Arm</a><ul class="dropdown-menu"><li class="menu-oem"><li><a href="/Contact-Us/">Demo Appointment</a></li><li><a href="/Service-Salmon-Arm/">Service Appointment</a></li> </ul></li><li class="dropdown-submenu"><a href="#" data-toggle="dropdown" class="dropdown-toggle">Gibbons</a><ul class="dropdown-menu "><li class="menu-oem"><li><a href="http://gibbonsmotor-powrsports.simplywebeditor.com/Contact-Us/">Demo Appointment</a></li><li><a href="/Service-Gibbons/">Service Appointment</a></li> </ul></li></ul></li>').insertAfter('.navbar .nav > li:nth-child(4)')
		$('<li class="dropdown location-dorp"><a class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" href="/About-Us/">Our Locations<span class="caret"></span></a><ul class="dropdown-menu"><li><a href="/Gibbons-location/">Gibbons</a></li><li><a href="/Salmon-location/">Salmon Arm</a></li></ul></li>').insertAfter('.navbar .nav > li:nth-child(5)')
	}
	*/

	
		$('ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
			event.preventDefault(); 
			event.stopPropagation(); 
			$(this).parent().siblings().removeClass('open');
			$(this).parent().toggleClass('open');
		});

	}, 500);
	


/* Make menu Sticky */
/*
$('.navbar').affix({
	offset: {
    top: function () {
      return (this.top = $('#html_1446576577113').outerHeight(true))},
    bottom: 0,
	}
});
	*/
	

/* Jome couters Script */
var a = 0;
$(window).scroll(function() {
 if ($('#counter').size()>0){
  var oTop = $('#counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 8000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    a = 1;
 }
 }

});



$(document).ready(function () {
	
/* Service Drop down */
/* Make appointment DropDowns */
    $("#loction").change(function () {
        var val = $(this).val();
        if (val == "Gibbons") {
            $("#service-drop").addClass("active");
			$("#service-drop").html("<option>Select Your Appointment</option><option value='http://gibbonsmotor-powrsports.simplywebeditor.com/Contact-Us/'>Demo Appointment</option><option value='/Service-Gibbons/'>Service Appointment</option>");
        } else if (val == "Salmon") {
			$("#service-drop").addClass("active");
            $("#service-drop").html("<option>Select Your Appointment</option><option value='/Contact-Us/'>Demo Appointment</option><option value='/Service-Salmon-Arm/'>Service Appointment</option>");
        }
    });
	$("#service-drop").change(function () {
        var val = $(this).val();
        window.location.replace(val);
    });	

	/*append mailchimp to right section*/
	
	$('.widget-area').append($('#mc_embed_signup'))

});	

/* Inner Menu script by Taha */
            $('#inner-menu>ul>li').on({
                mouseenter: function() {
					$('#inner-menu>ul>li').removeClass( "active" );
                    $(this).addClass('active');
                    
                },
            })
			

			


       
