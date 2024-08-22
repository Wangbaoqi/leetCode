/*
 * @lc app=leetcode.cn id=1721 lang=typescript
 *
 * 2095. 删除链表的中间节点
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

export function deleteMiddle(head: ListNode | null): ListNode | null {
  // 兼容边界值 [1]
  if (head === null || head.next === null) return null;

  const dummy = new ListNode(-1, head);

  let slowPrev = dummy;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slowPrev = slowPrev.next;
    fast = fast.next.next;
  }

  const slow = slowPrev.next;
  slowPrev.next = slow.next;
  slow.next = null;

  return dummy.next;
}
