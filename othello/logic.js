function checkEligibleMoves(
  currY,
  currX,
  self,
  opponent,
  board,
  checkMove = false
) {
  /**
   * @return [isEligible: boolean, seedsToFlip: arrayOf[posY, posX]
   */
  // Loop all possible directions
  //   check any eligible move for selected direction
  //   break if there is an eligible move and checkMove is set to true
  let seedsToFlip = [];
  let temp = [];
  let foundSelf = false;
  let foundOpponent = false;

  // Repeat this function below for each direction
  const addAndResetCounters = () => {
    if (foundOpponent && foundSelf && checkMove) {
      return true;
    } else if (foundOpponent && foundSelf) {
      foundSelf = foundOpponent = false;
      temp.forEach((coord) => seedsToFlip.push(coord));
    }
    temp = [];
  };

  // Direction: UP
  for (y = currY - 1; y >= 0; y--) {
    curr = board[y][currX];
    if (curr === opponent) {
      temp.push([y, currX]);
      foundOpponent = true;
    } else if (curr === self) {
      foundSelf = true;
      break;
    } else if (curr === null) {
      break;
    }
  }
  addAndResetCounters();

  // Direction: RIGHT
  for (x = currX + 1; x <= board.length; x++) {
    curr = board[currY][x];
    if (curr === opponent) {
      temp.push([currY, x]);
      foundOpponent = true;
    } else if (curr === self) {
      foundSelf = true;
      break;
    } else if (curr === null) {
      break;
    }
  }
  addAndResetCounters();

  // Direction: DOWN
  for (y = currY + 1; y <= board.length; y++) {
    curr = board[y][currX];
    if (curr === opponent) {
      temp.push([y, currX]);
      foundOpponent = true;
    } else if (curr === self) {
      foundSelf = true;
      break;
    } else if (curr === null) {
      break;
    }
  }
  addAndResetCounters();

  // Direction: LEFT
  for (x = currX - 1; x >= 0; x--) {
    curr = board[currY][x];
    if (curr === opponent) {
      temp.push([currY, x]);
      foundOpponent = true;
    } else if (curr === self) {
      foundSelf = true;
      break;
    } else if (curr === null) {
      break;
    }
  }
  addAndResetCounters();

  // TODO: Direction: DIAGONAL TOP LEFT

  console.log(temp);
  console.log(seedsToFlip);
}

function checkAvailableMove(board) {
  /**
   * @return boolean
   */
  // Loop all possible free spaces to put seed
  //   checkEligibleMove(pos, board, checkMove = true) for selected direction, return
}

function flipPieces(seedsToFlip) {
  // Loop all possible directions
  //   checkEligibleMove()
  //   if true, get seedsToFlip
  //   Update board and display flipped seed
}
