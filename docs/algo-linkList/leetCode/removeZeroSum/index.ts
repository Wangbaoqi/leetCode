/*
 * @lc app=leetcode.cn id=1171 lang=typescript
 *
 * [1171] 从链表中删去总和值为零的连续节点
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

export function removeZeroSumSublists(head: ListNode | null): ListNode | null {
  // [0, 1,2,-3,3,1]

  // prefix = 0, seen = {'0': 0 }
  // prefix = 1, seen = {'0': 0, '1': 1 }
  // prefix = 3, seen = {'0': 0, '1': 1, '3': 2}
  // prefix = 0, seen = {'0': -3, '1': 1, '2': 2}
  // prefix = 3, seen = {'0': -3, '1': 1, '2': 2, '3': 3}
  // prefix = 4, seen = {'0': -3, '1': 1, '2': 2, '3': 3, '4': 1}

  //  prefix = 0, node.next = seen[0].next = 3

  const dummy = new ListNode(0, head);

  const seen = {};

  let prefix = 0;
  for (let node = dummy; node !== null; node = node.next) {
    prefix += node.val;
    seen[prefix] = node;
  }

  prefix = 0;
  for (let node = dummy; node !== null; node = node.next) {
    prefix += node.val;
    node.next = seen[prefix].next;
  }

  return dummy.next;
}
// @lc code=end
