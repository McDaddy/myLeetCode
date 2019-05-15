/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层次遍历
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) {
        return [];
    }
    let i = 0;
    let j = 0;
    const result = [[]];
    let mainStack = [root];
    let subStack = [];
    while (mainStack.length > 0) {
        const current = mainStack.shift();
        current.left && subStack.push(current.left);
        current.right && subStack.push(current.right);
        result[i][j++] = current.val;
        if (mainStack.length === 0 && subStack.length > 0) {
            mainStack = subStack;
            subStack = [];
            j = 0;
            i++;
            result.push([]);
        }
    }
    return result;
};

