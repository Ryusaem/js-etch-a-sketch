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

createGrid(x, y);
