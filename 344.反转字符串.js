/*
 * @lc app=leetcode.cn id=344 lang=javascript
 *
 * [344] 反转字符串
 */
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = function (s) {
  const mid = Math.floor(s.length / 2);
  for (let i = 0; i < mid; i++) {
    swap(s, i, s.length - 1 - i);
  }
};

const swap = (s, m, n) => {
  const temp = s[m];
  s[m] = s[n];
  s[n] = temp;
};

