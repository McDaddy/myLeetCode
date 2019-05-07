/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */
/**
 * @param {number} x
 * @return {number}
 */
const reverse = function (x) {
  const max = Math.pow(2, 31) - 1;
  const min = -(max + 1);
  const numStr = `${x}`;
  const numArr = numStr.split('');
  let isNegative = false;
  if (numArr[0] === '-') {
    isNegative = true;
  }
  const calcArr = isNegative ? numArr.slice(1) : numArr;
  const mid = Math.floor(numArr.length / 2);
  for (let i = 0; i < mid; i++) {
    swap(calcArr, i, calcArr.length - 1 - i);
  }
  const result = +(isNegative ? `-${calcArr.join('')}` : calcArr.join(''));
  if (result > max || result < min) {
    return 0;
  }
  return result;
};

const swap = (s, m, n) => {
  const temp = s[m];
  s[m] = s[n];
  s[n] = temp;
};

