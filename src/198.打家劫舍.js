/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length === 0) {
        return 0;
    }
    if (nums.length === 1) {
        return nums[0];
    }
    if (nums.length === 2) {
        return Math.max(...nums);
    }
    let n2 = nums[0];
    let n1 = nums[1];
    let max = Math.max(n1, n2);
    for (let i = 2; i < nums.length; i++) {
        const sum = nums[i] + n2;
        n2 = max;
        if (sum > max) {
            max = sum;
        } 
        n1 = max;
    }
    return max;
};

