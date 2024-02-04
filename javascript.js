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