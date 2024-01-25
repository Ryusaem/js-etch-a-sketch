const DEFAULT_SIZE = 16;
const DEFAULT_COLOR = "black";

let currentSize = DEFAULT_SIZE;

const gridContainer = document.querySelector(".grid-container");
const sideBar = document.querySelector(".sidebar");

const btnClear = document.querySelector(".btn-clear");

const sizeValue = document.getElementById("sizeValue");
const sizeSlider = document.getElementById("sizeSlider");

function setCurrentSize(newSize) {
  currentSize = newSize;
}

function updateSizeValue(value) {
  setCurrentSize(parseInt(value));
  sizeValue.innerHTML = `${value} x ${value}`;
}

function createGrid(currentSize) {
  gridContainer.style.setProperty("--items-per-row", currentSize);
  for (let i = 0; i < currentSize * currentSize; i++) {
    const gridItem = document.createElement("div");
    gridContainer.appendChild(gridItem).className = "grid-item";
  }
}

function clearGrid() {
  gridContainer.innerHTML = "";
}

function reloadGrid() {
  clearGrid();
  createGrid(currentSize);
  colorGrid();
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

// Clear grid
btnClear.addEventListener("click", reloadGrid);

// Updating the slider value
sizeSlider.addEventListener("mousemove", (e) =>
  updateSizeValue(e.target.value)
);

sizeSlider.addEventListener("change", (e) => {
  updateSizeValue(e.target.value);
  reloadGrid();
});

// sizeSlider.onchange = (e) => changeSize(e.target.value);

reloadGrid();
