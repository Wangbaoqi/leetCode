/*
 * @lc app=leetcode.cn id=61 lang=typescript
 *
 * [61] 旋转链表
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

export function reversePrint(head: ListNode | null): number[] {
  const stack: number[] = [];

  for (let node = head; node !== null; node = node.next) {
    stack.push(node.val);
  }

  return stack.reverse();
}
// @lc code=end
