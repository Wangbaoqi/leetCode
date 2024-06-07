/*
 * @lc app=leetcode.cn id=160 lang=typescript
 *
 * 面试题 02.03. 删除中间节点
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
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
export function deleteNode(node: ListNode): ListNode | null {
  const tmp = node.next!;
  node.val = tmp.val;
  node.next = tmp.next;
  return node;
}
