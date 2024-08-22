/*
 * @lc app=leetcode.cn id=1669 lang=typescript
 *
 * [1669] 合并两个链表
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

export function mergeInBetween(
  list1: ListNode | null,
  a: number,
  b: number,
  list2: ListNode | null
): ListNode | null {
  // list1 = -1 [0,1,2,3,4,5], a = 3, b = 4, list2 = [1000000,1000001,1000002]

  const dummy = new ListNode(-1, list1);

  let node = dummy;
  let firstNode = null;
  let lastNode = null;
  let nextNode = null;

  let i = 0;
  while (node !== null && node.next !== null) {
    const curr = node.next;
    if (i === a) {
      firstNode = node;
    }
    if (i === b) {
      lastNode = curr.next;
    }
    i++;
    node = node.next;
  }

  node = list2;
  while (node !== null) {
    if (node.next === null) {
      node.next = lastNode;
      break;
    }
    node = node.next;
  }

  firstNode.next = list2;

  return dummy.next;
}
// @lc code=end
