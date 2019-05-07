/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function (nums) {
  let zeroCount = 0;
  let skip = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      for (let j = i + 1; j < nums.length - zeroCount; j++) {
        const current = nums[j];
        if (current !== 0) {
          nums[j] = 0;
          nums[j - 1 - skip] = current;
        } else {
          skip++;
        }
      }
      zeroCount++;
    }
  }
};

