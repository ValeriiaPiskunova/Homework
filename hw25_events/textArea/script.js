let textStatic = document.getElementById("text-static");
let textEdit = document.getElementById("text-edit");

document.addEventListener("keydown", function (e) {
  if (e.ctrlKey && e.key === "e") {
    e.preventDefault();

    textEdit.value = textStatic.innerText;

    textStatic.style.display = "none";
    textEdit.style.display = "block";
    textEdit.focus();
  } else if (e.ctrlKey && e.key === "s") {
    e.preventDefault();

    textStatic.innerText = textEdit.value;

    textEdit.style.display = "none";
    textStatic.style.display = "block";
  }
});
