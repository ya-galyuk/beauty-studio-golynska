"use strict";

document.addEventListener("DOMContentLoaded", () => {
    checkLang();
    setBrand();
});

window.onscroll = () => {
    scrollFunction()
};


// lang
document.querySelectorAll('.lang button')
    .forEach((b) => b.addEventListener('click', setLang));

function setLang(langValue) {
    if (this?.value)
        langValue = this.value

    localStorage.setItem('language', langValue);
    setActiveLangBtn(langValue);

    for (let key in langObj) {
        let elem = document.querySelectorAll('.lng-' + key);
        if (elem && langObj.hasOwnProperty(key))
            rewriteLangValue(elem, key, langValue)
    }
}

function rewriteLangValue(elem, key, langValue) {
    for (const elemElement of elem) {
        elemElement.innerHTML = langObj[key][langValue];
    }
}

function checkLang() {
    const localLang = localStorage.getItem('language');
    setLang(localLang || "ua")
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

// ----------------------------------------------

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
const btnMoreConsultation = document.querySelector('.btnMoreConsultation');
btnMoreConsultation.addEventListener('click', readMoreConsultation);

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






