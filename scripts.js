$(document).ready(function () {
    // Off-canvas menu toggle
    $('[data-bs-toggle="offcanvas"]').on('click', function () {
        $('#offcanvasMenu').toggleClass('show');
    });

    // Close off-canvas menu
    $('.btn-close').on('click', function () {
        $('#offcanvasMenu').removeClass('show');
    });
});
