$(function () {

    // aimation呼び出し
    if ($('.js-scroll-trigger').length) {
        scrollAnimation();
    }

    // aimation関数
    function scrollAnimation() {
        $(window).scroll(function () {
            $(".js-scroll-trigger").each(function () {
                let position = $(this).offset().top,
                    scroll = $(window).scrollTop(),
                    windowHeight = $(window).height();

                if (scroll > position - windowHeight + 200) {
                    $(this).addClass('is-active');
                }
            });
        });
    }
    $(window).trigger('scroll');

});
