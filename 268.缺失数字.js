/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 缺失数字
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const tmp = new Array(nums.length + 1);
    tmp.fill(false, 0, nums.length + 1);
    for (let i = 0; i < nums.length; i++) {
        tmp[nums[i]] = true;
    }
    return tmp.indexOf(false);
    // console.log(tmp);
};

