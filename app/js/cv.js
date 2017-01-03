$(function() {

    $(document).scroll(function(e) {

        var scrollTop = $(document).scrollTop();

        if (scrollTop > 693) {
            $('.navbar').removeClass('navbar-static-top').addClass('navbar-fixed-top');
        } else {
            $('.navbar').removeClass('navbar-fixed-top').addClass('navbar-static-top');
        }
    });

    $('body').scrollspy({
        target: '#navbar-example'
    });

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

    $("#gimp").circliful({
        animationStep: 5,
        foregroundBorderWidth: 15,
        backgroundBorderWidth: 15,
        percent: 50,
        iconPosition: 'middle',
        text: 'Gimp',
        textBelow: true
    });

    $("#blender").circliful({
        animationStep: 5,
        foregroundBorderWidth: 15,
        backgroundBorderWidth: 15,
        percent: 60,
        iconPosition: 'middle',
        text: 'Blender',
        textBelow: true
    });

    $("#html").circliful({
        animationStep: 5,
        foregroundBorderWidth: 15,
        backgroundBorderWidth: 15,
        percent: 60,
        iconPosition: 'middle',
        text: 'HTML',
        textBelow: true
    });

    $("#css").circliful({
        animationStep: 5,
        foregroundBorderWidth: 15,
        backgroundBorderWidth: 15,
        percent: 60,
        iconPosition: 'middle',
        text: 'CSS',
        textBelow: true
    });

    $("#javascript").circliful({
        animationStep: 5,
        foregroundBorderWidth: 15,
        backgroundBorderWidth: 15,
        percent: 40,
        iconPosition: 'middle',
        text: 'JavaScript',
        textBelow: true
    });

    $("#jquery").circliful({
        animationStep: 5,
        foregroundBorderWidth: 15,
        backgroundBorderWidth: 15,
        percent: 50,
        iconPosition: 'middle',
        text: 'jQuery',
        textBelow: true
    });
});