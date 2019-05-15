/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if (nums.length === 0) {
        return null;
    }
    const middle = Math.floor(nums.length / 2);
    const current = nums[middle];
    const leftArray = nums.slice(0, middle);
    const rightArray = nums.slice(middle + 1, nums.length);
    const node = {
        val: current,
        left: leftArray.length > 0 ? sortedArrayToBST(leftArray) : null,
        right: rightArray.length > 0 ? sortedArrayToBST(rightArray) : null,
    }
    return node;
};

