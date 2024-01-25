// CONST VARIABLES
const DEFAULT_SIZE = 16;
const DEFAULT_COLOR = "black";

// VARIABLES
let currentSize = DEFAULT_SIZE;

// Selector
const gridContainer = document.querySelector(".grid-container");
const sideBar = document.querySelector(".sidebar");
const btnClear = document.querySelector(".btn-clear");
const sizeValue = document.getElementById("sizeValue");
const sizeSlider = document.getElementById("sizeSlider");

function setCurrentSize(newSize) {
  currentSize = newSize;
}

function displayNewSize(value) {
  sizeValue.innerHTML = `${value} x ${value}`;
}

function createGrid(currentSize) {
  gridContainer.style.setProperty("--items-per-row", currentSize); // Set CSS variable for it to be dynamic with JS

  for (let i = 0; i < currentSize * currentSize; i++) {
    const gridItem = document.createElement("div");
    gridContainer.appendChild(gridItem).className = "grid-item";
  }
}

function clearGrid() {
  gridContainer.innerHTML = "";
}

function colorGrid(e) {
  let isDrawing = false;

  gridContainer.addEventListener("mousedown", (e) => {
    isDrawing = true;
    e.target.style.backgroundColor = DEFAULT_COLOR;
  });

  gridContainer.addEventListener("mouseover", (e) => {
    if (isDrawing) {
      e.target.style.backgroundColor = DEFAULT_COLOR;
    }
  });

  gridContainer.addEventListener("mouseup", () => {
    isDrawing = false;
  });

  document.addEventListener("mouseup", () => {
    isDrawing = false;
  });
}

function reloadGrid() {
  clearGrid();
  createGrid(currentSize);
  colorGrid();
}

// update current size + display it + reload grid
function updateGridSize(value) {
  setCurrentSize(value);
  displayNewSize(value);
  reloadGrid();
}

// Clear grid button
btnClear.addEventListener("click", reloadGrid);

// Updating the slider value + reload grid
sizeSlider.addEventListener("change", (e) => updateGridSize(e.target.value));

// --------------------- //
// Initial grid
reloadGrid();
