$(document).ready(function () {
    
    console.log("ready");
    $('.slick__container').slick({
        dots: true,
        infinite: true,
        speed: 200,
        fade: true,
        cssEase: 'linear',
        accessibility: true,
        swipe: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                }
            }
        ]
    });

    $('#home').addClass('active');
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        var aboutOffset = $('.about').offset().top-5;
        var projectsOffset = $('.projects').offset().top-5;
        var contactOffset = $('.contact').offset().top-5;
    
        //home
        if (scroll >= 0 && scroll < aboutOffset) {
            $('#home').addClass('active');
            $('#about').removeClass('active');
        }
        //about
        if (scroll >= aboutOffset && scroll < projectsOffset) {
            $('#about').addClass('active');
            $('#home').removeClass('active');
            $('#projects').removeClass('active');
        }
        //projects
        if (scroll >= projectsOffset && scroll < contactOffset) {
            $('#projects').addClass('active');
            $('#about').removeClass('active');
            $('#contact').removeClass('active');
        }
        //contact
        if (scroll >= contactOffset) {
            $('#contact').addClass('active');
            $('#projects').removeClass('active');
        }
    })
});

