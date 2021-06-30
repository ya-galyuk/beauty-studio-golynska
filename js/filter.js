"use strict";

filterSelection("all")

function filterSelection(rule) {
    const card = document.querySelectorAll(".card");
    if (rule === "all") {
        rule = "";
    }
    for (let index = 0; index < card.length; index++) {
        const el = card[index];
        el.classList.remove('show');
        if (el.className.indexOf(rule) > -1) {
            el.classList.add('show');
        }
    }
}

const brandBtns = document.querySelectorAll(".brand__btn");
for (let index = 0; index < brandBtns.length; index++) {
    const el = brandBtns[index];
    el.addEventListener("click", function (e) {
        const current = document.querySelector(".brand__btn.active");
        current.classList.remove('active');
        this.classList.add('active');
        e.preventDefault();
    });
}
