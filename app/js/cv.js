$(function() {

    var $draw = $('.img-drawings');
    var $render = $('.img-renders');
    var $animation = $('.img-animations');
    var $btnAnimations = $('.app-btn-animations');
    var $btnRender = $('.app-btn-renders');
    var $btnDraw = $('.app-btn-drawings');

    var $video = $('.video');

    $btnRender.on('click',function() {

        $(this).addClass('active-btn-portfolio');
        $btnDraw.removeClass('active-btn-portfolio');
        $btnAnimations.removeClass('active-btn-portfolio');

        $draw.addClass('hide');
        $animation.addClass('hide');
        $render.removeClass('hide');

    });

    $btnDraw.on('click',function() {

        $(this).addClass('active-btn-portfolio');
        $btnRender.removeClass('active-btn-portfolio');
        $btnAnimations.removeClass('active-btn-portfolio');

        $render.addClass('hide');
        $animation.addClass('hide');
        $draw.removeClass('hide');

    });

    $btnAnimations.on('click',function() {

        $(this).addClass('active-btn-portfolio');
        $btnDraw.removeClass('active-btn-portfolio');
        $btnRender.removeClass('active-btn-portfolio');

        $render.addClass('hide');
        $draw.addClass('hide');
        $animation.removeClass('hide')

    });

    $video.on('mouseenter', function() {
        $(this).append('<video id="vid" autoplay class="video-play"><source src="/app/images/fb.mp4" type="video/mp4"></video>');
    });

    $video.on('mouseleave', function() {
        $(this).find('#vid').remove();
    });

    $('#myTabs a').click(function(e) {
        e.preventDefault()
        $(this).tab('show')
    })
});