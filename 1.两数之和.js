/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  let result = [];

  nums.some((num, index) => {
    const sub = target - num;
    return nums.some((x, i) => {
      if (x === sub && i !== index) {
        result = [index, i];
        return true;
      }
      return false;
    });
  });
  return result;
};

