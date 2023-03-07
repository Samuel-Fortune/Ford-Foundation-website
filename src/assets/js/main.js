$(document).ready(function () {
    $(".nav-toggle").click(function () {
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
    });


    $(document).keydown(function(e){
        if(e.key === 'Escape' || e.keyCode === 27 || e.which === 27){
            // Close my modal window
           __closePopup();

        }
    });

    function __closePopup()  {
        $('.header_inner_overlay_contents').fadeOut('fast');
            $(".overlay").fadeOut('fast');

        $(".header__nav__upper").slideDown(function () {
            $(this).fadeIn();
        });
    }

   
});