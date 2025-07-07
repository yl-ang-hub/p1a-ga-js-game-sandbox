function setUpBoard() {
  /**
   * Initialise a new board
   * @return array representing the board
   * Assume 0 is black, 1 is white, and null is empty
   */
  let board = [];
  for (let y = 0; y < 6; y++) {
    board[y] = [];
    for (let x = 0; x < 6; x++) {
      board[y][x] = null;
      if ((y === 2 && x === 2) || (y === 3 && x === 3)) {
        board[y][x] = 0;
      } else if ((y === 2) & (x === 3) || (y === 3 && x === 2)) {
        board[y][x] = 1;
      }
    }
  }
  // Temporary code for debug
  board[1][2] = board[1][1] = board[2][1] = board[1][0] = board[3][0] = 0;
  board[0][0] = board[4][0] = 1;

  // TODO: Display board on screen
  updateBoardDisplay(board);
  return board;
}

function resetGame(board) {
  /**
   * Resets the game and return a new board
   * @return array representing the board
   */
  delete board;
  return setUpBoard();
}

function updateBoardDisplay(board) {
  boardElements = document.querySelectorAll(".row");
  boardElements.forEach((row, y) => {
    let eachRow = row.querySelectorAll(".dt");
    eachRow.forEach((data, x) => {
      if (board[y][x] === null) {
        data.innerText = "_";
      } else if (board[y][x] === 0) {
        data.innerText = 0;
      } else if (board[y][x] === 1) {
        data.innerText = 1;
      }
    });
  });
}
