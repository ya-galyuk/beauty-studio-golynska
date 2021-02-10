const optionBase = {
    speed: 1500,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // desktop drag
    // simulateTouch: true,
    // touchRation: 1,
    // touchAngle: 45,
    // grabCursor: true,

    // slide to click
    slideToClickedSlide: true,

    // hash navigation
    hashNavigation: {
        watchState: true
    },

    // Keyboard Control
    keyboard: {
        enable: true,
        onlyInViewport: true,
        pageUpDown: true,
    },

    // Mousewheel Control
    // mousewheel: {
    //     sensitivity: 1,
    // },

    preloadImages: false,
    // lazy loader
    lazy: {
        loadOnTransitionStart: false,
        loadPrevNext: false,
    },
    watchSlidesProgress: true,
    watchSlidesVisibility: true
}

// init Swiper
new Swiper('.image-slider', {

    ...optionBase,

    slidesPerView: 2.2,

    spaceBetween: 30,
})

new Swiper('.parallax-slider', {

    // parallax: true,

    ...optionBase,

    slidesPerView: 2.5,

    spaceBetween: 30,
})

new Swiper('.review-slider', {

    // parallax: true,

    ...optionBase,

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },

    slidesPerView: 3,

    spaceBetween: 30,
})
