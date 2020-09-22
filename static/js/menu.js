$(function() {

    $(window).resize(function() {
        if (window.innerWidth > 767) {
            $('.exo-menu').css('height', 'unset')
            $('.exo-menu li').attr('hidden', false)
        } else if ($('.exo-menu').attr('class') == "exo-menu display") {
            $('.exo-menu').css('height', 'unset')
            $('.exo-menu li').attr('hidden', false)
        }
        else{
            $('.exo-menu').css('height', '60px')
            $('.exo-menu li').attr('hidden', true)
        }
    });

    if (window.innerWidth < 767) {
        $('.exo-menu li').attr('hidden', true)
    }

    $('.toggle-menu').click(function() {
        $('.exo-menu').toggleClass('display');

        if ($('.exo-menu').attr('class') == "exo-menu display" && window.innerWidth < 767) {
            $('.exo-menu').css('height', 'unset')
            $('.exo-menu li').attr('hidden', false)
        } else {
            $('.exo-menu').css('height', '60px')
            $('.exo-menu li').attr('hidden', true)
        }
    });
});