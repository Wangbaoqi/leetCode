/*
 * @lc app=leetcode.cn id=1290 lang=typescript
 *
 * [1290] 二进制链表转整数
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
export function getDecimalValue(head: ListNode | null): number {
  let node = head;

  let ans = 0;
  while (node) {
    ans = ans * 2 + node.val;
    node = node.next;
  }
  return ans;
}
// @lc code=end
