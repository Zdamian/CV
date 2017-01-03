$(function() {

    $(document).scroll(function(e) {

        var scrollTop = $(document).scrollTop();

        if (scrollTop > 693) {
            $('.navbar').removeClass('navbar-static-top').addClass('navbar-fixed-top');
        } else {
            $('.navbar').removeClass('navbar-fixed-top').addClass('navbar-static-top');
        }
    });

    $('body').scrollspy({ target: '#navbar-example' });

    var $draw = $('.img-drawings');
    var $render = $('.img-renders');
    var $animation = $('.img-animations');
    var $btnAnimations = $('.app-btn-animations');
    var $btnRender = $('.app-btn-renders');
    var $btnDraw = $('.app-btn-drawings');

    var $video = $('.video');

    $btnRender.on('click', function() {

        $(this).addClass('active-btn-portfolio');
        $btnDraw.removeClass('active-btn-portfolio');
        $btnAnimations.removeClass('active-btn-portfolio');

        $draw.addClass('hide');
        $animation.addClass('hide');
        $render.removeClass('hide');

    });

    $btnDraw.on('click', function() {

        $(this).addClass('active-btn-portfolio');
        $btnRender.removeClass('active-btn-portfolio');
        $btnAnimations.removeClass('active-btn-portfolio');

        $render.addClass('hide');
        $animation.addClass('hide');
        $draw.removeClass('hide');

    });

    $btnAnimations.on('click', function() {

        $(this).addClass('active-btn-portfolio');
        $btnDraw.removeClass('active-btn-portfolio');
        $btnRender.removeClass('active-btn-portfolio');

        $render.addClass('hide');
        $draw.addClass('hide');
        $animation.removeClass('hide')

    });

    $('.app-btn-contact').on('click', function() {

        $.ajax({
            url: "/app/data/contact.json",
            dataType: "JSON",
            method: "GET",
            success: function(response) {
                $('.app-email').text(response.email);
                $('.app-phone').text(response.phone);
            }
        });

    });

    $('#myTabs a').click(function(e) {
        e.preventDefault();
        $(this).tab('show');
    });
});