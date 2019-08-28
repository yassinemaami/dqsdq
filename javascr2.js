$(document).ready( function() {
			nb_questions = $(".question").length;
			nb_questions--;
			current = 0;
			
			nb_loaders = $(".loader").length;
			currentLoader=0;
			 var city = geoip_city();
			 var state = geoip_region();
		});
		function proceed(){
			$('.question').hide();
						
			if (current < nb_questions){
				current++;
				$('.question:eq('+current+')').show();
			}
			else{
				$('.buttons').hide();
				// showloaders
				
				if (currentLoader < nb_loaders){
					$('.loader').hide();
					
					$('.loader:eq('+currentLoader+')').show();
					currentLoader++;
					
					setTimeout("proceed()", 2500);
					
				}
			}
