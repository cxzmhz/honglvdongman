$(function(){
	
	$.ajax({
		url:'http://127.0.0.1:9091/api/gettopics',
		success:function(data){
			console.log(data);
			$('#zt_main_content').html(template('zt_template',data));
		}
	});


	$('#zt_topbar .icon-back').click(function(){
		history.back();
	})








})