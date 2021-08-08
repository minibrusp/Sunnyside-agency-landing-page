import "./scss/main.scss";

const menuBtn = document.querySelector('.menu-btn');
const menuNav = document.querySelector('.menu-nav');
const body = document.querySelector('body');

menuBtn.addEventListener('click', () => {
    let burger = menuBtn.querySelector('.menu-btn__burger');
    if(burger.classList.contains('--open')) {
        menuNav.style.overflow = 'hidden';
        burger.classList.remove('--open');
        menuNav.classList.remove('--open');
        body.classList.remove('--open');
        return;
    }

    burger.classList.add('--open');
    menuNav.classList.add('--open');
    body.classList.add('--open');

    setTimeout(()=> {
        menuNav.style.overflow = 'visible';
    }, 300);

    return; 
});