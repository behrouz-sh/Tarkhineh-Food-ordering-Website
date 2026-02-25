import { initMobileSidebar } from "./funcs/shared.js";

window.addEventListener("DOMContentLoaded", () => {
  fetch("./icons.svg")
    .then((res) => res.text())
    .then((svg) => document.body.insertAdjacentHTML("afterbegin", svg));

  var swiper = new Swiper("#banner-slider", {
    loop: true,
    navigation: {
      nextEl: "#slider-button-next",
      prevEl: "#slider-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    simulateTouch: true,
    allowTouchMove: true,
  });

  initMobileSidebar({
    sidebarSelector: "#header-mobile__sidebar",
    overlaySelector: "#sidebar-mobile__overlay",
    openSidebarBtnSelector: "#header-mobile__open-sidebar-btn",
    closeSidebarBtnSelector: "#header-mobile__close-sidebar-btn",
  });
});
