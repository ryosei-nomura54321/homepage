	//start
$(function() {
		setTimeout(function(){
		$('.start').fadeOut(500);
	},6700);
});

//open-close-button
$(function(){
  $(".header-open-button").click(function(){
    $(".main-navigation").fadeIn();
    $(this).hide();
    return false;
  });
  $(".header-close-button").click(function(){
    $(".main-navigation").fadeOut();
    $(".header-open-button").show();
    return false;
	});
	$(".header-close").click(function(){
		if(window.innerWidth<768){
			$(".main-navigation").fadeOut();
			$(".header-open-button").show();
			}
	});
});

//swiper
$(function(){
	var mySwiper = new Swiper ('.swiper-container', {
		loop: true,
		slidesPerView: 2,
		spaceBetween: 10,
		centeredSlides : true,
		pagination: '.swiper-pagination',
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		breakpoints: {
			767: {
				slidesPerView: 1,
				spaceBetween: 0
			}
		}
	})
});

//slidein
$(function(){
	$(window).scroll(function (){
			$('.thema, .swiper-container').each(function(){
					var elemPos = $(this).offset().top;
					var scroll = $(window).scrollTop();
					var windowHeight = $(window).height();
					if (scroll > elemPos - windowHeight + 200){
							$(this).addClass('fadein');
					}
			});
	});
});

//topBtn
$(function(){
	var topBtn=$('#pageTop');
	topBtn.hide();
	 
	$(window).scroll(function(){
		if($(this).scrollTop()>500){
			topBtn.fadeIn();
		}else{
			topBtn.fadeOut();
		} 
	});
	 
	topBtn.click(function(){
		$('body,html').animate({
		scrollTop: 0},500);
		return false;
	});
});