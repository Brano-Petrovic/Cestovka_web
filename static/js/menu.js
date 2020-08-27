$(function() {

    $(window).resize(function() {
        if (window.innerWidth > 767) {
            $('.exo-menu').css('height', 'unset')
        } else {
            $('.exo-menu').css('height', '64px')
        }
    });


    $('.toggle-menu').click(function() {
        $('.exo-menu').toggleClass('display');

        if ($('.exo-menu').attr('class') == "exo-menu display" && window.innerWidth < 767) {
            $('.exo-menu').css('height', 'unset')
        } else {
            $('.exo-menu').css('height', '64px')
        }
    });

    // $('.box').attr('class', 'border_shadow')
    // ifrProfiTour.$('.box').addClassName('border_shadow')
    $("#ifrProfiTour").contents().find("div").addClass("border_shadow")

});