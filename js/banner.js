$(document).ready(function(){
	var num = 0;
	first_img = $('img.slide:first()').attr('num');
	last_img = $('img.slide:last').attr('num');
	$('img.slide').each(function(){
		if($(this).is(':visible')){
			num = $(this).attr('num');
		}
	});

	$('#prev').click(function(){
		if(num == first_img){
			num = last_img;
			prev = num;
		}
		else{
			var prev = -- num;
		}
		$('img.slide').hide();
		$('img.slide').eq(prev).show();
	});

	$('#next').click(function(){
		if(num == last_img){
			num = -1;
		}
		var next = ++ num;
		$('img.slide').hide();
		$('img.slide').eq(next).show();
	});

	setInterval(function(){
		$('#next').click();
	}, 3000);

});