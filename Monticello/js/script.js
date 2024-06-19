import "./slick.js";
import "./map.js";

const addHoverClass = () => {
  $(".button").hover(
    function () {
      $(this).addClass("hover");
    },
    function () {
      $(this).removeClass("hover");
    }
  );
};
addHoverClass();

const addScrollBehavior = () => {
  $(".header__scroll").click(() => {
    document.querySelector("#projects").scrollIntoView({
      behavior: "smooth",
    });
  });
};
addScrollBehavior();

const initializeBurgerMenu = () => {
  document
    .querySelector(".header__burger")
    .addEventListener("click", function () {
      this.classList.toggle("active");
      document.querySelector(".header__nav").classList.toggle("open");
    });
};
initializeBurgerMenu();

const initializeFixedMenu = () => {
  window.addEventListener("scroll", () => {
    window.scrollY >= $(window).height()
      ? document
          .querySelector(".header__top-content")
          .classList.add("fix")
      : document
          .querySelector(".header__top-content")
          .classList.remove("fix");
  });
};
initializeFixedMenu();

const scrollSmooth = () => {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document
        .querySelector(this.getAttribute("href"))
        .scrollIntoView({
          behavior: "smooth",
        });
    });
  });
};
scrollSmooth();
