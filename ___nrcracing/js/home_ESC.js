       $('#comp_1577665140292 .open-details-btn').each(function(){ 

            var oldUrl = $(this).attr("href"); // Get current url
            var newUrl = oldUrl.replace("Home", "Kawasaki-Products"); // Create new url
			
			var oldclass = $(this).attr("class"); // Get current url
			var newclass = oldUrl.replace("pushstate", " "); // Create new url


            $(this).attr("href", newUrl); // Set herf value
			$(this).attr("class", newclass); // Set herf value

        });
		//$( "#comp_1552861121377" ).append( "<p class='text-center'><a class='btn btn-primary btn-lg' href='/New-Car-Inventory/'>See More</a></p>" );
       /*$('#comp_1553399930316 .open-details-btn').each(function(){ 

            var oldUrl = $(this).attr("href"); // Get current url
            var newUrl = oldUrl.replace("Home", "Used-Cars"); // Create new url
			
			var oldclass = $(this).attr("class"); // Get current url
			var newclass = oldUrl.replace("pushstate", " "); // Create new url


            $(this).attr("href", newUrl); // Set herf value
			$(this).attr("class", newclass); // Set herf value

        });		
		
		$( "#comp_1553399930316" ).append( "<p class='text-center'><a class='btn btn-primary btn-lg' href='/Used-Cars/'>See More</a></p>" );
		
		$('#comp_1552861121377').collapse('show');
		$('#comp_1553399930316').collapse('hide');
		
*/