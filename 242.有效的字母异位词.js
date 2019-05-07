/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  const mapS = new Map();
  const mapT = new Map();

  for (let i = 0; i < s.length; i++) {
    mapS.set(s[i], mapS.get(s[i]) ? mapS.get(s[i]) + 1 : 1);
    mapT.set(t[i], mapT.get(t[i]) ? mapT.get(t[i]) + 1 : 1);
  }
  const result = Array.from(mapS.keys()).some((x) => {
    if (mapS.get(x) !== mapT.get(x)) {
      return true;
    }
    return false;
  });
  return !result;
};

