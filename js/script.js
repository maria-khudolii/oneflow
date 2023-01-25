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

document.addEventListener('click', documentClick);

function documentClick(e) {
	const targetItem = e.target;
	if (targetItem.closest('.icon-menu')) {
		document.documentElement.classList.toggle('menu-open');
	}
}