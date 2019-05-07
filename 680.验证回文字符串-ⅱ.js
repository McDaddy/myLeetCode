/*
 * @lc app=leetcode.cn id=680 lang=javascript
 *
 * [680] 验证回文字符串 Ⅱ
 */
/**
 * @param {string} s
 * @return {boolean}
 */
const validPalindrome = function (s) {
  const arrLength = s.length;
  const strArr = s.split('');
  return isPalindrome(strArr, 0, arrLength - 1, 0);
};

const isPalindrome = (strArr, start, end, missCount) => {
  while (start < end) {
    if (strArr[start] !== strArr[end]) {
      missCount++;
      if (missCount > 1) {
        console.log(1, start, end);
        return false;
      }
      if (!(strArr[start + 1] === strArr[end] && isPalindrome(strArr, start + 1, end, missCount))
       && !(strArr[start] === strArr[end - 1] && isPalindrome(strArr, start, end - 1, missCount))) {
        return false;
      }
      return true;
    } else {
      start++;
      end--;
    }
  }
  return true;
};

