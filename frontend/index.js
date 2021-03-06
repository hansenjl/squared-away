// document.addEventListener("DOMContentLoaded", () => {
//     //fetchBoards();
//     createScoreboard();
//     sortScores();
//     //showBoards
// })

const BASE_URL = 'http://localhost:3000'
const player = document.getElementById('player');
const scoreList = document.getElementById("score-container");
const boardList = document.getElementById('board-container');
const gameBoard = document.getElementById('gameBoard');
   gameBoard.width = 500;
   gameBoard.height = 500;
const cellSize = 100;
const gameGrid = [];

// const tardisCard = new Image(95, 95);
//     tardisCard = "tardis-icon";

class Cell {
    constructor(x,y,counter) {
        this.x = x;
        this.y = y;
        this.width = cellSize;
        this.height = cellSize;
        this.element = document.getElementById(`cell${counter}`)
        this.element.style.position = "relative" //- utilize x/y
    }

    // static renderElements = () =>{
    //     this.element.className = "allCells"
    // }
}

// function createDivs() {
//     const cell = document.createElement('div')
// }

// each cell as it's own div element, all the same size - display: block inside divs
// gameboard div is container
// flex grid gameboard container
// class called game for gameGrid - for making new game 

// if cell # is in API for board, change color tile

function createGrid() {
    let counter = 1;
    for (let y = cellSize; y < gameBoard.height; y += cellSize) {
        for (let x = 0; x < gameBoard.width; x += cellSize) {
            gameGrid.push(new Cell(x,y, counter));
            counter++;
         }
        //debugger
    }
}
createGrid();
console.log(gameGrid);

document.addEventListener("keyup", function(e) {
    if (e.key === "ArrowLeft") {
        movePlayerLeft();
    }
    else if (e.key === "ArrowRight") {
        movePlayerRight();
    }
    else if (e.key === "ArrowDown") {
        movePlayerDown();
    }
    else if (e.key === "ArrowUp") {
        movePlayerUp();
    }
})

let playerLeft = 0;
let playerTop = 0;

function movePlayerRight() {
    player.src = "images/100-right.png"
    if (playerLeft < 400) {
        playerLeft += 100;
        player.style.left = playerLeft + 'px';
    }
}

function movePlayerLeft() {
    player.src = "images/100-left.png"
    if (playerLeft > 0) {
        playerLeft -= 100;
        player.style.left = playerLeft + 'px'; 
    }
} 

function movePlayerDown() {
    player.src = "images/100-down.png"
    if (playerTop < 400) {
        playerTop += 100;
        player.style.top = playerTop + 'px';
    }
}

function movePlayerUp() {
    player.src = "images/100-up.png"
    if (playerTop > 0) {
        playerTop -= 100;
        player.style.top = playerTop + 'px';
    }
}

// const boardApi = new BoardApi(BASE_URL)
// boardApi.getBoards();
// ScoreApi.getScores();