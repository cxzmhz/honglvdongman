$(function () {
	console.log('hellow world');

	$.ajax({
		url: 'http://127.0.0.1:9091/api/getlunbo',
		success: function (data) {
			// console.table(data);
			$('#swiper-container .swiper-wrapper').html(template('slide_template', data));
			var mySwiper = new Swiper('#swiper-container', {
				autoplay: 1000,
				loop: true,
				// 如果需要分页器
				pagination: '.swiper-pagination',
				paginationClickable: true,
				slidesPerView: 1,
				autoplayDisableOnInteraction: false,
			});
		}
	});

	$.ajax({
		url:'http://127.0.0.1:9091/api/gethometab/1',
		success:function(data){
			// console.table(data);
			$('#tab .tabContent').html(template('tab_template',data));
		}
	})
	$('#tab .tabbar li').click(function(){
		$('#tab .tabbar li').removeClass('active');
		$(this).addClass('active');
		$.ajax({
			url:'http://127.0.0.1:9091/api/gethometab/'+$(this).attr('type'),
			success:function(data){
				// console.log(data);
				$('#tab .tabContent').html(template('tab_template',data));
			}
		})
	});

	$('.icon-category').click(function(){
		$('#zhexiubu').fadeIn();
		$('#module').css({
			transform:'none',
			transition:'all 0.5s'
		});
		$('#layout_second').css({
			transform:'translateX(70%)',
			transition:'all 0.5s'
		});
	});
	$('#zhexiubu').click(function(){
		$(this).fadeOut();
		$('#module').css({
			transform:'translateX(-100%)',
			transition:'all 0.5s'
		});
		$('#layout_second').css({
			transform:'none',
			transition:'all 0.5s'
		});
	})

	







})