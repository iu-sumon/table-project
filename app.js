var colCheckboxes = document.querySelectorAll(".col-checkbox");

colCheckboxes.forEach((element) => {
  // Set checked by Default
  //element.checked = true;
  element.addEventListener("change", (event) => {
    var columnNames = JSON.parse(localStorage.getItem("selectedColumns")) || [];
    var colName = element.getAttribute("data-col");
    var checked = event.target.checked;

    if (checked) 
    {
      columnNames = columnNames.filter(
        (columnName) => columnName !== element.value
      );
      hideShowTableCol(colName, checked);
    } 

    else {
      columnNames.push(element.value);
      hideShowTableCol(colName, checked);
    }
    localStorage.setItem("selectedColumns", JSON.stringify(columnNames));
  });
});



// Check stored state and set checkboxes accordingly
  const storedColumnNames = JSON.parse(localStorage.getItem('selectedColumns')) || [];
  colCheckboxes.forEach((element) => {
    var colName = element.getAttribute("data-col");
      if (storedColumnNames.includes(element.value)) {
        var isChecked = element.checked = false
          hideShowTableCol(colName, isChecked)
      }
  });


//Hide and Show functionality
function hideShowTableCol(colName, checked) {
  var cells = document.querySelectorAll(`.${colName}`);
  cells.forEach((cell) => {
    cell.style.display = checked ? "table-cell" : "none";
  });
}
