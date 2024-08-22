/*
 * @lc app=leetcode.cn id=1721 lang=typescript
 *
 * [1721] 交换链表中的节点
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

export function swapNodes(head: ListNode | null, k: number): ListNode | null {
  if (head === null || head.next === null) return head;

  let node = head;
  let len = 0;
  while (node !== null) {
    len++;
    node = node.next;
  }

  let dummy = new ListNode(-1, head);
  let first = null;
  let second = null;
  let i = 0;
  node = dummy;
  while (node !== null && node.next !== null) {
    if (i == k - 1) {
      first = node;
    }
    if (i == len - k) {
      second = node;
    }

    i++;
    node = node.next;
  }

  if (first === second) return head;

  if (first?.next == second) {
    let nextTmp = second.next;
    second.next = nextTmp.next;
    nextTmp.next = first.next;
    first.next = nextTmp;
  } else if (second?.next === first) {
    let nextTmp = first.next;
    first.next = nextTmp.next;
    nextTmp.next = second.next;
    second.next = nextTmp;
  } else {
    let firstNext = first?.next;
    let secondNext = second?.next;

    let tmpFirstNext = firstNext?.next;
    let tmpSecondNext = secondNext?.next;

    firstNext.next = tmpSecondNext;
    secondNext.next = tmpFirstNext;

    first.next = secondNext;
    second.next = firstNext;
  }

  return dummy.next;
}
// @lc code=end
