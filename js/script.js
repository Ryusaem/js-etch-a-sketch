const gridContainer = document.querySelector(".grid-container");
const sideBar = document.querySelector(".sidebar");

const btnClear = document.querySelector(".btn-clear");
const sizeValue = document.getElementById("sizeValue");
const sizeSlider = document.getElementById("sizeSlider");

let x = 16;
let y = 16;

function createGrid(x, y) {
  gridContainer.innerHTML = "";

  gridContainer.style.setProperty("--items-per-row", x);
  for (let i = 0; i < x * y; i++) {
    const gridItem = document.createElement("div");
    gridContainer.appendChild(gridItem).className = "grid-item";
  }
}

function updateSizeValue(value) {
  sizeValue.innerHTML = `${value} x ${value}`;
}

function clearGrid() {
  gridContainer.innerHTML = "";
}

function reloadGrid() {
  clearGrid();
  createGrid(x, y);
  colorGrid();
}

function colorGrid(e) {
  let isDrawing = false;

  gridContainer.addEventListener("mousedown", (e) => {
    isDrawing = true;
    e.target.style.backgroundColor = "black";
  });

  gridContainer.addEventListener("mouseover", (e) => {
    if (isDrawing) {
      e.target.style.backgroundColor = "black";
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

// sizeSlider.onchange = (e) => changeSize(e.target.value);

createGrid(x, y);
colorGrid();
