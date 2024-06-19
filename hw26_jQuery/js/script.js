import "./slick.js";

const initializeBurgerMenu = () => {
  document
    .querySelector(".header__burger")
    .addEventListener("click", function () {
      this.classList.toggle("active");
      document.querySelector(".header__nav").classList.toggle("open");
    });
};
initializeBurgerMenu();

const hoverElement = () => {
  $(".interactive").hover(
    function () {
      $(this).addClass("hover");
    },
    function () {
      $(this).removeClass("hover");
    }
  );
};
hoverElement();

$(".nav-list__item").hover(
  function () {
    $(this).addClass("footer-hover");
  },
  function () {
    $(this).removeClass("footer-hover");
  }
);
