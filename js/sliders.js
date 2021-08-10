// sliders --------------------------------------
const optionBase = {
    speed: 1000,

    // desktop drag
    simulateTouch: false,

    // Keyboard Control
    keyboard: {
        enable: true,
        onlyInViewport: true,
        pageUpDown: true,
    },

    // if slider too small
    watchOverflow: true,

    preloadImages: false,
    // lazy loader
    lazy: {
        loadOnTransitionStart: false,
        loadPrevNext: false,
    },
    watchSlidesProgress: true,
    watchSlidesVisibility: true,

    observe: true,
    observeParents: true,
    observeSlideChildren: true,

    nested: true,
}

const serviceSwiper = new Swiper('.service-slider', {

    ...optionBase,

    spaceBetween: 30,

    breakpoints: {
        0: {
            slidesPerView: 1,
            autoHeight: true
        },
        501: {
            slidesPerView: 'auto',
        },
    },

    navigation: {
        nextEl: '.service__button-next',
        prevEl: '.service__button-prev'
    },
})

new Swiper('.consultation-slider', {
    speed: 1500,

    autoHeight: true,

    // Keyboard Control
    keyboard: {
        enable: true,
        onlyInViewport: true,
        pageUpDown: true,
    },

    // if slider too small
    watchOverflow: true,

    watchSlidesProgress: true,
    watchSlidesVisibility: true,

    observe: true,
    observeParents: true,
    observeSlideChildren: true,

    nested: true,

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        500: {
            slidesPerView: 1.5,
        },
    },

    spaceBetween: 60,

    navigation: {
        nextEl: '.consultation__button-next',
        prevEl: '.consultation__button-prev'
    },
})

new Swiper('.review-slider', {

    ...optionBase,

    pagination: {
        el: '.review__pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.review__button-next',
        prevEl: '.review__button-prev'
    },

    spaceBetween: 10,

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        1024: {
            slidesPerView: 2,
        },
        1440: {
            slidesPerView: 3,
        }
    },
})

new Swiper('.salon-slider', {

    ...optionBase,

    pagination: false,

    navigation: {
        nextEl: '.salon__button-next',
        prevEl: '.salon__button-prev'
    },

    slidesPerView: 1,
})

new Swiper('.certificates-slider', {

    speed: 2000,
    parallax: true,

    // if slider too small
    watchOverflow: true,

    simulateTouch: false,

    slideToClickedSlide: false,

    observe: true,
    observeParents: true,
    observeSlideChildren: true,

    nested: true,

    loop: true,

    autoplay: {
        delay: 0,
        stopOnLastSlide: true,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },

    // Pagination
    pagination: false,

    navigation: false,

    spaceBetween: 24,

    slidesPerView: 'auto',
})

// ----------------------------------------------
