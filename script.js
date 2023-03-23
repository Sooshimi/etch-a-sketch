let gridSize = 32;
let color = "grey";
const gridContainer = document.querySelector(".grid-container");
createGrid();

// Add event listener to grid size buttons
const gridSizeButtons = document.querySelectorAll(".grid-size");
gridSizeButtons.forEach((button) => button.addEventListener("click", () => {
    gridSize = button.textContent;
    createGrid();
}));

// Add event listener to erase button
const eraseButton = document.querySelector(".erase");
eraseButton.addEventListener("click", () => {
    createGrid();
});

// Create new grid
function createGrid() {
    // Remove all grid squares if exists
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }

    // Create grid squares
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

    const colorButtons = document.querySelectorAll(".color");
    colorButtons.forEach((button) => button.addEventListener("click", () => {
        console.log(button.classList);
        if (button.classList.contains("grey")) {
            color = "grey";
        }
        else if (button.classList.contains("rainbow")) {
            color = "rainbow";
        }
    }));

    const gridSquare = document.querySelectorAll(".grid-square");
    gridSquare.forEach((square) => square.addEventListener("mouseover", () => {
        if (color === "grey") {
            square.style.backgroundColor = color;
        }
        else if (color === "rainbow") {
            square.style.backgroundColor = `rgb(
                ${Math.floor(Math.random() * 256)}, 
                ${Math.floor(Math.random() * 256)}, 
                ${Math.floor(Math.random() * 256)})`;
        }
    }));
}