$(document).ready(function () {
    $('#sidebar-toggle').on('click', function () {
        $('#sidebar, #content').toggleClass('active');
    });

    $('.dropdown-toggle').on('click', function(e) {
        e.preventDefault();
        $(this).next('.collapse').collapse('toggle');
    });

    // Expand/collapse content details
    $('#eitaYarHeader').on('click', function() {
        $('#eitaYarBody').slideToggle();
    });

    $('#panelStatsHeader').on('click', function() {
        $('#panelStatsBody').slideToggle();
    });

    // Make sure sidebar is shown/hidden correctly on larger screens
    $(window).resize(function () {
        if ($(window).width() > 768) {
            $('#sidebar').removeClass('active');
            $('#content').removeClass('active');
        }
    });
});