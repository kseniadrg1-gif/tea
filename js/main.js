const menuBtn = document.querySelector(".menu__btn");
const menuClose = document.querySelector(".menu__close-btn");
const menuList = document.querySelector(".menu__list");
const menuOverlay = document.querySelector(".menu--close");

menuBtn.addEventListener("click", () => {
  menuList.classList.add("menu__list--open");
  menuOverlay.classList.add("menu--open");
});

menuClose.addEventListener("click", () => {
  menuList.classList.remove("menu__list--open");
  menuOverlay.classList.remove("menu--open");
});
