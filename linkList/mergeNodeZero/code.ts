/*
 * @lc app=leetcode.cn id=2181 lang=typescript
 *
 * [2181] 合并零之间的节点
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

export function mergeNodes(head: ListNode | null): ListNode | null {
  // 0 2 1 0 4 5 2 0
  let slow = head;
  let fast = head.next;

  while (fast !== null) {
    if (fast.val === 0) {
      slow.next = fast.next ? fast : null;
      slow = slow.next;
    } else {
      slow.val += fast.val;
    }
    fast = fast.next;
  }
  return head;
}
// @lc code=end
