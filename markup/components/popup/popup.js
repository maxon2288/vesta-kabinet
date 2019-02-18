function popup() {
    $('.popupClose, .overlay').on('click', function (event) {
        $('body').css('overflow-y', 'auto');
        $('.popup, .overlay, .nav-container').removeClass('visible');
    });

    // $(".popup__container >").click(function() {
    //     $('.popup').removeClass("visible");
    // });

    $(".form-reset").click(function() {
        $(this).closest('form').find('input').val('');
    });

    // $(".popup, .popup__container").click(function(e) {
    //     if (e.target == this) {
    //         $('.popup, .overlay, .header-menu, .humburger-overlay, .period').removeClass('visible');
    //     }
    // });

    // if ($(".popup").hasClass('visible')) {
    //     $(".popup__container").addClass('visible');
    // } else {
    //     $(".popup__container").removeClass('visible');
    // }        

    $(".callPopup").on('click', function (event) {
        event.preventDefault();
        var popup = $(this).attr('data-popupBlock');
        // if ($('.' + popup).hasClass('popup--notfixed')) {
        //     $('.' + popup).scroll(function () {
        //         $('.' + popup).css('top', $(window).scrollTop()+ "px");
        //     });
        // };
        $('body').css('overflow-y', 'auto');
        $('.overlay').addClass('visible');
        $('.' + popup).addClass('visible');
    });

}