let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function makeMove(cellIndex) {
    if (gameActive && board[cellIndex] === '') {
        board[cellIndex] = currentPlayer;
        document.querySelector('.cell:nth-child(' + (cellIndex + 1) + ')').textContent = currentPlayer;
        if (checkWin(currentPlayer)) {
            document.getElementById('status').textContent = currentPlayer + ' wins!';
            gameActive = false;
        } else if (board.every(cell => cell !== '')) {
            document.getElementById('status').textContent = 'It\'s a draw!';
            gameActive = false;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function checkWin(player) {
    return winningCombos.some(combination => {
        return combination.every(index => {
            return board[index] === player;
        });
    });
}

function resetBoard() {
    board = ['', '', '', '', '', '', '', '', ''];
    document.querySelectorAll('.cell').forEach(cell => cell.textContent = '');
    document.getElementById('status').textContent = '';
    currentPlayer = 'X';
    gameActive = true;
}


