bg_hieght = $('#particles-about .container').height();
$('#particles-about').css("height", bg_hieght);

bg_hieght_1 = $('#particles-procedure .container').height();
bg_hieght_1 = (bg_hieght_1+170)/2;
$('#particles-procedure').css("height", bg_hieght_1 );
$('#particles-procedure').css("margin-bottom", bg_hieght_1-100 );

$(window).scroll(function() {
	if ($(this).scrollTop() >= 50) {		// If page is scrolled more than 50px
		$('#return-to-top').fadeIn(200);	// Fade in the arrow
	} else {
		$('#return-to-top').fadeOut(200);   // Else fade out the arrow
	}
});
$(document).on('click', '#return-to-top', function(){
	$('body,html').animate({
		scrollTop : 0					   // Scroll to top of body
	}, 500);
});
