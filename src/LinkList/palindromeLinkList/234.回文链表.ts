/*
 * @lc app=leetcode.cn id=234 lang=typescript
 *
 * [234] 回文链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function palindromeLink(head: ListNode | null): boolean {

  if (head == null || head.next === null) return true;

  const firstHalfLink = getMiddleNode(head)!;
  const secondHalfLink = reverseLink(firstHalfLink?.next!);

  let node1 = head;
  let node2 = secondHalfLink;
  let result = true;
  while (node1 !== null && node2 !== null) { 
    if (node1.val !== node2.val) result = false;
    node1 = node1.next!;
    node2 = node2.next!;
  }

  firstHalfLink.next = reverseLink(secondHalfLink);
  return result;

};
// @lc code=end


function reverseLink(head: ListNode | null): ListNode | null {
  if (head == null || head.next === null) return head;

  const dummy = new ListNode(-1, head);

  let slow = head;
  let fast = head.next;

  while (fast !== null) {

    slow.next = fast.next;
    fast.next = dummy.next;
    dummy.next = fast;

    fast = slow.next!;
  }
  return dummy && dummy.next;
}


function getMiddleNode(head: ListNode | null): ListNode | null { 

  if (head == null || head.next === null) return head;

  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next!;
    fast = fast.next.next!;
  }

  return slow;
}