/*
 * @lc app=leetcode.cn id=61 lang=typescript
 *
 * 剑指 Offer 18. 删除链表的节点
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
export function deleteNode(head: ListNode | null, val: number): ListNode | null {
  
  if (head === null || head.next === null) return head;

  const dummy = new ListNode(-1, head);

  let slow = dummy;
  let fast = slow.next;

  while (fast !== null) {
    
    if (fast.val === val) { 
      slow.next = fast.next;
      break;
    }
    slow = slow.next!;
    fast = fast.next!;
  }

  return dummy.next;
};