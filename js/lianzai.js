$(function(){
	
	$.ajax({
		url:'http://127.0.0.1:9091/api/getlianzai',
		success:function(data){
			console.log(data);
			$('#lz_main_content').html(template('lz_template',data));
		}
	});

	$('#lz_topbar .icon-back').click(function(){
		history.back();
	})



})