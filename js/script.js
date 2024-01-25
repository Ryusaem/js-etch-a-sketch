const gridContainer = document.querySelector(".grid-container");
const sideBar = document.querySelector(".sidebar");
let x = 32;
let y = 32;

// Button to sideBar
const btnClear = document.createElement("button");
btnClear.textContent = "Clear";
btnClear.classList.add("btn-clear");
sideBar.appendChild(btnClear);

function createGrid(x, y) {
  gridContainer.innerHTML = "";

  gridContainer.style.setProperty("--items-per-row", x);
  for (let i = 0; i < x * y; i++) {
    const gridItem = document.createElement("div");
    gridContainer.appendChild(gridItem).className = "grid-item";
  }
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

createGrid(x, y);
colorGrid();
