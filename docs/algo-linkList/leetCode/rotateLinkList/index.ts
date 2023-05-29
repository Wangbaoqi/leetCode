/*
 * @lc app=leetcode.cn id=61 lang=typescript
 *
 * [61] 旋转链表
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

export function rotateRight(head: ListNode | null, k: number): ListNode | null {

  if (k === 0) return head;
  
  let sum = 0;

  for (let node = head; node !== null; node = node.next) { 
    sum++;
  }

  k %= sum;

  let node = head;

  while (k) {
    node = reverseLinkList(node);
    k--;
  }

  return node;
};

function reverseLinkList(head: ListNode | null): ListNode | null { 

  if(head === null || head.next === null) return head;
  
  const dummy = new ListNode(-1, head);

  let slow = head;
  let fast = head.next;

  while (fast.next !== null) {
    fast = fast.next!;
    slow = slow.next!;
  }

  slow.next = fast.next;
  fast.next = dummy.next;
  dummy.next = fast;

  return dummy.next;

}
// @lc code=end

