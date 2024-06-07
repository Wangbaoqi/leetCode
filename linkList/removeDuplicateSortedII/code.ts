/*
 * @lc app=leetcode.cn id=82 lang=typescript
 *
 * [82] 删除排序链表中的重复元素 II
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

export function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) return head;

  const dummy = new ListNode(-1, head);
  let preNode = dummy;
  let slowNode = head;
  let fastNode = head.next;

  while (fastNode !== null) {
    if (slowNode.val !== fastNode.val) {
      fastNode = fastNode.next!;
      slowNode = slowNode.next!;
      preNode = preNode.next!;
    } else {
      while (fastNode && slowNode.val === fastNode.val) {
        fastNode = fastNode.next!;
      }

      preNode.next = fastNode;
      slowNode = fastNode;
      fastNode = slowNode !== null ? slowNode.next! : null!;
    }
  }

  return dummy.next;
}
// @lc code=end
