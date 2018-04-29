	$(document).ready(function(){
		
		$(window).scroll(function(){
			if($(window).scrollTop()>250){
				$('#navAn').css("height", "50px").css("padding-top", "0px");
				$('#garuda').css("height", "30px").css("width", "auto");
				$('#judul').fadeIn();
				
			}else{
				$('#navAn').css("height", "100px").css("padding-top", "20px");
				$('#garuda').css("height", "50px").css("width","auto");
				$('#judul').fadeOut();
			}
		});



	});


