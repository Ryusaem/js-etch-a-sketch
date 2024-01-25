const gridContainer = document.querySelector(".grid-container");
const sideBar = document.querySelector(".sidebar");
let x = 16;
let y = 16;

// Button to sideBar
const btnClear = document.createElement("button");
btnClear.textContent = "Clear";
btnClear.classList.add("btn-clear");
sideBar.appendChild(btnClear);

function createGrid(x, y) {
  gridContainer.style.setProperty("--grid-rows", x);
  gridContainer.style.setProperty("--grid-cols", y);
  for (let i = 0; i < x * y; i++) {
    let cell = document.createElement("div");
    gridContainer.appendChild(cell).className = "grid-item";
  }
}

function clearGrid() {
  // const gridItems = document.querySelectorAll(".grid-item");
  // gridItems.forEach((item) => {
  //   item.remove();
  // });
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
