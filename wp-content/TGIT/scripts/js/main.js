/*
 *
 *  current file = main.js
 *
 */

jQuery(document).ready(function() {


// detect touchscreen
    var isTouchScreen = false;

    function fxDetectTeouchscreen() {
        if ( navigator.maxTouchPoints > 0) {
            isTouchScreen = true;
            jQuery("body").addClass("TGIT-touch_device");
        }
    }

    fxDetectTeouchscreen();


//detect mobile device

    function fxDetectMobileDevice() {
        if (navigator.userAgent.match(/Android/i)) {
            jQuery("body").addClass("TGIT-Android");
            isTouchScreen = true;
            jQuery("body").addClass("TGIT-touch_device");
        }
        else if (navigator.userAgent.match(/BlackBerry|BB10|RIM/i)) {
            jQuery("body").addClass("TGIT-BlackBerry");
            isTouchScreen = true;
            jQuery("body").addClass("TGIT-touch_device");
        }
        else if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
            jQuery("body").addClass("TGIT-iOS");
            isTouchScreen = true;
            jQuery("body").addClass("TGIT-touch_device");
        }
        else if (navigator.userAgent.match(/IEMobile/i)) {
            jQuery("body").addClass("TGIT-Windows_phone");
            isTouchScreen = true;
            jQuery("body").addClass("TGIT-touch_device");
        }
    }

    fxDetectMobileDevice();

    var device = {
                    is_android: function() {
                        return navigator.userAgent.match(/Android/i);
                    },
                    is_blackberry: function() {
                        return navigator.userAgent.match(/BlackBerry/i);
                    },
                    is_iphone: function() {
                        return navigator.userAgent.match(/iPhone/i);
                    },
                    is_ipad: function() {
                        return navigator.userAgent.match(/iPad/i);
                    },
                    is_ipod: function() {
                        return navigator.userAgent.match(/iPod/i);
                    },
                    is_ios: function() {
                        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
                    },
                    is_windows_phone: function() {
                        return navigator.userAgent.match(/IEMobile/i);
                    },
                    is_mobile: function() {
                        return (device.is_android() || device.is_blackberry() || device.is_ios() || device.is_windows_phone() );
                    }
                };


// indicates current page on the nav menu

    var     strCurrentPage      =   window.location.href,
            strSelectBit        =   'a[href$='+'"'+strCurrentPage+'"]';

    // top nav menu
    var     strTopNavBar                =   ".TGIT-menu__page-links__items",
            strCurrentTopMenuItem       =   strTopNavBar + " " + strSelectBit,
            jQueryCurrentTopMenuItem    =   jQuery(strCurrentTopMenuItem);

    jQueryCurrentTopMenuItem.css("color", "#51AD32");

    // footer nav menu
    var     strFooterNavBar                 =   ".TGIT-footer__page-links__items",
            strCurrentFooterMenuItem              =   strFooterNavBar + " " + strSelectBit,
            jQueryCurrentFooterMenuItem     =   jQuery(strCurrentFooterMenuItem);

    jQueryCurrentFooterMenuItem.css("color", "#51AD32");


// reading progress indicator
// based on: https://css-tricks.com/reading-position-indicator/

    //set bar dimensions
    var     jQueryReadingProgressIndicator  =   jQuery(".js-ReadingProgressIndicator"),
            jQueryDocument                  =   jQuery(document),
            jQueryBody                      =   jQuery("body"),
            jQueryWindow                    =   jQuery(window),
            numInitialValue                 =   jQueryWindow.scrollTop(),
            numReadingProgress              =   null,
            numWindowHeight                 =   jQueryWindow.height(),
            numBodyHeight                   =   jQueryBody.height();
            numMaxProgressValue             =   numBodyHeight - numWindowHeight;

    jQueryReadingProgressIndicator.attr('max', numMaxProgressValue);

    //calculate progress
    function fxCalculateReadingProgress() {
        numMaxProgressValue     =   jQuery(document).height() - numWindowHeight;
        numReadingProgress  = jQueryWindow.scrollTop();

        jQueryReadingProgressIndicator.attr('max', numMaxProgressValue);
        jQueryReadingProgressIndicator.attr('value', numReadingProgress);
    }

    jQueryDocument.on('scroll', fxCalculateReadingProgress);


// shrink top nav on scroll

    var     jQueryHeader        =   jQuery("#TGIT-menu"),
            strTopMenuOnScroll  =   "TGIT-menu--on-scroll";

    function fxAdjustTopNavSizeOnLoad() {
        if (jQueryDocument.scrollTop() > 20) {
            jQueryHeader.addClass(strTopMenuOnScroll);
        }
    }


    function fxAdjustTopNavSize() {
        if (jQueryDocument.scrollTop() > 20) {
            jQueryHeader.addClass(strTopMenuOnScroll);
        }
        else {
            jQueryHeader.removeClass(strTopMenuOnScroll);
        }
    }

    fxAdjustTopNavSizeOnLoad();
    jQueryWindow.on("scroll", fxAdjustTopNavSize);


// scroll-to-top button

    var     jQueryScrollToTop   =   jQuery(".js-jQueryScrollToTop");

    function fxScrollToTopVisibilityOnLoad() {
        if (jQueryWindow.scrollTop() > 20) {
            jQueryScrollToTop.css("display", "block");
        }
    }

    function fxScrollToTopVisibility() {
        if (jQueryWindow.scrollTop() > 20) {
            jQueryScrollToTop.fadeIn();
        } else {
            jQueryScrollToTop.fadeOut();
        }
    }

    function fxScrollToTheTop() {
        jQuery('html, body').animate(
            {
                scrollTop : 0
            },
            800
        );
    }

    fxScrollToTopVisibilityOnLoad();
    jQueryWindow.on("scroll", fxScrollToTopVisibility);
    jQueryScrollToTop.on("click", fxScrollToTheTop);

// mobile nav menu

    function fxAnimateMobileMenu() {

        var toggles     =   document.querySelectorAll(".menu-button");

        for (var i = toggles.length - 1; i >= 0; i--) {
            var toggle = toggles[i];
            toggleHandler(toggle);
        }

            function toggleHandler(toggle) {
                    toggle.addEventListener( "click", function(e) {
                        e.preventDefault();
                        (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
                });
            }

    }

    fxAnimateMobileMenu();

    var     jQueryMenuButtonWrapper     =   jQuery(".menu-button-wrapper");

    function fxToggleMobileMenuModal() {
        // console.log("1X:", jQuery(".menu-modal").css('display') === 'none');
        // console.log("2X:", jQuery(".menu-modal").css('display') === 'block');
        if ( jQuery(".menu-modal").css('display') === 'none' ) {
            fxOpenMobileMenuModal();
        }
        else fxCloseMobileMenuModal();
    }

    function fxOpenMobileMenuModal() {
        jQuery(".menu-modal").velocity("slideDown",
                                        {
                                            duration: 500
                                        }
                                    );
        jQuery(".menu-modal__content").velocity("slideDown",
                                        {
                                            duration: 500
                                        }
                                    );
        jQuery(".menu-modal__content__nav-links").velocity("slideDown",
                                        {
                                            delay: 100, duration: 300
                                        }
                                    );
        jQuery(".menu-modal__content__footer").velocity("fadeIn",
                                        {
                                            delay: 300, duration: 100
                                        }
                                    );
    }

    function fxCloseMobileMenuModal() {
        jQuery(".menu-modal").velocity("slideUp",
                                        {
                                            duration: 500
                                        }
                                    );
        jQuery(".menu-modal__content").velocity("slideUp",
                                        {
                                            duration: 500
                                        }
                                    );
        jQuery(".menu-modal__content__footer").velocity("fadeOut",
                                        {
                                            duration: 100
                                        }
                                    );
        jQuery(".menu-modal__content__nav-links").velocity("slideUp",
                                        {
                                            delay: 200, duration: 300
                                        }
                                    );
    }

    jQueryMenuButtonWrapper.on("click", fxToggleMobileMenuModal);


// home hero slider

    var     jQueryTGITHomeHeroSlider            =   jQuery(".TGIT-home_hero__slider .slick-slider__slides"),
            strTGITHomeHeroSliderPreviousArrow  =   ".TGIT-home_hero__slider .slick-slider__arrow--previous",
            strTGITHomeHeroSliderNextArrow      =   ".TGIT-home_hero__slider .slick-slider__arrow--next",
            objTGITHomeHeroSliderOptions        =   {
                                                        accessibility: false,
                                                        autoplay: true,
                                                        autoplaySpeed: 6000,
                                                        dots: true,
                                                        draggable: true,
                                                        fade: true,
                                                        infinite: true,
                                                        prevArrow: strTGITHomeHeroSliderPreviousArrow,
                                                        nextArrow: strTGITHomeHeroSliderNextArrow,
                                                        slidesToShow: 1,
                                                        slidesToScroll: 1,
                                                        speed: 1000,
                                                        responsive: []
                                                    };
    //slide specific animations
    function windowSize(){
        var ws = jQuery("window").innerWidth();
        if (ws >= 905){
            return true;
        }else{
            return false;
        }
    }
    var     objHomeHeroSliderAnimations    =    {
                                                    slide1  :   {
                                                        fxReset     :   function fxReset() {
                                                                            // console.log("reset 1");
                                                                            jQuery(".home_hero__slide1__background img").css({
                                                                                    width: "150vw"
                                                                            });
                                                                            jQuery(".home_hero__slide1__A img").css({
                                                                                height: "20%"
                                                                            });
                                                                            jQuery(".home_hero__slide1__B").css({
                                                                                display: "none"
                                                                            });
                                                                        },
                                                        fxAnimate   :   function fxAnimate() {
                                                                            // console.log("animate 1");
                                                                            jQuery(".home_hero__slide1__background img").velocity(
                                                                                {
                                                                                    width: "100vw"
                                                                                },
                                                                                {
                                                                                    duration: 3000,
                                                                                    easing: "linear",
                                                                                    delay: 0
                                                                                }
                                                                            );
                                                                            jQuery(".home_hero__slide1__A img").velocity(
                                                                                {
                                                                                    height: "75%"
                                                                                },
                                                                                {
                                                                                    duration: 3000,
                                                                                    easing: "linear",
                                                                                    delay: 0
                                                                                }
                                                                            );
                                                                            jQuery(".home_hero__slide1__B").velocity(
                                                                               "fadeIn",
                                                                                {
                                                                                    duration: 1500,
                                                                                    delay: 0
                                                                                }
                                                                            );
                                                                        }
                                                    },
                                                    slide2:    {
                                                        fxReset     :   function fxReset() {
                                                                            // console.log("reset 2");
                                                                            jQuery(".home_hero__slide2__background img").css({
                                                                                    width: "150vw"
                                                                            });
                                                                            jQuery(".home_hero__slide2__B").css({
                                                                                display: "none"
                                                                            });
                                                                        },
                                                        fxAnimate   :   function fxAnimate() {
                                                                            // console.log("animate 2");
                                                                            jQuery(".home_hero__slide2__B").velocity(
                                                                               "fadeIn",
                                                                                {
                                                                                    duration: 1500,
                                                                                    delay: 0
                                                                                }
                                                                            );
                                                                            jQuery(".home_hero__slide2__background img").velocity(
                                                                                {
                                                                                    width: "100vw"
                                                                                },
                                                                                {
                                                                                    duration: 3000,
                                                                                    easing: "linear",
                                                                                    delay: 0
                                                                                }
                                                                            );
                                                                        }
                                                    },
                                                    slide3:    {
                                                        fxReset     :   function fxReset() {
                                                                            // console.log("reset 3");
                                                                            // jQuery(".home_hero__slide3__background img").css({
                                                                            //     width: "150vw"
                                                                            // });
                                                                            jQuery(".home_hero__slide3__background img").css({
                                                                                "width": "150vw"
                                                                                // "height": "100vh"
                                                                            });
                                                                            // jQuery(".home_hero__slide3__A img").css({
                                                                            //     height: "20%"
                                                                            // });
                                                                            jQuery(".home_hero__slide3__B").css({
                                                                                display: "none"
                                                                            });
                                                                        },
                                                        fxAnimate   :   function fxAnimate() {
                                                                            // console.log("animate 3");
                                                                            var pageWidth = jQuery(window).width();
                                                                            jQuery(".home_hero__slide3__background img").animate({
                                                                                // "width" : pageWidth
                                                                                // "height": "60vh"
                                                                                "width" : "100vw"
                                                                            }, 3000);
                                                                            // jQuery(".home_hero__slide3__background img").velocity(
                                                                            //     {
                                                                            //         width: "100vw"
                                                                            //     },
                                                                            //     {
                                                                            //         duration: 3000,
                                                                            //         easing: "linear",
                                                                            //         delay: 0
                                                                            //     }
                                                                            // );
                                                                            // jQuery(".home_hero__slide3__A img").velocity(
                                                                            //     {
                                                                            //         height: "75%"
                                                                            //     },
                                                                            //     {
                                                                            //         duration: 3000,
                                                                            //         easing: "linear",
                                                                            //         delay: 0
                                                                            //     }
                                                                            // );
                                                                            jQuery(".home_hero__slide3__B").velocity(
                                                                               "fadeIn",
                                                                                {
                                                                                    duration: 1500,
                                                                                    delay: 0
                                                                                }
                                                                            );
                                                                        }
                                                                        
                                                    },
                                                    slide4:    {
                                                        fxReset     :   function fxReset() {
                                                                            // console.log("reset 4");
                                                                            jQuery(".home_hero__slide4__A img").css({
                                                                                height: "20%"
                                                                            });
                                                                            jQuery(".home_hero__slide4__B").css({
                                                                                display: "none"
                                                                            });
                                                                        },
                                                        fxAnimate   :   function fxAnimate() {
                                                                            // console.log("animate 4");
                                                                            jQuery(".home_hero__slide4__A img").velocity(
                                                                                {
                                                                                    height: "55%"
                                                                                },
                                                                                {
                                                                                    duration: 3000,
                                                                                    easing: "linear",
                                                                                    delay: 0
                                                                                }
                                                                            );
                                                                            jQuery(".home_hero__slide4__B").velocity(
                                                                               "fadeIn",
                                                                                {
                                                                                    duration: 1500,
                                                                                    delay: 0
                                                                                }
                                                                            );
                                                                        }
                                                    }
                                                };

    // console.log(objHomeHeroSliderAnimations.slide1);

    //set initial styles for certain elements
    function fxInitializeHomeHeroSlide(event, slick){
        // console.log("init");
        jQuery(".TGIT-home_hero__spinner").velocity(
               "fadeOut",
                {
                    duration: 500
                },
                {
                    display: "none"
                }
            );
        //manually animate the 1st slide on initialization





        setTimeout(function fxAnimate() {
            // console.log("init - animate slide 1");
            jQuery(".home_hero__slide1__background img").velocity(
                {
                    width: "100vw"
                },
                {
                    duration: 3000,
                    easing: "linear",
                    delay: 0
                }
            );
            jQuery(".home_hero__slide1__A img").velocity(
                {
                    height: "80%"
                },
                {
                    duration: 3000,
                    easing: "linear",
                    delay: 0
                }
            );
            jQuery(".home_hero__slide1__B").velocity(
               "fadeIn",
                {
                    duration: 1500,
                    delay: 0
                }
            );
        }, 200);

    }

    //run animation for the current slide
    function fxAnimateHomeHeroSlide(event, slick, currentSlide, nextSlide){
        // console.log("afterChange - fxAnimateHomeHeroSlide");
        // console.log("currentSlide:", currentSlide);
        if (currentSlide === 0) {
            objHomeHeroSliderAnimations.slide1.fxAnimate();
            objHomeHeroSliderAnimations.slide4.fxReset();
            objHomeHeroSliderAnimations.slide2.fxReset();
        }
        else if (currentSlide === 1) {
            objHomeHeroSliderAnimations.slide2.fxAnimate();
            objHomeHeroSliderAnimations.slide1.fxReset();
            objHomeHeroSliderAnimations.slide3.fxReset();
        }
        else if (currentSlide === 2) {
            objHomeHeroSliderAnimations.slide3.fxAnimate();
            objHomeHeroSliderAnimations.slide2.fxReset();
            objHomeHeroSliderAnimations.slide4.fxReset();
        }
        else if (currentSlide === 3) {
            objHomeHeroSliderAnimations.slide4.fxAnimate();
        }
        else console.log("No function for the current slide. Please create.");
    }

    //reset slide
    function fxResetHomeHeroSlide(event, slick, currentSlide, nextSlide){
        // console.log("beforeChange - fxResetHomeHeroSlide");
        // console.log("currentSlide:", currentSlide);
        if (currentSlide === 0) {
            objHomeHeroSliderAnimations.slide4.fxReset();
            objHomeHeroSliderAnimations.slide2.fxReset();
        }
        else if (currentSlide === 1) {
            objHomeHeroSliderAnimations.slide1.fxReset();
            objHomeHeroSliderAnimations.slide3.fxReset();
        }
        else if (currentSlide === 2) {
            objHomeHeroSliderAnimations.slide2.fxReset();
            objHomeHeroSliderAnimations.slide4.fxReset();
        }
        else if (currentSlide === 3) {
            objHomeHeroSliderAnimations.slide3.fxReset();
            objHomeHeroSliderAnimations.slide1.fxReset();
        }
        else console.log("No function for the current slide. Please create.");
    }

    function fxCnsoleSlickChangeEvent(e, s, c, n){
        // console.log(e);
        // console.log(s);
        // console.log(c);
        // console.log(n);
    }

    //remove spinner if large background image is loaded or in cache

    jQuery(".home_hero__slide1__background img").each(function(){
        if (!this.complete) {
            jQuery(this).on("load", function() {
                jQueryTGITHomeHeroSlider
                    .on("init", fxInitializeHomeHeroSlide)
                    .slick(objTGITHomeHeroSliderOptions)
                    .on("beforeChange", fxResetHomeHeroSlide)
                    .on("afterChange", fxAnimateHomeHeroSlide);
            });
        }
        else {
            jQueryTGITHomeHeroSlider
                .on("init", fxInitializeHomeHeroSlide)
                .slick(objTGITHomeHeroSliderOptions)
                .on("beforeChange", fxResetHomeHeroSlide)
                .on("afterChange", fxAnimateHomeHeroSlide);
        }
    });

// home mentors slider

    var     jQueryTGITHomeMentorsSlider             =   jQuery(".TGIT-home_mentors__slider .slick-slider__slides"),
            strTGITHomeMentorsSliderPreviousArrow   =   ".TGIT-home_mentors__slider .slick-slider__arrow--previous",
            strTGITHomeMentorsSliderNextArrow       =   ".TGIT-home_mentors__slider .slick-slider__arrow--next",
            objTGITHomeMentorsSliderOptions         =   {
                                                                accessibility: false,
                                                                autoplay: true,
                                                                dots: true,
                                                                draggable: true,
                                                                easing: "swing",
                                                                infinite: true,
                                                                prevArrow: strTGITHomeMentorsSliderPreviousArrow,
                                                                nextArrow: strTGITHomeMentorsSliderNextArrow,
                                                                slidesToShow: 5,
                                                                slidesToScroll: 5,
                                                                speed: 2500,
                                                                responsive: [
                                                                    {
                                                                        breakpoint: 1040,
                                                                        settings: {
                                                                            slidesToShow: 4,
                                                                            slidesToScroll: 4,
                                                                        }
                                                                    },
                                                                    {
                                                                        breakpoint: 800,
                                                                        settings: {
                                                                            slidesToShow: 3,
                                                                            slidesToScroll: 3,
                                                                        }
                                                                    },
                                                                    {
                                                                        breakpoint: 650,
                                                                        settings: {
                                                                            slidesToShow: 2,
                                                                            slidesToScroll: 2
                                                                        }
                                                                    },
                                                                    {
                                                                        breakpoint: 600,
                                                                        settings: {
                                                                            slidesToShow: 1,
                                                                            slidesToScroll: 1
                                                                        }
                                                                    }
                                                                ]
                                                            };

    jQueryTGITHomeMentorsSlider.slick(objTGITHomeMentorsSliderOptions);

// testimonial slider

    var     jQueryTGITTestimonialsSlider            =   jQuery(".TGIT-testimonials__slider .slick-slider__slides"),
            strTGITTestimonialsSliderPreviousArrow  =   ".TGIT-testimonials__slider .slick-slider__arrow--previous",
            strTGITTestimonialsSliderNextArrow      =   ".TGIT-testimonials__slider .slick-slider__arrow--next",
            objTGITTestimonialsSliderOptions        =   {
                                                            accessibility: false,
                                                            autoplay: true,
                                                            dots: true,
                                                            draggable: true,
                                                            infinite: true,
                                                            prevArrow: strTGITTestimonialsSliderPreviousArrow,
                                                            nextArrow: strTGITTestimonialsSliderNextArrow,
                                                            autoplaySpeed: 12000
                                                        };

    jQueryTGITTestimonialsSlider.slick(objTGITTestimonialsSliderOptions);


// portfolio tabs

    var     jQueryPortfolioMenuItem             =   jQuery(".js-portfolioMenuItem"),
            jQueryTGITPortfolioTab              =   jQuery(".TGIT-portfolio__tab"),
            numIndexOfMenuItem                  =   null,
            strPortfolioMenuItemActive          =   "portfolio__menu__item--active",
            strTGITPortfolioTabActive           =   "TGIT-portfolio__tab--active";


    function fxHideAllPortfolioPages() {
        var     jQueryPortfolioMenuItemActive   =   jQuery(".portfolio__menu__item--active"),
                jQueryTGITPortfolioTabActive    =   jQuery(".TGIT-portfolio__tab--active");

        jQueryPortfolioMenuItemActive.removeClass(strPortfolioMenuItemActive);
        jQueryTGITPortfolioTabActive.removeClass(strTGITPortfolioTabActive);
    }

    function fxShowPortfolioPage() {
        fxHideAllPortfolioPages();
        numIndexOfMenuItem = jQuery(this).index();
        jQuery(jQueryPortfolioMenuItem[numIndexOfMenuItem]).addClass(strPortfolioMenuItemActive);
        jQuery(jQueryTGITPortfolioTab[numIndexOfMenuItem]).addClass(strTGITPortfolioTabActive);
    }

    jQueryPortfolioMenuItem.on("click", fxShowPortfolioPage);


// show previous portfolio tab

    var     strGetQuery     =   window.location.search;

    if (strGetQuery === "?show-previous-successes") {
        function fxHideAllPortfolioPagesQ() {
            var     jQueryPortfolioMenuItemActive   =   jQuery(".portfolio__menu__item--active"),
                    jQueryTGITPortfolioTabActive    =   jQuery(".TGIT-portfolio__tab--active");

            jQueryPortfolioMenuItemActive.removeClass(strPortfolioMenuItemActive);
            jQueryTGITPortfolioTabActive.removeClass(strTGITPortfolioTabActive);
        }

        function fxShowPortfolioPageQ() {
            fxHideAllPortfolioPagesQ();
            jQuery(jQueryPortfolioMenuItem[1]).addClass(strPortfolioMenuItemActive);
            jQuery(jQueryTGITPortfolioTab[1]).addClass(strTGITPortfolioTabActive);
        }

        fxShowPortfolioPageQ();
    }


// mentors Gridder
    jQuery('.gridder').gridderExpander({
        scroll: true,
        scrollOffset: 30,
        scrollTo: "panel",      // panel or listitem
        animationSpeed: 400,
        animationEasing: "easeInOutExpo",
        showNav: true,      // Show Navigation
        closeText: "<img src=\"/wp-content/uploads/2016/01/X-icon-rounded-grey.png\">",         // Close button text
        onStart: function(){
            //Gridder Inititialized
        },
        onContent: function(){
            //Gridder Content Loaded
        },
        onClosed: function(){
            //Gridder Closed
            jQuery(".mentor-menucard__overlay").css("opacity","0");
        }
    });


// home portfolio event handling

    var jQueryTGITHomePortfolioBoxes    =   jQuery(".TGIT-home_portfolio_box");

        function fxTGITHomePortfolioBoxShow() {
            jQuery(this).find(".TGIT-home_portfolio_box__text").css(
                {
                    "visibility": "visible",
                    "opacity": "1"
                }
            );
        }

        function fxTGITHomePortfolioBoxHide() {
            jQuery(this).find(".TGIT-home_portfolio_box__text").css(
                {
                    "visibility": "hidden",
                    "opacity": "0"
                }
            );
        }

        function fxGoToPortfolioPage() {
            window.location.href="/portfolio";
        }

    // mouse

    if ( isTouchScreen === false ) {
        jQueryTGITHomePortfolioBoxes
            .hover(fxTGITHomePortfolioBoxShow, fxTGITHomePortfolioBoxHide);

        jQueryTGITHomePortfolioBoxes.on("click", fxGoToPortfolioPage);
    }

    

    // touch

    if ( isTouchScreen === true ) {

        jQueryTGITHomePortfolioBoxes.hammer()
            .bind("swiperight", fxTGITHomePortfolioBoxShow)
            .bind("swipeleft", fxTGITHomePortfolioBoxHide)
            .bind("press", fxTGITHomePortfolioBoxShow)
            .bind("pressup", fxTGITHomePortfolioBoxHide)
            .bind("tap", fxGoToPortfolioPage);
    }


// mentors grid event handling

    var jQueryMentorMenucard    =   jQuery(".mentor-menucard");

        function fxMentorMenucardOverlayShow() {
            jQuery(this).find(".mentor-menucard__overlay").css(
                {
                    "visibility": "visible",
                    "opacity": "1"
                }
            );
        }

        function fxMentorMenucardOverlayHide() {
            jQuery(this).find(".mentor-menucard__overlay").css(
                {
                    "visibility": "hidden",
                    "opacity": "0"
                }
            );
        }

    // mouse

    if ( isTouchScreen === false ) {
        jQueryMentorMenucard
            .hover(fxMentorMenucardOverlayShow, fxMentorMenucardOverlayHide);
    }

    

    // touch

    if ( isTouchScreen === true ) {

        jQueryMentorMenucard.hammer()
            .bind("swiperight", fxMentorMenucardOverlayShow)
            .bind("swipeleft", fxMentorMenucardOverlayHide)
            .bind("press", fxMentorMenucardOverlayShow)
            .bind("pressup", fxMentorMenucardOverlayHide);
    }

// gesture guide - Home Portfolio

    // modal

    var jQueryHomePortfolioModal         =   jQuery(".js-HomePortfolioModal"),
        jQueryHomePortfolioModalClose    =   jQuery(".js-HomePortfolioModalClose");

    //set modal height to fix scroll issue
    function fxSetHomePortfolioModalHeight() {
        jQueryHomePortfolioModal.css("height", jQuery(document).height());
    }


    //detect scroll to gesture enabled area

    var     jQueryHomePortfolioWaypoint     =   jQuery('.js-HomePortfolioWaypoint');

    //reveal appearance

    function fxCloseHomePortfolioModal() {
        jQueryHomePortfolioModal.velocity(
                "fadeOut",
                {
                    duration: 500
                }
            );
    }

    if ( isTouchScreen === true) {

        fxSetHomePortfolioModalHeight();

        jQueryHomePortfolioModalClose.hammer()
            .bind("tap", fxCloseHomePortfolioModal);

        jQueryHomePortfolioWaypoint.waypoint(
            {
              handler: function fxShowHomePortfolioModal(direction) {
                if (direction === "down" && (Cookies.get('HomePortfolioModal') === undefined) ) {

                    Cookies.set('HomePortfolioModal', '1');

                    jQueryHomePortfolioModal.css("display", "flex");

                    jQueryHomePortfolioModal.velocity(
                            "fadeIn",
                            {
                                duration: 750
                            }
                        );
                    }
                }
            }
        );
    }


// gesture guide - Mentors Grid

    // modal

    var jQueryMentorsGridModal         =   jQuery(".js-MentorsGridModal"),
        jQueryMentorsGridModalClose    =   jQuery(".js-MentorsGridModalClose");

    //set modal height to fix scroll issue
    function fxSetMentorsGridModalHeight() {
        jQueryMentorsGridModal.css("height", jQuery(document).height());
    }


    //detect scroll to gesture enabled area

    var     jQueryMentorsGridWaypoint     =   jQuery('.js-MentorsGridWaypoint');

    //reveal appearance

    function fxCloseMentorsGridModal() {
        jQueryMentorsGridModal.velocity(
                "fadeOut",
                {
                    duration: 500
                }
            );
    }

    if ( isTouchScreen === true) {

        fxSetMentorsGridModalHeight();

        jQueryMentorsGridModalClose.hammer()
            .bind("tap", fxCloseMentorsGridModal);

        jQueryMentorsGridWaypoint.waypoint(
            {
              handler: function fxShowMentorsGridModal(direction) {
                if (direction === "down" && (Cookies.get('MentorsGridModal') === undefined) ) {

                    Cookies.set('MentorsGridModal', '1');

                    jQueryMentorsGridModal.css("display", "flex");

                    jQueryMentorsGridModal.velocity(
                            "fadeIn",
                            {
                                duration: 750
                            }
                        );
                    }
                }
            }
        );
    }


});
(function($) {
    $(document).ready(function(){
        
        var isHome = $("body").hasClass("home");
        var activeSlide = $(".TGIT-home_hero__slider .slick-current.slick-active");

        if(isHome){
            $(activeSlide).css("")
        }
    });
})(jQuery);