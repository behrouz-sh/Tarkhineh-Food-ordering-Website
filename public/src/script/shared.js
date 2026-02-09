import { initMobileSidebar } from "./funcs/shared.js";
window.addEventListener("DOMContentLoaded", () => {
  initMobileSidebar({
    sidebarSelector: "#header-mobile__sidebar",
    overlaySelector: "#sidebar-mobile__overlay",
    openSidebarBtnSelector: "#header-mobile__open-sidebar-btn",
    closeSidebarBtnSelector: "#header-mobile__close-sidebar-btn",
  });
});
