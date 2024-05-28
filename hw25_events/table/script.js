let driversTable = document.querySelector("table");

const sortTable = (table, columnIndex) => {
  const rows = Array.from(table.rows).slice(1);
  const isNumber = !isNaN(
    parseInt(rows[0].cells[columnIndex].textContent)
  );

  rows.sort((a, b) => {
    const previusCell = a.cells[columnIndex].textContent;
    const nextCell = b.cells[columnIndex].textContent;
    return isNumber
      ? parseInt(previusCell) - parseInt(nextCell)
      : previusCell.localeCompare(nextCell);
  });
  table.append(...rows);
};

table.addEventListener("click", function (e) {
  if (e.target.closest("th")) {
    sortTable(driversTable, e.target.cellIndex);
  }
});
