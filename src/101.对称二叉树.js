/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if (!root) {
        return true;
    }
    let firstStack = [root];
    let secondStack = [];
    while (firstStack.length > 0) {
        while (firstStack.length > 0) {
            const current = firstStack.pop();
            if (current) {
                secondStack.push(current.left);
                secondStack.push(current.right);
            }
        }
        firstStack = secondStack;
        if (secondStack.length === 0 || secondStack.every(x => x === null)) {
            return true;
        }
        const checkArray = secondStack.map(s => s ? s.val : null);
        const length = checkArray.length;
        console.log(checkArray);
        
        for (let i = 0; i < checkArray.length; i++) {
            if (checkArray[i] !== checkArray[length - 1 - i]) {
                // console.log(i , length - i]);
                return false;
            }
            if (i === length - i - 1 || i + 1 === length - i - 1) {
                break;
            }
        }
        secondStack = [];
    }
    return true;
};

