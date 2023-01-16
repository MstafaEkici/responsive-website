hamburger = document.querySelector('.hamburger')
hamburger.onclick = function () {
    navBar = document.querySelector('.nav-bar')
    navBar.classList.toggle('active')
} 



        /* swiper */
        var swiper = new Swiper(".home", {
            spaceBetween: 30,
            centeredSlides: true,
            autoplay: {
              delay: 2500,
              disableOnInteraction: false,
            },
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });