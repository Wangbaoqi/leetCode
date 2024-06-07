/*
 * @lc app=leetcode.cn id=19 lang=typescript
 *
 * [19] 删除链表的倒数第 N 个结点
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

export function removeNthFromEnd(
  head: ListNode | null,
  n: number
): ListNode | null {
  const dummy = new ListNode(-1);
  dummy.next = head;

  let num = 0;

  for (let node = head; node !== null; node = node.next) {
    num++;
  }

  for (let i = 0, node = dummy; node !== null; node = node.next!, i++) {
    if (num - n == i) {
      node.next = node.next !== null ? node.next.next : null;
      break;
    }
  }

  return dummy.next;
}
// @lc code=end

// Traversal once

export const removeNthFromEndII = (
  head: ListNode | null,
  n: number
): ListNode | null => {
  const dummy = new ListNode(-1, head);

  let slow = dummy;
  let fast = head;

  while (n) {
    fast = fast !== null ? fast.next : null;
    n--;
  }

  while (fast !== null) {
    slow = slow.next!;
    fast = fast.next!;
  }

  slow.next = slow.next !== null ? slow.next.next : null;

  return dummy.next;
};
