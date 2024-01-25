const gridContainer = document.querySelector(".grid-container");
let x = 16;
let y = 16;

function createGrid(x, y) {
  gridContainer.style.setProperty("--grid-rows", x);
  gridContainer.style.setProperty("--grid-cols", y);
  for (let i = 0; i < x * y; i++) {
    let cell = document.createElement("div");
    gridContainer.appendChild(cell).className = "grid-item";
  }
}

function clearGrid() {
  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach((item) => {
    item.remove();
  });
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

createGrid(x, y);
colorGrid();
