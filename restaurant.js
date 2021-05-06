$(document).ready(function(){

	$(window).scroll(function(){
		var scrollTopValue = $(window).scrollTop();
		if (scrollTopValue > 100) {
		$(".header").addClass("nav-fixed-top");
		}
		else {
			$(".header").removeClass("nav navbar-inverse nav-fixed-top")
		}
		
	});	

$(".scrollup").click(function(){
	var value = $(window).scrollTop();
	if(value > 750 ){
		$(window).scrollTop(1);
	}else if(value < 750){
		$(window).scrollTop(5300);
	}
});
	$(".color-button").click(function(){
		$(".list").toggle(2000);
		$(".color-button").css("margin-right","200px");
	});

	
	 $(".blue").mouseover(function(){
		$("h2,#special,h3,h4,h5").css("color","blue");
		$("button").css("background-color","blue");
	});
	$(".orangered").mouseover(function(){
			$("h2,#special,h3,h4,h5").css("color","orangered");
			$("button").css("background-color","orangered");

		});
	$(".green").mouseover(function(){
		$("h2,#special,h3,h4,h5").css("color","green");
		$("button").css("background-color","green");
	});



	 $("#aboutus").click(function(){
		$(window).scrollTop(630);
	});
	  $("#contact").click(function(){
		$(window).scrollTop(1100);
	});


	$(".btn-lg").click(function(){
		$(window).scrollTop(2000);
	});

 });
	
