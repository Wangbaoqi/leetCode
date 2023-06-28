/*
 * @lc app=leetcode.cn id=237 lang=typescript
 *
 * [237] 删除链表中的节点
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
/**
 Do not return anything, modify it in-place instead.
 */
export function deleteNode(node: ListNode | null): void {
  node.val = node.next.val;
  node.next = node.next.next;
}
// @lc code=end
