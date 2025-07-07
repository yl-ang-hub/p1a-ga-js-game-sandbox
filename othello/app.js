board = setUpBoard(10);

allCells = document.querySelector(".game");
allCells.addEventListener("click", (event) => {
  const x = event.target.getAttribute("x");
  const y = event.target.getAttribute("y");
  board = placeSeed(y, x, 1);
});
// updateBoardDisplay(board);

// checkEligibleMoves(2, 0, (self = 1), (opponent = 0), board);
