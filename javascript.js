let clickCount = 0

const topLeftButton = document.querySelector('#top-left');
topLeftButton.addEventListener('click', () => {
    if(document.getElementById('top-left').innerText === "O" || document.getElementById('top-left').innerText === "X") {
        return;
    }
    if (clickCount % 2 === 0) {
        document.getElementById('top-left').innerText = "O";
    }
    else {
        document.getElementById('top-left').innerText = "X";
    }
    clickCount++;
});

const topMiddleButton = document.querySelector('#top-middle');
topMiddleButton.addEventListener('click', () => {
    if(document.getElementById('top-middle').innerText === "O" || document.getElementById('top-middle').innerText === "X") {
        return;
    }
    if (clickCount % 2 === 0) {
        document.getElementById('top-middle').innerText = "O";
    }
    else {
        document.getElementById('top-middle').innerText = "X";
    }
    clickCount++;
});

const topRightButton = document.querySelector('#top-right');
topRightButton.addEventListener('click', () => {
    if(document.getElementById('top-right').innerText === "O" || document.getElementById('top-right').innerText === "X") {
        return;
    }
    if (clickCount % 2 === 0) {
        document.getElementById('top-right').innerText = "O";
    }
    else {
        document.getElementById('top-right').innerText = "X";
    }
    clickCount++;
});

const middleLeftButton = document.querySelector('#middle-left');
middleLeftButton.addEventListener('click', () => {
    if(document.getElementById('middle-left').innerText === "O" || document.getElementById('middle-left').innerText === "X") {
        return;
    }
    if (clickCount % 2 === 0) {
        document.getElementById('middle-left').innerText = "O";
    }
    else {
        document.getElementById('middle-left').innerText = "X";
    }
    clickCount++;
});

const middleMiddleButton = document.querySelector('#middle-middle');
middleMiddleButton.addEventListener('click', () => {
    if(document.getElementById('middle-middle').innerText === "O" || document.getElementById('middle-middle').innerText === "X") {
        return;
    }
    if (clickCount % 2 === 0) {
        document.getElementById('middle-middle').innerText = "O";
    }
    else {
        document.getElementById('middle-middle').innerText = "X";
    }
    clickCount++;
});

const middleRightButton = document.querySelector('#middle-right');
middleRightButton.addEventListener('click', () => {
    if(document.getElementById('middle-right').innerText === "O" || document.getElementById('middle-right').innerText === "X") {
        return;
    }
    if (clickCount % 2 === 0) {
        document.getElementById('middle-right').innerText = "O";
    }
    else {
        document.getElementById('middle-right').innerText = "X";
    }
    clickCount++;
});

const bottomLeftButton = document.querySelector('#bottom-left');
bottomLeftButton.addEventListener('click', () => {
    if(document.getElementById('bottom-left').innerText === "O" || document.getElementById('bottom-left').innerText === "X") {
        return;
    }
    if (clickCount % 2 === 0) {
        document.getElementById('bottom-left').innerText = "O";
    }
    else {
        document.getElementById('bottom-left').innerText = "X";
    }
    clickCount++;
});

const bottomMiddleButton = document.querySelector('#bottom-middle');
bottomMiddleButton.addEventListener('click', () => {
    if(document.getElementById('bottom-middle').innerText === "O" || document.getElementById('bottom-middle').innerText === "X") {
        return;
    }
    if (clickCount % 2 === 0) {
        document.getElementById('bottom-middle').innerText = "O";
    }
    else {
        document.getElementById('bottom-middle').innerText = "X";
    }
    clickCount++;
});

const bottomRightButton = document.querySelector('#bottom-right');
bottomRightButton.addEventListener('click', () => {
    if(document.getElementById('bottom-right').innerText === "O" || document.getElementById('bottom-right').innerText === "X") {
        return;
    }
    if (clickCount % 2 === 0) {
        document.getElementById('bottom-right').innerText = "O";
    }
    else {
        document.getElementById('bottom-right').innerText = "X";
    }
    clickCount++;
});

