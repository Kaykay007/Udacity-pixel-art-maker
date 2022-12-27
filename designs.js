// Select color input
let colorOfGrid = document.getElementById('colorPicker');
// Select size input
let heightOfGrid = document.getElementById('inputHeight');
let widthOfGrid = document.getElementById('inputWidth');
const submitButton = document.getElementById("submitButton");
const matrix = document.getElementById('pixelCanvas');

submitButton.addEventListener('click', function(event) {
  console.log("A grid dimension has been submitted");
  matrix.innerHTML = " ";
  event.preventDefault();
  makeGrid();
});

matrix.addEventListener('click', function(event) {
  if (event.target.nodeName === 'TD') {
    event.target.style.backgroundColor = colorOfGrid.value;
  }
});

function makeGrid() {
  // Create an empty table
  let table = document.createElement("table");

  // Create rows and cells
  for (let i = 0; i < heightOfGrid.value; i++) {
    let row = table.insertRow();
    for (let j = 0; j < widthOfGrid.value; j++) {
      row.insertCell();
    }
  }

  // Clear any existing content in the grid element
  matrix.innerHTML = "";

  // Add the table to the grid element
  matrix.appendChild(table);
}