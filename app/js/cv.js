$(function() {

    $('.app-btn-renders').click(function() {

        $('.img-drawings').hide();
        $('.img-renders').show();

    });

    $('.app-btn-drawings').click(function() {

        $('.img-renders').hide();
        $('.img-drawings').show();

    });

    $('.app-btn-all').click(function() {

        $('.img-renders').show();
        $('.img-drawings').show();

    });

    $('#myTabs a').click(function(e) {
        e.preventDefault()
        $(this).tab('show')
    })
});