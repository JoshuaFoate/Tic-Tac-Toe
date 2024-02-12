let clickCount = 0

function createBoard() {
    const board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    return board;
}
let gameBoard = createBoard();

const topLeftButton = document.querySelector('#top-left');
topLeftButton.addEventListener('click', () => {
    if(document.getElementById('top-left').innerText === "O" || document.getElementById('top-left').innerText === "X") {
        return;
    }
    if (clickCount % 2 === 0) {
        document.getElementById('top-left').innerText = "O";
        gameBoard[0] = 'o';
    }
    else {
        document.getElementById('top-left').innerText = "X";
        gameBoard[0] = 'x';
    }
    clickCount++;
    playGame();
});

const topMiddleButton = document.querySelector('#top-middle');
topMiddleButton.addEventListener('click', () => {
    if(document.getElementById('top-middle').innerText === "O" || document.getElementById('top-middle').innerText === "X") {
        return;
    }
    if (clickCount % 2 === 0) {
        document.getElementById('top-middle').innerText = "O";
        gameBoard[1] = 'o';
    }
    else {
        document.getElementById('top-middle').innerText = "X";
        gameBoard[1] = 'x';
    }
    clickCount++;
    playGame();
});

const topRightButton = document.querySelector('#top-right');
topRightButton.addEventListener('click', () => {
    if(document.getElementById('top-right').innerText === "O" || document.getElementById('top-right').innerText === "X") {
        return;
    }
    if (clickCount % 2 === 0) {
        document.getElementById('top-right').innerText = "O";
        gameBoard[2] = 'o';
    }
    else {
        document.getElementById('top-right').innerText = "X";
        gameBoard[2] = 'x';
    }
    clickCount++;
    playGame();
});

const middleLeftButton = document.querySelector('#middle-left');
middleLeftButton.addEventListener('click', () => {
    if(document.getElementById('middle-left').innerText === "O" || document.getElementById('middle-left').innerText === "X") {
        return;
    }
    if (clickCount % 2 === 0) {
        document.getElementById('middle-left').innerText = "O";
        gameBoard[3] = 'o';
    }
    else {
        document.getElementById('middle-left').innerText = "X";
        gameBoard[3] = 'x';
    }
    clickCount++;
    playGame();
});

const middleMiddleButton = document.querySelector('#middle-middle');
middleMiddleButton.addEventListener('click', () => {
    if(document.getElementById('middle-middle').innerText === "O" || document.getElementById('middle-middle').innerText === "X") {
        return;
    }
    if (clickCount % 2 === 0) {
        document.getElementById('middle-middle').innerText = "O";
        gameBoard[4] = 'o';
    }
    else {
        document.getElementById('middle-middle').innerText = "X";
        gameBoard[4] = 'x';
    }
    clickCount++;
    playGame();
});

const middleRightButton = document.querySelector('#middle-right');
middleRightButton.addEventListener('click', () => {
    if(document.getElementById('middle-right').innerText === "O" || document.getElementById('middle-right').innerText === "X") {
        return;
    }
    if (clickCount % 2 === 0) {
        document.getElementById('middle-right').innerText = "O";
        gameBoard[5] = 'o';
    }
    else {
        document.getElementById('middle-right').innerText = "X";
        gameBoard[5] = 'x';
    }
    clickCount++;
    playGame();
});

const bottomLeftButton = document.querySelector('#bottom-left');
bottomLeftButton.addEventListener('click', () => {
    if(document.getElementById('bottom-left').innerText === "O" || document.getElementById('bottom-left').innerText === "X") {
        return;
    }
    if (clickCount % 2 === 0) {
        document.getElementById('bottom-left').innerText = "O";
        gameBoard[6] = 'o';
    }
    else {
        document.getElementById('bottom-left').innerText = "X";
        gameBoard[6] = 'x';
    }
    clickCount++;
    playGame();
});

const bottomMiddleButton = document.querySelector('#bottom-middle');
bottomMiddleButton.addEventListener('click', () => {
    if(document.getElementById('bottom-middle').innerText === "O" || document.getElementById('bottom-middle').innerText === "X") {
        return;
    }
    if (clickCount % 2 === 0) {
        document.getElementById('bottom-middle').innerText = "O";
        gameBoard[7] = 'o';
    }
    else {
        document.getElementById('bottom-middle').innerText = "X";
        gameBoard[7] = 'x';
    }
    clickCount++;
    playGame();
});

