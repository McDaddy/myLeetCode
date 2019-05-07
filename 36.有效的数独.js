/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 */
/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = function (board) {
  for (let i = 0; i < 9; i++) {
    const tempRow = [];
    const tempColumn = [];
    for (let j = 0; j < 9; j++) {
      const rowCurrent = board[i][j];
      const columnCurrent = board[j][i];
      if ((rowCurrent !== '.' && tempRow.includes(rowCurrent)) || (columnCurrent !== '.' && tempColumn.includes(columnCurrent))) {
        return false;
      }
      tempRow.push(rowCurrent);
      tempColumn.push(columnCurrent);
    }
  }
  for (let i = 0; i < 9; i++) {
    const startRow = Math.floor(i / 3) * 3;
    const startColumn = (i % 3) * 3;
    if (!checkValid(board, startRow, startColumn)) {
      return false;
    }
  }
  return true;
};

const checkValid = (board, startRow, startColumn) => {
  const endRow = startRow + 3;
  const endColumn = startColumn + 3;
  const tempArr = [];
  for (let i = startRow; i < endRow; i++) {
    for (let j = startColumn; j < endColumn; j++) {
      const current = board[i][j];
      if (current !== '.' && tempArr.includes(current)) {
        return false;
      }
      tempArr.push(current);
    }
  }
  return true;
};

