const navMenu=document.getElementById('nav--menu');
      navClose=document.getElementById('nav--close');
      navToggle=document.getElementById('nav--toggle');


/* Menu show */
if (navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show_menu')
    })
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show_menu')
    })
}

const navLink=document.querySelectorAll('.nav_link');
const linkAction = () => {
    const navMenu =document.getElementById('nav--menu')
    navMenu.cvlassList.remove('show_menu')
}
navLink.forEach (n => n.addEventListener('click', linkAction))



