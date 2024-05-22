let openButton = document.getElementById("open");
let closeButton = document.getElementById("close");
let modal = document.getElementById("modal");

openButton.addEventListener("click", () => {
  modal.style.display = "block";
});

closeButton.addEventListener("click", () => {
  modal.style.display = "none";
});
