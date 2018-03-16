//Scripts
jQuery(function ($) {

    $(window).scroll(function () {
        // if ($(this).scrollTop() > 100 && $(".menu").hasClass("default")) {
        //     $(".menu").removeClass("default").addClass("fixed");
        // } else if ($(this).scrollTop() <= 100 && $(".menu").hasClass("fixed")) {
        //     $(".menu").removeClass("fixed").addClass("default");
        // }

        //Back to top button
        if ($(this).scrollTop() > 400) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });

// scroll body to 0px on click
    $('#back-to-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });


    //Slider settings
    var jcarousel = $('.jcarousel');
    var jcarouselBest = $('.jcarousel.best');

    jcarousel
        .jcarousel({
            animation: {
                duration: 1000,
                speed: 1000,
                easing: 'linear',
                complete: function () {
                }
            }
        })
        .jcarouselAutoscroll({
            interval: 5000,
            target: '+=1',
            autostart: true,
        })
        .on('mouseover', function (e) {
            $(this).jcarouselAutoscroll('stop');
        })
        .on('mouseout', function (e) {
            $(this).jcarouselAutoscroll('start');
        });

    jcarousel
        .on('jcarousel:reload jcarousel:create', function () {
            var carousel = $(this),
                width = carousel.innerWidth();

            if (width >= 600) {
                width = width / 2;
            } else if (width >= 350) {
                width = width / 1;
            }

            carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
        })
        .jcarousel({
            wrap: 'circular'
        });

    jcarouselBest
        .on('jcarousel:reload jcarousel:create', function () {
            var carousel = $(this),
                width = carousel.innerWidth();

            if (width >= 900) {
                width = width / 4;
            } else if (width >= 600) {
                width = width / 2;
            } else if (width >= 350) {
                width = width / 1;
            }

            carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
        })
        .jcarousel({
            wrap: 'circular'
        });

    $('.jcarousel-control-prev')
        .jcarouselControl({
            target: '-=1'
        });

    $('.jcarousel-control-next')
        .jcarouselControl({
            target: '+=1'
        });

    $('.jcarousel-pagination')
        .on('jcarouselpagination:active', 'a', function () {
            $(this).addClass('active');
        })
        .on('jcarouselpagination:inactive', 'a', function () {
            $(this).removeClass('active');
        })
        .on('click', function (e) {
            e.preventDefault();
        })
        .jcarouselPagination({
            perPage: 1,
            item: function (page) {
                return '<a href="#' + page + '">' + page + '</a>';
            }
        });

    // FAQ modul
    //Add Inactive Class To All Accordion Headers
    $('.question').toggleClass('inactive-header');

    //Set The Accordion Content Width
    var contentwidth = $('.accordion-header').width();
    $('.answer').css({'width': contentwidth});

    //Open The First Accordion Section When Page Loads
    $('.question').first().toggleClass('active-header').toggleClass('inactive-header');
    $('.answer').first().slideDown().toggleClass('open-content');

    // The Accordion Effect
    $('.question').click(function () {
        if ($(this).is('.inactive-header')) {
            $('.active-header').toggleClass('active-header').toggleClass('inactive-header').next().slideToggle().toggleClass('open-content');
            $(this).toggleClass('active-header').toggleClass('inactive-header');
            $(this).next().slideToggle().toggleClass('open-content');
        }

        else {
            $(this).toggleClass('active-header').toggleClass('inactive-header');
            $(this).next().slideToggle().toggleClass('open-content');
        }
    });

    var mobile = $('#mobile');
    menu = $('nav ul');
    menuHeight = menu.height();

    $(mobile).on('click', function (e) {
        e.preventDefault();
        menu.slideToggle();
    });

    $(window).resize(function () {
        var w = $(window).width();
        if (w > 320 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });

//Equal height columnes
    $('.same-column').matchHeight(
        {
            byRow: true,
            property: 'height',
            target: null,
            remove: false
        }
    );

});