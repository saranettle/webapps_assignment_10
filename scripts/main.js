$(document).ready(function() {
    $('#one').mouseenter(function() {
        $(this).attr('src', 'images/shiba_02.png');
    });

        $('#one').mouseleave(function() {
        $(this).attr('src', 'images/shiba_01.png');
    });

    $('#two').mouseenter(function() {
        $(this).attr('src', 'images/shiba_04.png');
    });

        $('#two').mouseleave(function() {
        $(this).attr('src', 'images/shiba_03.png');
    });

    $('#three').mouseenter(function() {
        $(this).attr('src', 'images/dexter_02.png');
    });

        $('#three').mouseleave(function() {
        $(this).attr('src', 'images/dexter_01.png');
    });

    $('#four').mouseenter(function() {
        $(this).attr('src', 'images/doge_02.png');
    });

        $('#four').mouseleave(function() {
        $(this).attr('src', 'images/doge_01.png');
    });
});
