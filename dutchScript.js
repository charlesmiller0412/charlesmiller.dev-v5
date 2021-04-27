$(document).ready(function () {
    $('.dutchCarousel').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
    });
    $('.dutchCarousel-card').hover(function () { // Mouse over
        $('.dutchCarousel-card').not(this).stop().fadeTo(300, 0.6);
        $('.dutchCarousel-card').not(this).stop().fadeTo(300, 0.3);
    }, function () { // Mouse out
        $(this).stop().fadeTo(300, 1);
        $('.dutchCarousel-card').stop().fadeTo(300, 1);
    });
});