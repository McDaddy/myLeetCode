/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function (nums) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    if (map.get(current) !== undefined) {
      map.delete(current);
    } else {
      map.set(current, current);
    }
  }
  return Array.from(map.keys())[0];
};

