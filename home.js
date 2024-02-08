let menu =document.querySelector('#menu-icon');
let navlist =document.querySelector('.list-items');


menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}


const sr = ScrollReveal({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.text-main',{delay: 200, origin: 'top'});
sr.reveal('.stroe-button',{delay: 450, origin: 'right'});
sr.reveal('.img_container',{delay: 200, origin: 'left'});
sr.reveal('.about_qr',{delay: 200, origin: 'bottom'});