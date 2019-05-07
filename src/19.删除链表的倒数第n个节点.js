/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    const dummy = {val: 0, next: head};

    //算法一
    let first = dummy;
    let second = dummy;
    for (let i = 0; i < n; i++) {
        first = first.next;
    }
    while(first.next) {
        first = first.next;
        second = second.next;
    }
    console.log(second);
    second.next = second.next.next;
    return dummy.next;

    // 算法二
    // let length = 0;
    // let first = head;
    // while (first) {
    //     length++;
    //     first = first.next;
    // }
    
    // let i = length - n;
    // first = dummy;
    // while (i > 0) {
    //     first = first.next;
    //     i--;
    // }
    // first.next = first.next.next;
    // return dummy.next;
};

