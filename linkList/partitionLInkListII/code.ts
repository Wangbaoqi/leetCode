/*
 * @lc app=leetcode.cn id=725 lang=typescript
 *
 * [725] 分隔链表
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

export function splitListToParts(
  head: ListNode | null,
  k: number
): Array<ListNode | null> {
  let len = 0;
  let node = head;

  while (node !== null) {
    len++;
    node = node.next;
  }

  let part = ~~(len / k);
  let remainder = len % k;

  // [1,2,3,4,5,6,7,8,9,10] k = 3
  // part = 3; remainder = 1

  const parts = new Array(k).fill(null);

  let i = 0;
  node = head;

  while (node !== null && i < k) {
    parts[i] = node;
    // 子part的长度 根据remainder判断
    const partSize = part + (i < remainder ? 1 : 0);

    for (let j = 1; j < partSize; j++) {
      node = node.next;
    }

    const tmp = node.next;
    node.next = null;
    node = tmp;

    i++;
  }

  return parts;
}
// @lc code=end
