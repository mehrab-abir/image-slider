//side menu
const menuSwitch = document.querySelector('.menuSwitch');
const closeBtn = document.querySelector('.closeBtn');
const sideNav = document.querySelector('#sideNav');

const openMenu = () =>{
    sideNav.classList.toggle('translateMenu');
}
const closeMenu = () =>{
    sideNav.classList.remove('translateMenu');
}

menuSwitch.addEventListener('click',openMenu);
closeBtn.addEventListener('click',closeMenu);

//slider
const slides = document.querySelectorAll('.slide');
const intervalTime = 5000;
const auto = true;
let slideInterval;

const nextSlide = () =>{
    const current = document.querySelector('.current');
    current.classList.remove('current');
    if(current.nextElementSibling){
        current.nextElementSibling.classList.add('current');
    }
    else{
        slides[0].classList.add('current');
    }
}
if(auto){
    setInterval(nextSlide,intervalTime);
}