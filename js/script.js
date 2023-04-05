const menuBurger = document.querySelector(".header__burger");
const headerMenu = document.querySelector(".header__menu");
menuBurger.addEventListener("click", function() {
    menuBurger.classList.toggle("_open");
    headerMenu.classList.toggle("_open");
    document.body.classList.toggle("_lock");
});
new Swiper(".swiper-container",{
    effect:"fade",
    fadeEffect: {
        crossFade:true,
    },
    navigation: {
        nextEl:".n-arrow",
        prevEl:".p-arrow"
    },
});