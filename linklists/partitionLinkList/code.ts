/*
 * @lc app=leetcode.cn id=86 lang=typescript
 *
 * [86] 分隔链表
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

export function partition_linkList(
  head: ListNode | null,
  x: number
): ListNode | null {
  if (head === null || head.next === null) return head;

  const dummy = new ListNode(-1, head);

  let node = dummy;
  let fast = head.next;

  while (fast !== null) {
    if (node.next && node.next.val < x) {
      node = node.next!;
      head = fast;
    } else if (fast.val < x) {
      head.next = fast.next;
      fast.next = node.next;
      node = node.next = fast;
    } else {
      head = fast;
    }
    fast = head.next!;
  }

  return dummy.next;
}
// @lc code=end

export function partition_linkList1(
  head: ListNode | null,
  x: number
): ListNode | null {
  const dummyLeft = new ListNode(0);
  const dummyRight = new ListNode(0);

  let left = dummyLeft;
  let right = dummyRight;
  let node = head;

  while (node !== null) {
    if (node.val < x) {
      left = left.next = node;
    } else {
      right = right.next = node;
    }
    node = node.next;
  }

  right.next = null;
  left.next = dummyRight.next;

  return dummyLeft.next;
}
