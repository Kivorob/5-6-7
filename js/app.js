$(document).ready(function () {
	$('.menu__burger').click(function (event) {
		$('.menu__burger,.mob__theme,.menu,.menu__items').toggleClass('active');
		$('body').toggleClass('_lock');
	})
	$('.menu__burger:before').click(function (event) {
		$('.menu__burger,.mob__theme,.menu,.menu__items').toggleClass('active');
		$('body').toggleClass('_lock');
	});
	$('.menu__burger:after').click(function (event) {
		$('.menu__burger,.mob__theme,.menu,.menu__items').toggleClass('active');
		$('body').toggleClass('_lock');
	});
	$(window).resize(function() {
		if ($(window).width() <= '767.98'){
			$('.item').click(function (event) {
				$('.menu__burger,.mob__theme,.menu,.menu__items').toggleClass('active');
				$('body').toggleClass('_lock');
			});
		}
	});
	$('.text__theme').click(function (event) {
		let dark = "css/dark.min.css";
		let light = "css/light.min.css";
		let curr = $('#theme').attr('href');
		if (curr === dark) {
			$('#theme').attr("href", light);
		} else {
			$('#theme').attr("href", dark);
		}
	});
	$('.mob__theme').click(function (event) {
		let dark = "css/dark.min.css";
		let light = "css/light.min.css";
		let curr = $('#theme').attr('href');
		if (curr === dark) {
			$('#theme').attr("href", light);
		} else {
			$('#theme').attr("href", dark);
		}
	});
});