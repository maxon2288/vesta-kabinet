
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

	$(".form-open").each(function() {
		var it = $(this);
		it.click(function() {
			it.closest('.users__item').find('.users__modal').toggleClass("visible");
		});
	});

	$(".users__buttons .m-link").click(function() {
		$(".users__modal").toggleClass("visible");
	});

	$( ".tabs" ).tabs();
	$( ".user-tabs" ).tabs();

	$(document).ready(function() {
		$('select').niceSelect();
	});
	// $(document).ready(function() {
        $('body').css({ 'visibility': 'visible', 'opacity': '1', })
	// });
	
	$(".turn-td").each(function() {
		var it = $(this);
		it.find(".turn-edit-button").click(function() {
			var itVal = it.find(".turn-id").text();
			it.find('.turn-edit-field').val(itVal);
			it.find(".turn-content").css("display", "none");
			it.find(".turn-content-click").css("display", "flex");
		});	
		it.find(".turn-close").click(function() {
			it.find(".turn-content").css("display", "flex")
			it.find(".turn-content-click").css("display", "none")
		});
	});
	$(".stats-edit").each(function() {
		var it = $(this);
		it.click(function() {
			var itVal = it.closest(".stats__info").find(".stats-info").text();
			console.log(itVal);
			it.closest(".stats__info").find('.stats-field').val(itVal);
			it.closest(".stats__info").find(".stats-content").css("display", "none");
			it.closest(".stats__info").find(".stats-content-click").css("display", "flex");
		});	
	});

	$('.turn-edit').each(function() {
        var it = $(this);
         it.validate({
			rules: {
				number: {
					digits: true,
					required: false,
					maxlength: 4,
				}
			},

			errorPlacement: function (error, element) {
			},

			submitHandler: function() {
				var fieldVal = it.find('.turn-edit-field').val();
				$.ajax({
					success: function(){
						var rowId = it.closest('tr').data("id");
						it.find(".turn-content").css("display", "flex")
						it.find(".turn-content-click").css("display", "none")
					}
				});
			},  
         
         });
	 });
	 $('.form-datepicker').datepicker({});
	$('.stats-content-click').each(function() {
        var it = $(this);
         it.validate({
			rules: {
				numberTg: {	
					required: false,
					maxlength: 20,
				}
			},

			errorPlacement: function (error, element) {
			},

			submitHandler: function() {
				var fieldVal = it.find('.stats-edit-field').val();
				$.ajax({
					success: function(){
						it.closest(".stats__info").find(".stats-content").css("display", "flex")
						it.css("display", "none")
					}
				});
			},  
         
         });
	 });
	

	 $(".users-name").each(function() {
		var it = $(this);
		it.click(function() {
			$.ajax({
				success: function(){
					console.log('fds');
				}
			});
		})
	 });
	 var myregexp = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i;

	$(".add-punct").click(function() {
		$(".vote-punct").append('<div class="vote-punct__item"><input type="text" class="m-field" name="addVote" placeholder="Название пункта" required><div class="delete-punct">-</div></div>');
		$(".delete-punct").click(function() {
			$(this).closest(".vote-punct__item").css("display", "none")
		})
	});

	$(".delete-punct").click(function() {
		$(this).closest(".vote-punct__item").remove();
	});
	

})