const COLORS = ["orange", "green", "red", "blue", "pink"];
const boardsContainer = document.getElementById("boardsContainer");

// Fisher–Yates
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Check all rows, cols, diags have >=4 distinct
function validateGrid(grid) {
    // rows
    for (let r = 0; r < 5; r++) {
        if (new Set(grid[r]).size < 4) return false;
    }
    // cols
    for (let c = 0; c < 5; c++) {
        const col = grid.map(row => row[c]);
        if (new Set(col).size < 4) return false;
    }
    // main diag
    const mainD = grid.map((row,i) => row[i]);
    if (new Set(mainD).size < 4) return false;
    // anti diag
    const antiD = grid.map((row,i) => row[4 - i]);
    if (new Set(antiD).size < 4) return false;

    return true;
}

// Build a 5×5 grid that meets the constraints
function generateValidGrid() {
    const MAX_TRIES = 50000;
    for (let t = 0; t < MAX_TRIES; t++) {
        // 1) Pool of 5 of each color
        const pool = COLORS.flatMap(c => Array(5).fill(c));
        shuffle(pool);

        // 2) Turn into 5×5
        const grid = [];
        for (let i = 0; i < 5; i++) {
            grid.push(pool.slice(i*5, i*5 + 5));
        }

        // 3) Validate
        if (validateGrid(grid)) {
            return grid;
        }
    }
    throw new Error("Could not generate valid board in " + MAX_TRIES + " attempts");
}

// Creates the DOM for one board
function generateBoard() {
    const board = document.createElement("div");
    board.className = "bingo-board";

    const grid = generateValidGrid();
    for (let row of grid) {
        for (let color of row) {
            const btn = document.createElement("button");
            btn.className = `bingo-button ${color}`;
            btn.title = color;
            btn.addEventListener("click", () => btn.classList.toggle("marked"));
            board.appendChild(btn);
        }
    }
    return board;
}

function initBoards() {
    boardsContainer.innerHTML = "";
    boardsContainer.appendChild(generateBoard());
    boardsContainer.appendChild(generateBoard());
}

window.onload = initBoards;