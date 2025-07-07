function setUpBoard(size) {
  /**
   * Initialise a new board
   * @return array representing the board
   * Assume 0 is black, 1 is white, and null is empty
   */
  row = document.createElement("div");
  row.setAttribute("class", "row");
  dt = document.createElement("div");
  dt.setAttribute("class", "dt");
  for (let i = 0; i < size; i++) {
    row.appendChild(dt.cloneNode(true));
  }
  game = document.querySelector(".game");
  for (let i = 0; i < size; i++) {
    game.appendChild(row.cloneNode(true));
  }
  let board = [];
  for (let y = 0; y < size; y++) {
    board[y] = [];
    for (let x = 0; x < size; x++) {
      board[y][x] = null;
      if ((y === 2 && x === 2) || (y === 3 && x === 3)) {
        board[y][x] = 0;
      } else if ((y === 2) & (x === 3) || (y === 3 && x === 2)) {
        board[y][x] = 1;
      }
    }
  }
  console.log(board);
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
