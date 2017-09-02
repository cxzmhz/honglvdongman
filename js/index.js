$(function () {
	console.log('hello world');

	(function(w){
		function Ajaxs(option){
			this.init(option);
		}
		Ajaxs.prototype={
			constructor:Ajaxs,
			init:function(option){
				if(option.clickSelector){
					this.initEvent(option);
				}else{
					this.initAjax(option);
				}
				
			},
			initAjax:function(option){
				$.ajax({
					url: option.url,
					success: function (data) {
						// console.table(data);
						$(option.selector).html(template(option.templateId, data));
						if(option.initSwiper&&typeof(option.initSwiper)=='function'){
							option.initSwiper();
						}
					}
				});
			},
			initEvent:function(option){
				var that =this;
				var url=option.url;
				$(option.clickSelector).click(function(){
					$(option.clickSelector).removeClass('active');
					$(this).addClass('active');
					option.url=url+$(this).attr('type');
					// console.log(option.url);
					that.initAjax(option);
				});
			}
		}
		w.Ajaxs=Ajaxs;
	})(window);

	var ajax_tabClick=new Ajaxs({
		url:'http://127.0.0.1:9091/api/gethometab/',
		selector:'#tab .tabContent',
		clickSelector:'#tab .tabbar li',
		templateId:'tab_template'
	});

	var ajax_slide=new Ajaxs({
		url:'http://127.0.0.1:9091/api/getlunbo',
		selector:'#swiper-container .swiper-wrapper',
		templateId:'slide_template',
		initSwiper:function(){
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

	

	var ajax_tabInit=new Ajaxs({
		url:'http://127.0.0.1:9091/api/gethometab/1',
		selector:'#tab .tabContent',
		templateId:'tab_template'
	});


	

	$('.icon-category').click(function(){
		$('#zhexiubu').fadeIn();
		$('#module').css({
			transform:'none',
			transition:'transform 0.5s',
			top:$('body').scrollTop()
		});
		$('#layout_second').css({
			transform:'translateX(70%)',
			transition:'all 0.5s'
		});
		$('body').css('overflow','hidden');
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
		$('body').css('overflow','visible');
	})

	


})