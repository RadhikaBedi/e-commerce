document.querySelector('#search-icons').onclick = () =>{
    search.classList.toggle('active');
    cart.classList.remove('active');
    user.classList.remove('active');
    navbar.classList.remove('active');
}

let cart = document.querySelector('.cart');

document.querySelector('#cart-icons').onclick = () =>{
    cart.classList.toggle('active');
    search.classList.remove('active');
    user.classList.remove('active');
    navbar.classList.remove('active');
}

let user = document.querySelector('.user');

document.querySelector('#user-icons').onclick = () =>{
    user.classList.toggle('active');
    search.classList.remove('active');
    cart.classList.remove('active');
    navbar.classList.remove('active');
}  
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-icons').onclick = () =>{
    navbar.classList.toggle('active');
    search.classList.remove('active');
    cart.classList.remove('active');
    user.classList.remove('active');
   
    
}

window.onscroll = () => {
    search.classList.remove('active');
    cart.classList.remove('active');
    user.classList.remove('active');
    navbar.classList.remove('active');
   
}

//navbar Scroll
let header = document.querySelector('header');

window.addEventListener('scroll' , () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});

  // Swiper JS Fix
var swiper = new Swiper(".new-arrival", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 5500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1, 
        },
        568: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        1020: {
            slidesPerView: 3,
        }
    }
});




 
