	$(document).ready(function(){
		
		$(window).scroll(function(){
			if($(window).scrollTop()>100){
				$('#navAn').css("height", "50px").css("padding-top", "0px");
				
			}else{
				$('#navAn').css("height", "100px").css("padding-top", "20px");
			}
		});



	});


