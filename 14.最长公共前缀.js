/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {
  if (strs.length === 0) {
    return '';
  }
  if (strs.length === 1) {
    return strs[0];
  }
  let result = '';
  //   const minLength = Math.min(...strs.map(s => s.length));
  //   const strsArr = strs.map(s => [...s]);

  for (let i = 0; i <= strs[0].length; i++) {
    result = strs[0].substring(0, i + 1);
    for (let j = 1; j < strs.length; j++) {
      if (strs[j].indexOf(result) !== 0 || strs[j].length < i) {
        return result.slice(0, result.length - 1);
      }
    }
    // const unMatch = strsArr.some(str => str[i] !== current);
    // if (!unMatch) {
    //   result.push(current);
    // } else {
    //   break;
    // }
  }
  return result;
};

