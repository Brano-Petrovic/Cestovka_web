$(function() {

    $(window).resize(function() {
        if (window.innerWidth > 767) {
            $('.exo-menu').css('height', 'unset')
        } else {
            $('.exo-menu').css('height', '60px')
        }
    });


    $('.toggle-menu').click(function() {
        $('.exo-menu').toggleClass('display');

        if ($('.exo-menu').attr('class') == "exo-menu display" && window.innerWidth < 767) {
            $('.exo-menu').css('height', 'unset')
        } else {
            $('.exo-menu').css('height', '60px')
        }
    });
});