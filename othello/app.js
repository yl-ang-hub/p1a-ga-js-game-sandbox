board = setUpBoard();
board[5][5] = 1;
updateBoardDisplay(board);

checkEligibleMoves(2, 0, (self = 1), (opponent = 0), board);
