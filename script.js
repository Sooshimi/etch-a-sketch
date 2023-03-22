let gridSize = 16;
const gridContainer = document.querySelector(".grid-container");

for (let i = 0; i < gridSize; i++) {
    const gridRow = document.createElement("div");
    gridRow.classList.add("grid-row");
    gridContainer.appendChild(gridRow);
    for (let j = 0; j < gridSize; j++) {
        const gridSquare = document.createElement("div");
        gridSquare.classList.add("grid-square");
        gridRow.appendChild(gridSquare);
    }
};