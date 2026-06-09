new Swiper('.main', {
  loop: true,
  speed: 900,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  navigation: {
    prevEl: '#main-banner .swiper-button-prev',
    nextEl: '#main-banner .swiper-button-next',
  },
});
new Swiper('#new .new-list', {
  loop: true,
  speed: 600,
  slidesPerView: 3,
  spaceBetween: 100,
  centeredSlides: true,

  navigation: {
    prevEl: '.new-prev',
    nextEl: '.new-next',
  },
});
