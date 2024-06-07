/*
 * @lc app=leetcode.cn id=2074 lang=typescript
 *
 * [2074] 反转偶数长度组的节点
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

export function reverseEvenLengthGroups(
  head: ListNode | null
): ListNode | null {
  // [1, 2, 3, 4, 5, 6, 7, 8, 9]

  // len = 1, node = [1, 2, 3, 4, 5, 6, 7, 8, 9], curr = [2, 3, 4, 5, 6, 7, 8, 9], idx = 1, prev = node
  // len = 2, node = [2, 3, 4, 5, 6, 7, 8, 9], curr = [3, 4, 5, 6, 7, 8, 9], idx = 2,

  let node = head;
  let len = 0;
  let prev = null;

  while (node !== null) {
    ++len;

    let idx = 0;
    let curr = node;
    while (idx < len && curr !== null) {
      idx++;
      curr = curr.next;
    }

    // odd continue next loop
    // update next node and prev node
    if (idx & 1) {
      for (let id = 1; id <= idx; id++) {
        prev = node;
        node = node.next;
      }
    } else {
      // even reverse groups
      for (let id = 1; id < idx; id++) {
        let nextNode = node.next;
        node.next = nextNode.next;
        nextNode.next = prev.next;
        prev.next = nextNode;
      }

      // update prev node and next node
      prev = node;
      node = node.next;
    }
  }
  return head;
}
// @lc code=end
