"use strict";

const langArr = ["ru", "ua", "en"];

document.addEventListener("DOMContentLoaded", () => {
    checkLang();
    setBrand();
});

window.onscroll = () => {
    scrollFunction()
};

const parallaxAbout = document.getElementById('parallax-about');
if (parallaxAbout) new Parallax(parallaxAbout);

const parallaxCosmetic_1 = document.getElementById('parallax-cosmetic-1')
const parallaxCosmetic_2 = document.getElementById('parallax-cosmetic-2')
const parallaxCosmetic_3 = document.getElementById('parallax-cosmetic-3')
if (parallaxCosmetic_1) new Parallax(parallaxCosmetic_1, {hoverOnly: true});
if (parallaxCosmetic_2) new Parallax(parallaxCosmetic_2, {hoverOnly: true});
if (parallaxCosmetic_3) new Parallax(parallaxCosmetic_3, {hoverOnly: true});

// ----------------------------------------------
// lang
function setLang(langValue) {
    if (!langArr.includes(langValue))
        langValue = "ru"
    localStorage.setItem('language', langValue);
    setActiveLangBtn(langValue);
}

function checkLang() {
    let localLang = localStorage.getItem('language');
    if (!langArr.includes(localLang))
        localLang = "ru"
    setLang(localLang);
}

function setActiveLangBtn(langValue) {
    const langBtn = document.querySelectorAll('.lang__btn');
    const activeLangBtn = document.getElementById('lang-' + langValue);

    if (langBtn.length) {
        for (const langBtnElement of langBtn) {
            langBtnElement.classList.remove("active");
        }
    }

    activeLangBtn?.classList.add("active");
}

// resize logo if scrollTop > 50
function scrollFunction() {
    const headerLogo = document.querySelector('.header__logo');
    const headerContainer = document.querySelector('.header__container');

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        headerLogo.style.maxWidth = "50px";
        headerContainer.style.minHeight = "60px";
    } else {
        headerLogo.style.maxWidth = "160px";
        headerContainer.style.minHeight = "80px";
    }
}

// ----------------------------------------------

// readMoreConsultation
const btnMoreConsultation = document.getElementById('btnMoreConsultation');
btnMoreConsultation?.addEventListener('click', readMoreConsultation);

function readMoreConsultation() {
    const dots = document.getElementById("dotsConsultation");
    const moreText = document.getElementById("moreConsultation");
    const btnText = document.getElementById("btnMoreConsultation");
    const langValue = localStorage.getItem('language') || "en";
    const key = "consultation-btn-more";

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = langObj[key][langValue];
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.style.display = "none";
        moreText.style.display = "inline";
    }
}

// ----------------------------------------------

// accordion
const accordion = document.querySelectorAll('.accordion__header');
if (accordion.length > 0) {
    for (let index = 0; index < accordion.length; index++) {
        const el = accordion[index]
        el.addEventListener("click", function (e) {
            this.classList.toggle("open");
            const panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = "initial";
            }
            e.preventDefault();
        });
    }
}

// ----------------------------------------------

// filter brand
function setFilterSelection(param) {
    localStorage.setItem('brand', param);
}

function setBrand(filterBrand) {
    const localBrand = localStorage.getItem('brand');
    const brand = filterBrand || localBrand;
    const el = document.querySelector(`.${brand}`);
    el?.click();
    localStorage.removeItem('brand');
}






