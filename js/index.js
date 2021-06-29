// lang -----------------------------------------
checkLang()

function setLang(langValue) {
    localStorage.setItem('language', langValue);
    setActiveLangBtn(langValue);

    for (let key in langObj) {
        let elem = document.querySelector('.lng-' + key);
        if (elem) {
            elem.innerHTML = langObj[key][langValue];
        }
    }
}

function checkLang() {
    const localLang = localStorage.getItem('language');
    if (localLang) {
        setLang(localLang)
    } else {
        setLang("ua")
    }
}

function setActiveLangBtn(langValue) {
    const langBtn = document.querySelectorAll('.lang__btn');
    const activeLangBtn = document.getElementById('lang-' + langValue);

    if (langBtn.length > 0) {
        for (let index = 0; index < langBtn.length; index++) {
            const el = langBtn[index]
            el.classList.remove("active");
        }
    }

    activeLangBtn?.classList.add("active");
}

// ----------------------------------------------

// resize logo ----------------------------------
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.querySelector('.header__logo').style.maxWidth = "50px";
        document.querySelector('.header__container').style.minHeight = "60px";
    } else {
        document.querySelector('.header__logo').style.maxWidth = "160px";
        document.querySelector('.header__container').style.minHeight = "80px";
    }
}

// ----------------------------------------------

// readMoreConsultation -------------------------
function readMoreConsultation() {
    let dots = document.getElementById("dotsConsultation");
    let moreText = document.getElementById("moreConsultation");
    let btnText = document.getElementById("btnMoreConsultation");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "больше";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "меньше";
        moreText.style.display = "inline";
    }
}

// ----------------------------------------------

// accordion ------------------------------------
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
                // panel.style.maxHeight = panel.scrollHeight + "px";
                panel.style.maxHeight = "initial";
            }
            e.preventDefault();
        });
    }
}

// ----------------------------------------------







