/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    // 算法一 遍历
    // let last = null;
    // let current = null;
    // while (head) {
    //     current = head; // current指到队首
    //     head = head.next; // 把head指到下一个节点，因为接下来马上要断开了
    //     current.next = last; // current的下一个节点指向上一个保存的节点， 从而原队列断开
    //     last = current; //最后保存节点指向当前
    // }
    // return current;

    // 算法二 递归
    if (!head || !head.next) {
        return head;
    }
    const p = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return p;
};

