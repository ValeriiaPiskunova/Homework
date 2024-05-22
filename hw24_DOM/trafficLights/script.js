let button = document.getElementById("switch-btn");
let lights = document.getElementsByClassName("lights");
let maxIndex = lights.length - 1;
let indexClicked = 0;

button.addEventListener("click", () => {
  let lastLightIndex =
    indexClicked === 0 ? maxIndex : indexClicked - 1;
  lights[lastLightIndex].classList.remove("on");

  lights[indexClicked].classList.add("on");

  indexClicked = indexClicked === maxIndex ? 0 : indexClicked + 1;
});