function createBoard() {
    const board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    return board;
}

const gameBoard = createBoard();
function playGame() {
    let emptySpots = 0;
    let gameEnd = true;
    for (i = 0; i < gameBoard.length; i++) {
        if (gameBoard[i] === 0) {
            emptySpots++;
        }
    }
    for (i = 0; i < emptySpots; i++) {
        let mark = 0;
        if (emptySpots % 2 === 0) {
            mark = 'o';
        }
        else {
            mark = 'x';
        }
        let choice = 0;
        choice = prompt("Where would you like to place your X/O");
        if (choice.toUpperCase() === "TOP LEFT") {
            gameBoard[0] = mark;
        }
        else if (choice.toUpperCase() === "TOP MIDDLE") {
            gameBoard[1] = mark;
        }
        else if (choice.toUpperCase() === "TOP RIGHT") {
            gameBoard[2] = mark;
        }
        else if (choice.toUpperCase() === "MIDDLE LEFT") {
            gameBoard[3] = mark;
        }
        else if (choice.toUpperCase() === "MIDDLE MIDDLE") {
            gameBoard[4] = mark;
        }
        else if (choice.toUpperCase() === "MIDDLE RIGHT") {
            gameBoard[5] = mark;
        }
        else if (choice.toUpperCase() === "BOTTOM LEFT") {
            gameBoard[6] = mark;
        }
        else if (choice.toUpperCase() === "BOTTOM MIDDLE") {
            gameBoard[7] = mark;
        }
        else if (choice.toUpperCase() === "BOTTOM RIGHT") {
            gameBoard[8] = mark;
        }
        else {
            return playGame();
        }
        if ((gameBoard[0] === 'x' && gameBoard[1] === 'x' && gameBoard[2] === 'x') || 
            (gameBoard[3] === 'x' && gameBoard[4] === 'x' && gameBoard[5] === 'x') || 
            (gameBoard[6] === 'x' && gameBoard[7] === 'x' && gameBoard[8] === 'x') || 
            (gameBoard[0] === 'x' && gameBoard[3] === 'x' && gameBoard[6] === 'x') || 
            (gameBoard[1] === 'x' && gameBoard[4] === 'x' && gameBoard[7] === 'x') || 
            (gameBoard[2] === 'x' && gameBoard[5] === 'x' && gameBoard[8] === 'x') || 
            (gameBoard[0] === 'x' && gameBoard[4] === 'x' && gameBoard[8] === 'x') || 
            (gameBoard[2] === 'x' && gameBoard[4] === 'x' && gameBoard[6] === 'x')) {
            console.log("You win!");
            endGame = false;
            return endGame;
        }
        else if ((gameBoard[0] === 'o' && gameBoard[1] === 'o' && gameBoard[2] === 'o') || 
            (gameBoard[3] === 'o' && gameBoard[4] === 'o' && gameBoard[5] === 'o') || 
            (gameBoard[6] === 'o' && gameBoard[7] === 'o' && gameBoard[8] === 'o') || 
            (gameBoard[0] === 'o' && gameBoard[3] === 'o' && gameBoard[6] === 'o') || 
            (gameBoard[1] === 'o' && gameBoard[4] === 'o' && gameBoard[7] === 'o') || 
            (gameBoard[2] === 'o' && gameBoard[5] === 'o' && gameBoard[8] === 'o') || 
            (gameBoard[0] === 'o' && gameBoard[4] === 'o' && gameBoard[8] === 'o') || 
            (gameBoard[2] === 'o' && gameBoard[4] === 'o' && gameBoard[6] === 'o')) {
            console.log("You lose!");
            endGame = false;
            return endGame;
        }
        else {
            playGame();
        }
        if (!endGame) {
            return;
        }
    }
}

playGame();