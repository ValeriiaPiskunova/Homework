let resizeCorner = document.querySelector(".corner");
const mousemove = "mousemove";
const px = "px";

const resize = function () {
  let container = this.parentNode;

  const changeSize = function (e) {
    container.style.width = e.clientX - container.offsetLeft + px;
    container.style.height = e.clientY - container.offsetTop + px;
  };

  document.addEventListener(mousemove, changeSize);

  document.addEventListener("mouseup", function () {
    document.removeEventListener(mousemove, changeSize);
  });
};

resizeCorner.addEventListener("mousedown", resize);
