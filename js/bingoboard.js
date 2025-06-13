const COLORS = ["orange", "green", "red", "blue", "pink"];
const boardsContainer = document.getElementById("boardsContainer");

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function generateBoard() {
    const colorList = COLORS.flatMap(color => Array(5).fill(color));
    shuffle(colorList);

    const board = document.createElement("div");
    board.className = "bingo-board";

    for (let i = 0; i < 25; i++) {
        const color = colorList[i];
        const button = document.createElement("button");
        button.className = `bingo-button ${color}`;
        button.title = color;
        button.addEventListener("click", () => {
            button.classList.toggle("marked");
        });
        board.appendChild(button);
    }

    return board;
}

function initBoards() {
    boardsContainer.innerHTML = "";
    boardsContainer.appendChild(generateBoard());
    boardsContainer.appendChild(generateBoard());
}

window.onload = initBoards;