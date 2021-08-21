const navbar = document.querySelector(".nav");
const select = document.querySelector(".select");
const header = document.querySelector(".header");
const logo = document.querySelector(".logo");
const scrollShow = document.querySelector(".scroll-show");

window.addEventListener("scroll", navSticky);

function navSticky(e) {
  const condition = select.offsetHeight;
  // 捲軸捲到看不到第一列的時候，就黏住，condition是算出第一列高度

  if (window.scrollY >= condition) {
    // 畫面上下卷軸高於等於第一列的時候，有logo的navbar就停住
    header.style.background = "white";
    navbar.style.position = "fixed";
    navbar.style.top = "0";
    navbar.style.background = "white";
    navbar.style.marginLeft = "0px";
    navbar.style.width = "100%";
    navbar.style.border = "none";
    navbar.classList.add("shadow-tnl");
    navbar.classList.remove("pb-3");
    navbar.classList.add("pb-2");
    logo.style.marginLeft = "10px";
    scrollShow.style.display = "flex";

    // 想做動畫無法成功
    // scrollShow.style.transitionDuration = "3s";
    // scrollShow.style.transitionTimingFunction = "ease";
  } else {
    navbar.style.position = "relative";
    scrollShow.style.display = "none";
  }
}
