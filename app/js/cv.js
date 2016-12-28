$(function() {

    var $draw = $('.img-drawings');
    var $render = $('.img-renders');

    $('.app-btn-renders').click(function() {

        $draw.addClass('hide');
        $render.removeClass('hide');

    });

    $('.app-btn-drawings').click(function() {

        $render.addClass('hide');
        $draw.removeClass('hide');

    });

    $('.app-btn-all').click(function() {

        $render.removeClass('hide');
        $draw.removeClass('hide');

    });

    $('#myTabs a').click(function(e) {
        e.preventDefault()
        $(this).tab('show')
    })
});