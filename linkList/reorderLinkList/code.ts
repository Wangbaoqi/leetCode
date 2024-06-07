/*
 * @lc app=leetcode.cn id=143 lang=typescript
 *
 * [143] 重排链表
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

export function reorderList_violence(head: ListNode | null): void {
  let cur = head;

  while (cur && cur.next !== null && cur.next.next !== null) {
    let fast = cur.next;
    let last = null;
    while (fast && fast.next && fast.next.next) {
      fast = fast.next;
    }
    last = fast;

    const lastNode = last.next;
    last.next = null;

    lastNode.next = cur.next;
    cur.next = lastNode;

    cur = lastNode.next;
  }
}

/**
 Do not return anything, modify head in-place instead.
 */
export function reorderList_linearTable(head: ListNode | null): void {
  // 1 2 3 4 5

  // 1 -> [2, 3, 4, 5],
  // 2 -> [3, 4, 5],
  // 3 -> [4, 5],
  // 4 -> [5],
  // 5 -> [],

  // 1 -> [2, 3, 4, 5], ---> 1 -> 5
  // 5 -> [],           ---> 5 -> 2 -> [3, 4, 5],
  // 2 -> [3, 4, 5],    ---> 2 -> 4 -> [5],
  // 4 -> [5],          ---> 4 -> 3 -> [4, 5]

  if (head === null || head.next === null) return;

  const listNode: ListNode[] = [];

  let node = head;
  while (node !== null) {
    listNode.push(node);
    node = node.next;
  }

  let i = 0;
  let j = listNode.length - 1;

  while (i < j) {
    listNode[i++].next = listNode[j];

    if (i === j) break;

    listNode[j--].next = listNode[i];
  }

  listNode[i].next = null;
}
// @lc code=end
