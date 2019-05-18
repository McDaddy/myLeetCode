/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */
/**
 * @param {number[]} nums
 * @return {number}
 */

var maxSubArray = function(nums) {
    let max = nums[0];
    let sum = max;
    for (let i = 1; i < nums.length; i++) {
        const current = nums[i];
        if (current > max) {
            max = current;
        }
        if (sum > 0) {
            sum += current;
            if (sum > max) {
                max = sum;
            }
        } else {
            sum = current;
        }
    }
    return max;
    // return findMax(nums);
};

const findMax = (nums) => {
    if (nums.length === 0) {
        return Number.MIN_SAFE_INTEGER;
    }
    const min = Math.min(...nums);
    const minIndex = nums.indexOf(min);
    const sum = nums.reduce((acc, item) => acc += item, 0);
    if (nums.length === 1) {
        return nums[0];
    }
    const leftMax = findMax(nums.slice(0, minIndex));
    const rightMax = findMax(nums.slice(minIndex + 1, nums.length));
    if (min === -41) {
        
        console.log(leftMax, rightMax, sum);
    }
    
    return Math.max(leftMax, rightMax, sum);
}

