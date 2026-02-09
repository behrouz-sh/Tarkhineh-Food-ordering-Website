const initMobileSidebar = ({ sidebarSelector, overlaySelector, openSidebarBtnSelector, closeSidebarBtnSelector }) => {
  const sidebarElem = document.querySelector(sidebarSelector);
  const overlayElem = document.querySelector(overlaySelector);
  const openSidebarBtn = document.querySelector(openSidebarBtnSelector);
  const closeSidebarBtn = document.querySelector(closeSidebarBtnSelector);

  if (!sidebarElem || !overlayElem || !openSidebarBtn || !closeSidebarBtn) return;

  const toggle = () => {
    sidebarElem.classList.toggle("translate-x-64");
    overlayElem.classList.toggle("hidden");
  };

  openSidebarBtn.addEventListener("click", toggle);
  closeSidebarBtn.addEventListener("click", toggle);
  overlayElem.addEventListener("click", toggle);
};
export { initMobileSidebar };
