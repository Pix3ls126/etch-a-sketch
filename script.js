// Select the grid container and reset button
const gridContainer = document.querySelector("#grid-container");
const resetButton = document.querySelector("#reset-button");

// Create the grid
function createGrid(size) {
    // Clear any existing grid
    gridContainer.innerHTML = "";

    // Set grid-template properties dynamically
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    // Create grid squares
    for (let i = 0; i < size * size; i++) {
        const gridSquare = document.createElement("div");
        gridSquare.classList.add("grid-square");

        // Add hover effect
        gridSquare.addEventListener("mouseenter", () => {
            gridSquare.style.backgroundColor = "black";
        });

        gridContainer.appendChild(gridSquare);
    }
}

// Add event listener to reset button
resetButton.addEventListener("click", () => {
    let newSize = parseInt(prompt("Enter new grid size (max 100):"));

    // Validate input
    if (isNaN(newSize) || newSize < 1 || newSize > 100) {
        alert("Invalid size! Please enter a number between 1 and 100.");
        return;
    }

    createGrid(newSize);
});

// Initialize the grid with 16x16 size
createGrid(16);
