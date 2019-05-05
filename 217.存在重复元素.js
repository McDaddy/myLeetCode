/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function (nums) {
  const collection = {};
  for (let i = 0; i < nums.length; i++) {
    if (collection[nums[i]]) {
      return true;
    } else {
      collection[nums[i]] = 999;
    }
  }
  return false;
};

