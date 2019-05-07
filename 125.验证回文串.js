/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */
/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function (s) {
  const regex = /\W/g;
  const str = s.replace(regex, '').toLowerCase();
  let start = 0;
  let end = str.length - 1;
  const strArr = [...str];
  while (start < end) {
    if (strArr[start] !== strArr[end]) {
      return false;
    }
    start += 1;
    end -= 1;
  }
  return true;
};

