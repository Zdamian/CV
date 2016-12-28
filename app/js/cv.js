$(function() {

    var $draw = $('.img-drawings');
    var $render = $('.img-renders');
    var $btnAll = $('.app-btn-all');
    var $btnRender = $('.app-btn-renders');
    var $btnDraw = $('.app-btn-drawings');

    $btnRender.on('click',function() {

        $(this).addClass('active-btn-portfolio');
        $btnDraw.removeClass('active-btn-portfolio');
        $btnAll.removeClass('active-btn-portfolio');

        $draw.addClass('hide');
        $render.removeClass('hide');

    });

    $btnDraw.on('click',function() {

        $(this).addClass('active-btn-portfolio');
        $btnRender.removeClass('active-btn-portfolio');
        $btnAll.removeClass('active-btn-portfolio');

        $render.addClass('hide');
        $draw.removeClass('hide');

    });

    $btnAll.on('click',function() {

        $(this).addClass('active-btn-portfolio');
        $btnDraw.removeClass('active-btn-portfolio');
        $btnRender.removeClass('active-btn-portfolio');

        $render.removeClass('hide');
        $draw.removeClass('hide');

    });

    $('#myTabs a').click(function(e) {
        e.preventDefault()
        $(this).tab('show')
    })
});