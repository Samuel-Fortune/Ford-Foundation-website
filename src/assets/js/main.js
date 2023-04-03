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

    $('.mouse-over').mouseover(function () {
        $('.mouse-over').css('cursor', 'pointer');
        $('.text-hover').css({
            'text-decoration': 'underline',
            'transition': 'all 4s ease-in 5s'
        });
        
    });
    $('.mouse-over').mouseleave(function () { 
        $('.text-hover').css({
            'text-decoration': 'none',
            'transition': 'all 4s ease-out 5s'
        });
    });

    $('.mouse-over2').mouseover(function () {
        $('.mouse-over2').css('cursor', 'pointer');
        $('.text-hover2').css({
            'text-decoration': 'underline',
            'transition': 'all 4s ease-in 5s'
        });
        
    });
    $('.mouse-over2').mouseleave(function () { 
        $('.text-hover2').css({
            'text-decoration': 'none',
            'transition': 'all 4s ease-out 5s'
        });
    });

    $('.mouse-over3').mouseover(function () {
        $('.mouse-over3').css('cursor', 'pointer');
        $('.text-hover3').css({
            'text-decoration': 'underline',
            'transition': 'all 4s ease-in 5s'
        });
        
    });
    $('.mouse-over3').mouseleave(function () { 
        $('.text-hover3').css({
            'text-decoration': 'none',
            'transition': 'all 4s ease-out 5s'
        });
    });

    $('.mouse-over4').mouseover(function () {
        $('.mouse-over4').css('cursor', 'pointer');
        $('.text-hover4').css({
            'text-decoration': 'underline',
            'transition': 'all 4s ease-in 5s'
        });
        
    });
    $('.mouse-over4').mouseleave(function () { 
        $('.text-hover4').css({
            'text-decoration': 'none',
            'transition': 'all 4s ease-out 5s'
        });
    });

    $('.mouse-over5').mouseover(function () {
        $('.mouse-over5').css('cursor', 'pointer');
        $('.text-hover5').css({
            'text-decoration': 'underline',
            'transition': 'all 4s ease-in 5s'
        });
        
    });
    $('.mouse-over5').mouseleave(function () { 
        $('.text-hover5').css({
            'text-decoration': 'none',
            'transition': 'all 4s ease-out 5s'
        });
    });

    $('.mouse-over6').mouseover(function () {
        $('.mouse-over6').css('cursor', 'pointer');
        $('.text-hover6').css({
            'text-decoration': 'underline',
            'transition': 'all 4s ease-in 5s'
        });
        
    });
    $('.mouse-over6').mouseleave(function () { 
        $('.text-hover6').css({
            'text-decoration': 'none',
            'transition': 'all 4s ease-out 5s'
        });
    });

    $('.mouse-over7').mouseover(function () {
        $('.mouse-over7').css('cursor', 'pointer');
        $('.text-hover7').css({
            'text-decoration': 'underline',
            'transition': 'all 4s ease-in 5s'
        });
        
    });
    $('.mouse-over7').mouseleave(function () { 
        $('.text-hover7').css({
            'text-decoration': 'none',
            'transition': 'all 4s ease-out 5s'
        });
    });

    $('.mouse-over8').mouseover(function () {
        $('.mouse-over8').css('cursor', 'pointer');
        $('.text-hover8').css({
            'text-decoration': 'underline',
            'transition': 'all 4s ease-in 5s'
        });
        
    });
    $('.mouse-over8').mouseleave(function () { 
        $('.text-hover8').css({
            'text-decoration': 'none',
            'transition': 'all 4s ease-out 5s'
        });
    });

    $('.mouse-over9').mouseover(function () {
        $('.mouse-over9').css('cursor', 'pointer');
        $('.text-hover9').css({
            'text-decoration': 'underline',
            'transition': 'all 4s ease-in 5s'
        });
        
    });
    $('.mouse-over9').mouseleave(function () { 
        $('.text-hover9').css({
            'text-decoration': 'none',
            'transition': 'all 4s ease-out 5s'
        });
    });

    $("#newsletter_popup .close_btn").click(function () {
        $(this).parent().fadeOut();
    });

    $(".trigger_newsletter").click(function () {
        $('#newsletter_popup').fadeIn();
        $('#newsletter_popup').css('display', 'flex');
    });

    $("#show").hover(function () {
        $("#content").css({
            'opacity': '1',
            'transition': 'all 0.5s ease-in',
        });

        $("#show").mouseleave(function () {
            $("#content").css({
                'opacity': '0',
                'transition': 'all 0.5s ease-out',
            });
            
        });
    });


    $("#show2").hover(function () {
        $("#content2").css({
            'opacity': '1',
            'transition': 'all 0.5s ease-in',
        });
        $("#show2").mouseleave(function () {
            $("#content2").css({
                'opacity': '0',
                'transition': 'all 0.5s ease-out',
            });
            
        });
    });

    $("#show3").hover(function () {
        $("#content3").css({
            'opacity': '1',
            'transition': 'all 0.5s ease-in',
        });
        $("#show3").mouseleave(function () {
            $("#content3").css({
                'opacity': '0',
                'transition': 'all 0.5s ease-out',
            });
            
        });
    });
   
});

$(window).scroll(function () {

if ( window.innerWidth >= 720 ) {

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
}

});


    $("section .toggle_social").click(function () {
        let __that = $(this);
        
        if ( !__that.parent().hasClass('social_hidden') ) {
            __that.parent().addClass('social_hidden');
            __that.parent().css('transform', 'translateX(-50px)');
            __that.css('transform', 'translateX(40px)');
        }
        else {
            __that.parent().removeClass('social_hidden');
            __that.parent().css('transform', 'translateX(0px)');
            __that.css('transform', 'translateX(0px)');

        }
    });