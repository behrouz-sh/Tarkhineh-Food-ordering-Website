import { initMobileSidebar } from "./funcs/shared.js";
import Swiper from "../../../node_modules/swiper/swiper-bundle.min.mjs";
window.addEventListener("DOMContentLoaded", () => {
  var swiper = new Swiper(".mySwiper", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
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
