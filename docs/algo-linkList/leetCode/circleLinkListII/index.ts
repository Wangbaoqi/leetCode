/*
 * @lc app=leetcode.cn id=142 lang=typescript
 *
 * [142] 环形链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 */

export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function detectCycle(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) return null;

  let slow = head;
  let fast = head;

  while (fast !== null) {
    if (fast.next === null) return null;

    slow = slow.next!;
    fast = fast.next.next!;

    if (slow === fast) {
      let curNode = head;
      while (slow !== curNode) {
        slow = slow.next!;
        curNode = curNode.next!;
      }
      return slow;
    }
  }

  return null;
}
// @lc code=end

export const detectCycleI = (head: ListNode | null): ListNode | null => {
  if (head == null || head.next === null) return null;

  let slow = head;
  let fast = head;

  while (true) {
    if (fast == null || fast.next === null) return null;

    slow = slow.next!;
    fast = fast.next.next!;

    if (slow === fast) break;
  }

  fast = head;

  while (fast !== slow) {
    slow = slow.next!;
    fast = fast.next!;
  }

  return slow;
};
