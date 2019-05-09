/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let length = 0;
    let first = head;
    while (head) {
        length++;
        head = head.next;
    }
    return length === 0 ? true : recursiveCheck(first, 0, length - 1);
};


const recursiveCheck = (first, start, end) => {
    if (start === end) {
        return true;
    } else if (start + 1 === end) {
        if (first.val === first.next.val) {
            return true;
        } else {
            return false;
        }
    }
    let last = first;
    for (let i = 0; i < end - start; i++) {
        last = last.next;
    }
    if (last.val !== first.val) {
        return false;
    } else {
        return recursiveCheck(first.next, start + 1, end - 1);
    }
}
