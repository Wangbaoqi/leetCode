/*
 * @lc app=leetcode.cn id=234 lang=typescript
 *
 * 面试题 02.01. 移除重复节点
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

export function removeDuplicateNodes(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) return head;

  const set = new Set();
  let forward = head;
  let cur = head.next!;
  set.add(head.val);

  // 1 1 1 1 2
  // 1 2 3 3
  while (cur !== null) {
    if (set.has(cur.val)) {
      forward.next = cur.next;
      cur = forward.next!;
    } else {
      set.add(cur.val);
      forward = cur;
      cur = forward.next!;
    }
  }
  return head;
}

// @lc code=end
