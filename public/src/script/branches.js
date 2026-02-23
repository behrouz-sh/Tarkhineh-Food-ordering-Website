import Swiper from "../../../node_modules/swiper/swiper-bundle.min.mjs";

window.addEventListener("DOMContentLoaded", () => {
  var swiper = new Swiper("#special-offer-slider", {
    slidesPerView: 1.65,
    spaceBetween: 16,
    navigation: {
      nextEl: ".pup-button-next",
      prevEl: ".pup-button-prev",
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
  });
});
