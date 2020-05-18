var isValidSudoku = function(board) {
  for (let i = 0; i < board.length; i++) {
    const colSet = new Set()
    const rowSet = new Set()
    const boxSet = new Set()
    for (let j = 0; j < board.length; j++) {
      let _boxSet = board[3 * Math.floor(i/3) + Math.floor(j/3)][3 * (i%3) + (j%3)]
      if (rowSet.has(board[i][j])) return false;
      if (colSet.has(board[j][i])) return false;
      if (boxSet.has(_boxSet)) return false
      if (board[i][j] !== '.') rowSet.add(board[i][j])
      if (board[j][i] !== '.') colSet.add(board[j][i])
      if (_boxSet !== '.') boxSet.add(_boxSet)
    }
  }
  return true;
};
