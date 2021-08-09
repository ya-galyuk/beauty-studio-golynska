"use strict";

filterSelection("all")

function filterSelection(rule) {
    const cards = document.querySelectorAll(".card");
    if (rule === "all") {
        rule = "";
    }

    for (const card of cards) {
        card.classList.remove('show');
        if (card.className.indexOf(rule) > -1) {
            card.classList.add('show');
        }
    }
}

const brandBtns = document.querySelectorAll(".brand__btn");
for (const brandBtn of brandBtns) {
    brandBtn.addEventListener("click", toggleActiveBrand);
}

function toggleActiveBrand() {
    const current = document.querySelector(".brand__btn.active");
    this.scrollIntoView({behavior: 'smooth', block: 'nearest'})
    current?.classList.remove('active');
    this.classList.add('active');
}
