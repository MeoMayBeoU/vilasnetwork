
$(window).scroll(function() {
	if ($(this).scrollTop() >= 20) {
		$('#return-to-top').fadeIn(200);
	} else {
		$('#return-to-top').fadeOut(200);
	}
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
