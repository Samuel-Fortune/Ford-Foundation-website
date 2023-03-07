$(document).ready(function () {
    $(".nav-toggle").click(function () {

        $('.nav-toggle').removeClass('active-nav-border');

        $("[data-nav-popup]").hide();
        $(".overlay").fadeIn('fast');
        $('.header_inner_overlay_contents').show();

        $('.header_inner_overlay_contents')
            .find(`.${$(this).parent().attr('aria-controls')}`).fadeIn();
        $(this).toggleClass('active-nav-border');

        $(".header__nav__upper").slideUp(function () {
            $(this).fadeOut();
        });

        $(".close__overlay__popup").click(function () {
            __closePopup();
        });

        $(".header__nav__upper").attr('data-hide-header', true);
    });


    $(document).keydown(function(e){
        if(e.key === 'Escape' || e.keyCode === 27 || e.which === 27){
            // Close my modal window
           __closePopup();

        }
    });

    function __closePopup()  {
        $(".header__nav__upper").removeAttr('data-hide-header')
        $('.header_inner_overlay_contents').fadeOut('fast');
            $(".overlay").fadeOut('fast');

        $(".header__nav__upper").slideDown(function () {
            $(this).fadeIn();
        });

        $('.nav-toggle').removeClass('active-nav-border');

    }

   
});

$(window).scroll(function () {

    if ( $(".header__nav__upper").attr('data-hide-header') === undefined ) {

        let __recentPosition = $(window).scrollTop();

        let __mainContentsPosition = $("main").offset().top;

        if ( __recentPosition >= __mainContentsPosition ) {
            $(".header__nav__upper").slideUp(function () {
                $(this).fadeOut();
            });
        }
        else {
            $(".header__nav__upper").slideDown(function () {
                $(this).fadeIn();
            });
        }
    }
});