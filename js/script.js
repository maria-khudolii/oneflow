const reviewsSwiper = document.querySelector('.reviews__swiper');

if (reviewsSwiper) {
    const swiper = new Swiper('.reviews__swiper', {
        slidesPerView: 3,
        spaceBetween: 14,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            type: 'bullets',
          },
          breakpoints: {
            0: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            767.98: {
              slidesPerView: 2,
              spaceBetween: 30
            },
            991.98: {
              slidesPerView: 3,
              spaceBetween: 20
            }
          }
      });
}

let menu = document.querySelector('.menu');

menu.addEventListener('click', event => {
  event.target.classList.toggle("open")
});

let burger = document.querySelector('.menu__burger');

burger.addEventListener('click', () => menu.classList.toggle('menu-open'));