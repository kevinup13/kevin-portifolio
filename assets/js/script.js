/* function subirTela() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

function btnScroll() {
    if (window.scrollY === 0 || window.scroll.length > 2600) {
        //ocutar o btn
        document.querySelector('.scrollbutton').style.display = 'none';
    } else {
        // mostrar o btn
        document.querySelector('.scrollbutton').style.display = 'block';
    }

}
window.addEventListener('scroll', btnScroll);

 */
function menuToggle() {
    let menuArea = document.getElementById('menu');

    if (menuArea.classList.contains('menu-opened') == true) {
        menuArea.classList.remove('menu-opened');
    } else {
        menuArea.classList.add('menu-opened');
    }
    /* document.getElementById('menu').classList.add('menu-opened') */
}