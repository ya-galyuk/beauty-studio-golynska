// resize logo ----------------------------------
window.onscroll = function() {scrollFunction()};

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
const  acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight){
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

// ----------------------------------------------







