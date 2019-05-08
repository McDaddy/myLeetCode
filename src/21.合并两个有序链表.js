/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    // 算法一
    // let dummy = {next: null, val: 0};
    // const result = dummy;
    // while(l1 && l2) {
    //     if (l1.val < l2.val) {
    //         dummy.next = l1;
    //         l1 = l1.next;
    //     } else {
    //         dummy.next = l2;
    //         l2 = l2.next;
    //     }
    //     dummy = dummy.next;
    // }
    // if (l1) {
    //     dummy.next = l1;
    // }
    // if (l2) {
    //     dummy.next = l2;
    // }
    // return result.next;

    // 算法二 递归
    if (!l2) {
        return l1;
    }
    if (!l1) {
        return l2;
    }
    if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
};

