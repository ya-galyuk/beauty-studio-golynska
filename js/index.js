// main slider -----------------------------------
let wrapper = document.querySelector('.wrapper');

let pageSlider = new Swiper('.page', {

    // custom class
    wrapperClass: 'page__wrapper',
    slideClass: 'page__screen',

    // vertical slider
    direction: 'vertical',

    // count item for show
    slidesPerView: 'auto',

    // parallax
    parallax: true,

    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },

    mousewheel: {
        sensitivity: 1,
    },

    // if slider too small
    watchOverflow: true,

    speed: 800,

    observe: true,
    observeParents: true,
    observeSlideChildren: true,

    pagination: {
        el: '.page__pagination',
        type: 'bullets',
        clickable: true,
        bulletClass: 'page__bullet',
        bulletActiveClass: 'page__bullet_active',
    },

    scrollbar: {
        el: '.page__scroll',
        dragClass: 'page__drag-scroll',
        draggable: true
    },

    init: false,

    on: {
        init: function () {
            menuSlider();
            setScrollType();
            wrapper.classList.add('_loaded');
        },

        slideChange: function () {
            menuSliderRemove()
            menuLinks[pageSlider.realIndex].classList.add('_active')
            scrollFunction()
        },

        resize: function () {
            setScrollType();
        }
    }
});

let menuLinks = document.querySelectorAll('.header__link');

function menuSlider() {
    if (menuLinks.length > 0) {
        menuLinks[pageSlider.realIndex].classList.add('_active')

        for (let i = 0; i < menuLinks.length; i++) {
            const menuLink = menuLinks[i];

            menuLink.addEventListener('click', function (e) {
                menuSliderRemove();
                pageSlider.slideTo(i, 800);
                menuLink.classList.add('_active')
                e.preventDefault();
            });
        }
    }
}

function menuSliderRemove() {
    let menuLinkActive = document.querySelector('.header__link._active');
    if (menuLinkActive) {
        menuLinkActive.classList.remove('_active');
    }
}

function setScrollType() {
    if (wrapper.classList.contains('_free')) {
        wrapper.classList.remove('_free');
        pageSlider.params.freeMode = false;
    }

    for (let i = 0; i < pageSlider.slides.length; i++) {
        const pageSlide = pageSlider.slides[i];
        const pageSlideContent = pageSlide.querySelector('.screen__content');

        if (pageSlideContent) {
            const pageSlideContentHeight = pageSlideContent.offsetHeight;
            if (pageSlideContentHeight > window.innerHeight) {
                wrapper.classList.add('_free');
                pageSlider.params.freeMode = true;
                break;
            }
        }

    }
}

pageSlider.init()

// ----------------------------------------------

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

    slidesPerView: 2.3,

    spaceBetween: 30,

})

new Swiper('.parallax-slider', {

    ...optionBase,

    slidesPerView: 2.5,

    spaceBetween: 30,
})

new Swiper('.review-slider', {

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

// ----------------------------------------------

// burger ---------------------------------------
const header__burger = document.querySelector('.header__burger');
const header__menu = document.querySelector('.header__menu');
const body = document.querySelector('body');

header__burger.addEventListener('click', event => {
    menuClassToggle(header__burger, "active")
    menuClassToggle(header__menu, "active")
    menuClassToggle(body, "lock")
});

function menuClassToggle(element, className) {
    if (element && element.classList) {
        element.classList.toggle(className);
    } else {
        // For IE9
        let classes = element.className.split(" ");
        let i = classes.indexOf(className);

        if (i >= 0)
            classes.splice(i, 1);
        else
            classes.push(className);
        element.className = classes.join(" ");
    }
}

// ----------------------------------------------


// logo -----------------------------------------
const logo = document.querySelector('.header__logo');
const header_body = document.querySelector('.header__body');

function scrollFunction() {
    if (pageSlider.realIndex === 0) {
        logo.style.maxWidth = "200px";
        header_body.style.maxHeight = "100px";
    } else {
        logo.style.maxWidth = "90px";
        header_body.style.maxHeight = "50px";
    }
}

// ----------------------------------------------












