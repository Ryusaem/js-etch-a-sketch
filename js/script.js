// CONST VARIABLES
const DEFAULT_SIZE = 16;
const DEFAULT_COLOR = "black";

// VARIABLES
let currentSize = DEFAULT_SIZE;
let currentColor = DEFAULT_COLOR;
let isDrawing = false;
let currentMode = "color"; // Can be 'color' or 'erase'

// SELECTORS
const gridContainer = document.querySelector(".grid-container");
const sideBar = document.querySelector(".sidebar");
const btnEraser = document.querySelector(".btn-eraser");
const btnClear = document.querySelector(".btn-clear");
const btnColor = document.querySelector(".btn-color");
const btnRainbow = document.querySelector(".btn-rainbow");
const sizeValue = document.getElementById("sizeValue");
const sizeSlider = document.getElementById("sizeSlider");
const colorPicker = document.getElementById("colorPicker");

// FUNCTIONS
function setColorMode() {
  currentMode = "color";
}

function setEraseMode() {
  currentMode = "erase";
}

function setRainbowMode() {
  currentMode = "rainbow";
}

function getRandomColor() {
  return Math.floor(Math.random() * 256);
}

function applyColorOrErase(e) {
  if (currentMode === "color") {
    e.target.style.backgroundColor = currentColor;
  } else if (currentMode === "erase") {
    e.target.style.backgroundColor = "white";
  } else if (currentMode === "rainbow") {
    const randomR = getRandomColor();
    const randomG = getRandomColor();
    const randomB = getRandomColor();
    e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
  }
}

function setModeAndColorGrid(mode) {
  if (mode === "erase") {
    setEraseMode();
  } else if (mode === "color") {
    setColorMode();
  } else if (mode === "rainbow") {
    setRainbowMode();
  }
  colorGrid();
}

function colorGrid() {
  gridContainer.addEventListener("mousedown", (e) => {
    isDrawing = true;
    applyColorOrErase(e);
  });

  gridContainer.addEventListener("mouseover", (e) => {
    if (isDrawing) {
      applyColorOrErase(e);
    }
  });

  gridContainer.addEventListener("mouseup", () => {
    isDrawing = false;
  });

  document.addEventListener("mouseup", () => {
    isDrawing = false;
  });
}

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

// EVENT LISTENERS

// Color picker
colorPicker.addEventListener("change", (e) => {
  currentColor = e.target.value;
});

// Clear grid button
btnClear.addEventListener("click", reloadGrid);

// Eraser button
btnEraser.addEventListener("click", () => {
  setModeAndColorGrid("erase");
});

// Color button
btnColor.addEventListener("click", () => {
  setModeAndColorGrid("color");
});

// Rainbow button
btnRainbow.addEventListener("click", () => {
  setModeAndColorGrid("rainbow");
});

// Updating the slider value + reload grid
sizeSlider.addEventListener("mousemove", (e) => updateGridSize(e.target.value));
sizeSlider.addEventListener("change", (e) => updateGridSize(e.target.value));

// --------------------- //
// Initial grid
reloadGrid();
