// sliders --------------------------------------
const optionBase = {
    speed: 1500,

    // parallax
    parallax: true,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // vertical slider
    direction: 'horizontal',

    // desktop drag
    simulateTouch: true,
    // touchRation: 1,
    // touchAngle: 45,
    // grabCursor: true,

    // slide to click
    slideToClickedSlide: false,

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

new Swiper('.service-slider', {

    ...optionBase,

    // slidesPerView: 'auto',
    spaceBetween: 30,

    // autoHeight: true,

    breakpoints: {
        0: {
            slidesPerView: 1,
            // spaceBetween: 0,
        },
        500: {
            slidesPerView: 'auto',
            // spaceBetween: 30,
        },
    },

    navigation: {
        nextEl: '.service__button-next',
        prevEl: '.service__button-prev'
    },
})

new Swiper('.consultation-slider', {
    speed: 1500,

    // vertical slider
    direction: 'horizontal',

    autoHeight: true,

    // desktop drag
    simulateTouch: true,

    // slide to click
    slideToClickedSlide: false,


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

    // Pagination
    pagination: {
        el: '.review__pagination',
        clickable: true,
        // dynamicBullets: true,
    },

    navigation: {
        nextEl: '.review__button-next',
        prevEl: '.review__button-prev'
    },

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

    slidesPerView: 3,

    spaceBetween: 10,
})

new Swiper('.salon-slider', {

    ...optionBase,

    // Pagination
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

    direction: 'horizontal',

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
    },

    // Pagination
    pagination: false,

    navigation: false,

    spaceBetween: 24,

    slidesPerView: 'auto',
})

// ----------------------------------------------
