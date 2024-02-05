/*
 * @lc app=leetcode.cn id=24 lang=typescript
 *
 * [24] 两两交换链表中的节点
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

export function swapPairs(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) return head;

  const dummy = new ListNode(-1, head);
  let preNode = dummy;
  let node = head;

  while (node && node.next !== null) {
    const nextNode = node.next;

    node.next = nextNode.next;
    nextNode.next = preNode.next;
    preNode.next = nextNode;

    preNode = node;
    node = node.next;
  }

  return dummy.next;
}
// @lc code=end
