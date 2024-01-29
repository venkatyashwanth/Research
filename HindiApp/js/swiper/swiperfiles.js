var swiper = new Swiper('.mySwiper', {
    grabCursor: true,
    keyboard: {
        enabled: true,
      },
    slidesPerView: 3,
    spaceBetween: 30,
    slideToClickedSlide: true,
    centeredSlides: true,
    speed: 1400,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });
  