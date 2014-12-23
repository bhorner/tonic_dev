$(document).ready(function(){
	
	var getHeight = $(".get-height").outerHeight();
	$('.height').height(getHeight);
	$('.height-padding').height(getHeight-80);
	$('.heightx2').height(getHeight*2);

	var getHeight2 = $(".get-height2").outerHeight();
	$('.height2').height(getHeight2);
	$('.height-padding2').height(getHeight2-80);
	$('.heightx22').height(getHeight2*2);

});

