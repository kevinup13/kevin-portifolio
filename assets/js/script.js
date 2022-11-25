function menuToggle() {
    let menuArea = document.getElementById('menu');

    if (menuArea.classList.contains('menu-opened') == true) {
        menuArea.classList.remove('menu-opened');

    } else {
        menuArea.classList.add('menu-opened');
    }
    /* document.getElementById('menu').classList.add('menu-opened') */
}