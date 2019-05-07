/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现strStr()
 */
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function (haystack, needle) {
  if (needle.length > haystack) {
    return -1;
  }
  if (needle === '') {
    return 0;
  }
  const haystackArr = [...haystack];
  const needleArr = [...needle];
  for (let i = 0; i < haystack.length; i++) {
    let match = true;
    for (let j = 0; j < needle.length; j++) {
      if (haystackArr[i + j] !== needleArr[j]) {
        match = false;
        break;
      }
    }
    if (match) {
      return i;
    }
  }
  return -1;
};

