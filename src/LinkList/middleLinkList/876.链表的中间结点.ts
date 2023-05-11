/*
 * @lc app=leetcode.cn id=876 lang=typescript
 *
 * [876] 链表的中间结点
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

export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }
}

export function middleNode(head: ListNode | null): ListNode | null {

  if (head === null || head.next === null) return head;

  let count = 0;

  for (let node = head; node !== null; node = node.next!) {
    count++
  }

  let mid = count >> 1;

  for (let node = head, i = 1; node !== null && i <= mid; node = node.next!, i++) { 
    if (i === mid) return node;
  }

  return null;
};
// @lc code=end

export function middleNodeI(head: ListNode | null): ListNode | null { 

  if (head === null) return head;
  
  let slow = head; 
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next!;
    fast = fast.next.next!;
  }
  return slow;
}
