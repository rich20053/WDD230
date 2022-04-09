function toggleMenu() {
    /*  Toggle menu list from none to drop down when clicked  */
    document.getElementById('primaryNav').classList.toggle("open");
    /*  Toggle menu button from hambuger to X when clicked  */
    document.getElementById('hamburgerBtn').classList.toggle("open");
    /*  Toggle header from small to long when clicked  */
    document.getElementById('headernav').classList.toggle("open");
}

const x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;

