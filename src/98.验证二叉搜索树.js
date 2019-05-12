/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
var isValidBST = function(root) {
    if (!root) {
        return true;
    }
    return isValidNode(root);
};

const isValidNode = (root, max, min) => {
    if (!root || (!root.left && !root.right)) {
        return true;
    }
    
    if ((root.left && (root.left.val >= root.val || (min && root.left.val <= min)) )|| 
    (root.right && (root.right.val <= root.val || (max && root.right.val >= max)))) {
        return false
    } else {
        return isValidNode(root.left, root.val, min ) && isValidNode(root.right, max, root.val);
    }
}

    //         3
    //     1       5
    //    0   2   4   6
    //          3    
