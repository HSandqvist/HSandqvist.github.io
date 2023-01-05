function toggleMenu() {
    var menu = document.querySelector('nav ul');
    menu.classList.toggle('show');
}

// show and hide the menu when the width is below a certain threshold
window.onresize = function() {
    var menu = document.querySelector('nav ul');
    if (window.innerWidth > 600) {
        menu.classList.remove('show');
    }
}