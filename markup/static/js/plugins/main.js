
$(document).ready(function () {
	editor();

	nav();

	popup ();

	forms();

	var swiper = new Swiper('.table-slider', {
		spaceBetween: 10,
		navigation: {
			nextEl: '.table-next',
			prevEl: '.table-prev',
		},
	});

	$(".users__item").each(function() {
		var it = $(this);
		it.find('.form-open').click(function() {
			it.find('users__modal').addClass("");
		});
	});

	$(".form-open, .users__buttons .m-link").click(function() {

		$(".users__modal").toggleClass("visible");
	});

	$( ".tabs" ).tabs();

	$(document).ready(function() {
		$('select').niceSelect();
	});
	// $(document).ready(function() {
        $('body').css({ 'visibility': 'visible', 'opacity': '1', })
    // });
})