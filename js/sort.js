function sortListDir() {
    let index, shouldSwitch;
    let switchCount = 0;
    let switching = true;
    let dir = "asc";

    while (switching) {
        switching = false;
        const card = document.querySelectorAll(".card");

        for (index = 0; index < card.length - 1; index++) {
            const firstPrice = parseInt(card[index].querySelector('.card__price').innerHTML);
            const nextPrice = parseInt(card[index + 1].querySelector('.card__price').innerHTML);

            shouldSwitch = false;

            if (dir === "asc" && firstPrice > nextPrice) {
                shouldSwitch = true;
                break;
            }

            if (dir === "desc" && firstPrice < nextPrice) {
                shouldSwitch = true;
                break;
            }
        }

        if (shouldSwitch) {
            card[index].parentNode.insertBefore(card[index + 1], card[index]);
            switching = true;
            switchCount++;
        } else if (switchCount === 0 && dir === "asc") {
            dir = "desc";
            switching = true;
        }
    }
    const cards__sort_icon = document.querySelectorAll('.cards__sort-icon');
    // const sort_icon__down = document.querySelector('.sort-icon__down');
    // sort_icon__top.classList.toggle('show');
    for (let index = 0; index < cards__sort_icon.length; index++) {
        cards__sort_icon[index].classList.toggle('show');
    }

}