const bottomRightButton = document.querySelector('#bottom-right');
bottomRightButton.addEventListener('click', () => {
    if(document.getElementById('bottom-right').innerText === "O" || document.getElementById('bottom-right').innerText === "X") {
        return;
    }
    if (clickCount % 2 === 0) {
        document.getElementById('bottom-right').innerText = "O";
        gameBoard[8] = 'o';
    }
    else {
        document.getElementById('bottom-right').innerText = "X";
        gameBoard[8] = 'x'
    }
    clickCount++;
    playGame();
});

const newGameButton = document.querySelector('#new-game');
newGameButton.addEventListener('click', () => {
    clickCount = 0
    document.getElementById('top-left').innerText = "";
    document.getElementById('top-middle').innerText = "";
    document.getElementById('top-right').innerText = "";
    document.getElementById('middle-left').innerText = "";
    document.getElementById('middle-middle').innerText = "";
    document.getElementById('middle-right').innerText = "";
    document.getElementById('bottom-left').innerText = "";
    document.getElementById('bottom-middle').innerText = "";
    document.getElementById('bottom-right').innerText = "";
    let gameBoard = createBoard();
});

function playGame() {
    if ((gameBoard[0] === 'x' && gameBoard[1] === 'x' && gameBoard[2] === 'x') || 
        (gameBoard[3] === 'x' && gameBoard[4] === 'x' && gameBoard[5] === 'x') || 
        (gameBoard[6] === 'x' && gameBoard[7] === 'x' && gameBoard[8] === 'x') || 
        (gameBoard[0] === 'x' && gameBoard[3] === 'x' && gameBoard[6] === 'x') || 
        (gameBoard[1] === 'x' && gameBoard[4] === 'x' && gameBoard[7] === 'x') || 
        (gameBoard[2] === 'x' && gameBoard[5] === 'x' && gameBoard[8] === 'x') || 
        (gameBoard[0] === 'x' && gameBoard[4] === 'x' && gameBoard[8] === 'x') || 
        (gameBoard[2] === 'x' && gameBoard[4] === 'x' && gameBoard[6] === 'x')) {
        console.log("Player 2 Wins!");
        alert("Player 2 Wins!");
        clickCount = 0
        document.getElementById('top-left').innerText = "";
        document.getElementById('top-middle').innerText = "";
        document.getElementById('top-right').innerText = "";
        document.getElementById('middle-left').innerText = "";
        document.getElementById('middle-middle').innerText = "";
        document.getElementById('middle-right').innerText = "";
        document.getElementById('bottom-left').innerText = "";
        document.getElementById('bottom-middle').innerText = "";
        document.getElementById('bottom-right').innerText = "";
        gameBoard = createBoard();
    }
    else if ((gameBoard[0] === 'o' && gameBoard[1] === 'o' && gameBoard[2] === 'o') ||             (gameBoard[3] === 'o' && gameBoard[4] === 'o' && gameBoard[5] === 'o') || 
        (gameBoard[6] === 'o' && gameBoard[7] === 'o' && gameBoard[8] === 'o') || 
        (gameBoard[0] === 'o' && gameBoard[3] === 'o' && gameBoard[6] === 'o') || 
        (gameBoard[1] === 'o' && gameBoard[4] === 'o' && gameBoard[7] === 'o') || 
        (gameBoard[2] === 'o' && gameBoard[5] === 'o' && gameBoard[8] === 'o') || 
        (gameBoard[0] === 'o' && gameBoard[4] === 'o' && gameBoard[8] === 'o') || 
        (gameBoard[2] === 'o' && gameBoard[4] === 'o' && gameBoard[6] === 'o')) {
        console.log("Player 1 Wins!");
        alert("Player 1 Wins!");
        clickCount = 0
        document.getElementById('top-left').innerText = "";
        document.getElementById('top-middle').innerText = "";
        document.getElementById('top-right').innerText = "";
        document.getElementById('middle-left').innerText = "";
        document.getElementById('middle-middle').innerText = "";
        document.getElementById('middle-right').innerText = "";
        document.getElementById('bottom-left').innerText = "";
        document.getElementById('bottom-middle').innerText = "";
        document.getElementById('bottom-right').innerText = "";
        gameBoard = createBoard();
    }
}