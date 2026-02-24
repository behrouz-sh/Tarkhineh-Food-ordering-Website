window.addEventListener("DOMContentLoaded", () => {
  var swiper = new Swiper("#cards-food-slider", {
    slidesPerView: 1.65,
    spaceBetween: 16,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 2.05,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      1024: {
        slidesPerView: 4,
      },
    },
    watchSlidesProgress: true,
  });
});
