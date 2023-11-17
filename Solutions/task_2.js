// Reverse Linked List
// https://leetcode.com/problems/reverse-linked-list/

// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Note - Reverse Linked List using recursion

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (head == null || head.next == null) return head;

    const reversed = reverseList(head.next);
    head.next.next = head;
    head.next = null;

    return reversed;
};