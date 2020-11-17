//Img login
bg_hieght_1 = $('section .group_img .background').height();
bg_hieght_2 = $('section .group_content .gr_content').height();
if (bg_hieght_1 > bg_hieght_2) {
	bg_hieght = bg_hieght_1;
}
else{
	bg_hieght = bg_hieght_2;
}

var win_width = window.innerWidth;
if (win_width > 991) {
	$('section .group_img .background').css("height", bg_hieght);
	$('section .group_content').css("height", bg_hieght);
}


if (win_width > 440) {
	bg_hieght_set = (bg_hieght/5);
	$('section .group_img .messenger img').css("height", bg_hieght_set);
	$('section .group_img .messenger').css("left", "calc(43% - "+bg_hieght_set+"px)");
}
else{
	bg_hieght_set = (bg_hieght/7);
	$('section .group_img .messenger img').css("height", bg_hieght_set);
	$('section .group_img .messenger').css("left", "calc(43% - "+bg_hieght_set+"px)");
}

$(document).on('click', '.click_more', function(){
	$('section .group_img .gr_content').removeClass('hidden');
	bg_hieght_content = $('section .group_img .gr_content').height() * 1 + 230;

	var win_width = window.innerWidth;
	if (win_width > 991) {
		if (bg_hieght_content > bg_hieght) {
			$('section .group_content').css("height", bg_hieght_content);
			$('section .group_img .gr_content').css("height", bg_hieght_content);
		}
		else{
			$('section .group_img .gr_content').css("height", bg_hieght);
		}
	}
	else if (win_width < 575){
		bg_hieght_content = bg_hieght_content + 100;
		$('section .group_img').css("height", bg_hieght_content);
		$('section .group_img .gr_content').css("height", bg_hieght_content);
	}
	else{
		$('section .group_img').css("height", bg_hieght_content);
		$('section .group_img .gr_content').css("height", bg_hieght_content);
	}
});


$(document).on('click', '.btn_login', function(){
	$('#button_action').val('login');
	$('.group_registration').css('display', 'none');
	$('.group_login').css('display', 'block');
});
$(document).on('click', '.btn_registration', function(){
	$('#button_action').val('registration');
	$('.group_registration').css('display', 'block');
	$('.group_login').css('display', 'none');
});


$(window).scroll(function() {
	if ($(this).scrollTop() >= 20) {
		$('#return-to-top').fadeIn(200);
	} else {
		$('#return-to-top').fadeOut(200);
	}
});

$(document).on('click', '.click_move', function(e){
	$(".text_select").focus();
});

$('section .group_content .gr_content input').focus(function() {
	list = $('section .group_content .gr_content input.text_login');
	list.each(function() {
		val = $( this ).val();
		if (val) {
			$(this).parents('.form-group').addClass('input_focus');
		}
		else{
			$(this).parents('.form-group').removeClass('input_focus');
		}
	});
	$(this).parents('.form-group').addClass('input_focus');
});


$(document).on('click', '#return-to-top', function(){
	$('body,html').animate({
		scrollTop : 0
	}, 500);
});


$(document).ready(function() {
	$('.select').select2({
		allowClear: true,
	});
});

//notify
function setNotify(message, type){
	$.notify({
		title: '<b style="font-weight: 700;">Thông báo: </b>',
		icon: '<i class="fas fa-check"></i>',
		message: message
	},{
		type: type,
		animate: {
			enter: 'animated fadeInUp',
			exit: 'animated fadeOutRight'
		},
		placement: {
			from: "top",
			align: "right"
		},
		offset: 70,
		spacing: 10,
		z_index: 999999,
		template: '<div data-notify="container" class="col-xs-7 col-sm-6 col-md-5 col-lg-4 alert-notify alert alert-{0}" role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss">&times;</button><span data-notify="icon"></span> <span data-notify="title">{1}</span> <span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>'
	});
};
