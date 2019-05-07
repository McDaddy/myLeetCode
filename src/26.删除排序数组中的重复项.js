/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
  let last = nums[0];
  let lastIndex = 0;
  for (let i = 1; i < nums.length; i++) {
    if (last === nums[i]) {
      nums[i] = undefined;
    } else {
      last = nums[i];
      nums[++lastIndex] = nums[i];
    }
  }
  return ++lastIndex;
};

