"use strict";

document.addEventListener("DOMContentLoaded", () => {
    setBrand();
});

window.onscroll = () => {
    scrollFunction()
};

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






