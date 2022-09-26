const menu = document.querySelector ('.open-menu');
const list = document.querySelector ('.overlay');


menu.addEventListener('click',() =>{
    if(list.style.transform === 'scaleX(0)'){
        list.style.transform = 'scaleX(1)'
    }else {
        list.style.transform = 'scaleX(0)'
    }

})

const close = document.querySelector ('.overlay_close');
const lists = document.querySelector ('.overlay');


close.addEventListener('click',() =>{
    if(lists.style.transform == 'scaleX(1)'){
        lists.style.transform = 'scaleX(0)'
    }else {
        lists.style.transform = 'scaleX(1)'
    }

})

// const overlay = document.querySelectorAll('.overlay');
// const overlayClose = document.querySelector('.overlay_close');
// const overlayMenu = document.querySelectorAll('.overlay_menu');
// const openMenu = document.querySelector('.open-menu');

// openMenu.addEventListener('click', openmenu)
// overlayClose.addEventListener('click', closemenu)




// function openmenu() {
//     overlayMenu.style.display = 'block'
// }
// function closemenu () {
//     overlayMenu.style.display = 'none'
// }

// openMenu.forEach(menuBtn => {
//     menuBtn.addEventListener('click', () => {
//         overlay.classList.add('show');
//         overlayMenu.style.transform = 'scaleY(1)';
//     });
// });
// overlayClose.addEventListener('click', () => {
//     overlayMenu.style.transform = 'scaleY(0)';
//     overlay.classList.remove('show');
// });



// openMenu.addEventListener('click', () => {
//     if(overlayMenu.style.transform === 'scaleY(1)'){
//         overlayMenu.style.transform = 'scaleY(0)';
//         overlay.classList.add('show');
//     }else{
//         overlayMenu.style.transform = 'scaleY(1)';
//         overlay.classList.remove('show');
//     }
// })


// const menuButton = document.querySelector('.menu-btn');
// const navLinks = document.querySelector('.header__nav');

// // console.log(menuButton, navLinks);

// menuButton.addEventListener('click', () => {
//     if(navLinks.style.transform === 'scaleY(1)'){
//         navLinks.style.transform = 'scaleY(0)';
//     }else{
//         navLinks.style.transform = 'scaleY(1)';
//     }
// }) 

