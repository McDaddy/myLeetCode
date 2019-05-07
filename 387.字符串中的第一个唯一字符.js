/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 */
/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = function (s) {
  const map = {};
  for (const str of s) {
    const old = map[str];
    map[str] = old ? old + 1 : 1;
  }
  let result = -1;
  Object.entries(map).some((entry) => {
    const [k, v] = entry;
    if (v === 1) {
      result = s.indexOf(k);
      return true;
    }
    return false;
  });
  return result;
};

