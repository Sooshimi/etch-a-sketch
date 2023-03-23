let gridSize = 16;
const gridContainer = document.querySelector(".grid-container");

// Create 16x16 grid
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

// Add event listener to each grid square
const gridSquare = document.querySelectorAll(".grid-square");
gridSquare.forEach((square) => square.addEventListener("mouseover", () => {
    square.style.backgroundColor = "grey";
}));