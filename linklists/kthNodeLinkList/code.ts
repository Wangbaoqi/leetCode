/*
 * @lc app=leetcode.cn id=160 lang=typescript
 *
 * 剑指 Offer 22. 链表中倒数第k个节点
 */
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

export function getKthFromEnd(
  head: ListNode | null,
  k: number
): ListNode | null {
  let node = head;
  let count = 0;
  while (node !== null) {
    count++;
    node = node.next!;
  }

  for (
    let node = head, i = 0;
    node !== null && i < count;
    i++, node = node.next
  ) {
    if (i === count - k) {
      return node;
    }
  }

  return null;
}
// @lc code=end
