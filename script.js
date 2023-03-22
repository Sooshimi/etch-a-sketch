let gridSize = 16;
const gridContainer = document.querySelector("div.gridContainer");

for (let i = 0; i < gridSize; i++) {
    const gridDiv = document.createElement("div");
    gridContainer.appendChild(gridDiv);
};