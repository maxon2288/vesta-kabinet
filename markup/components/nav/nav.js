function nav() {
	$(".nav").stick_in_parent();

	$(".nav-mobile").click(function() {
		$(".nav-container, .overlay").toggleClass("visible");
	});

}