/*
 * @lc app=leetcode.cn id=2130 lang=typescript
 *
 * [2130] 链表最大孪生和
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

export function pairSum(head: ListNode | null): number {
  // n = 2, i = 0 -> i = 1
  // n = 4, i = 0 -> i = 3
  // n = 4, i = 1 -> i = 2

  let len = 0;
  let node = head;
  let arr: number[] = [];

  while (node !== null) {
    node = node.next;
    arr.push(node.val);
    len++;
  }

  let maxNum = 0;
  for (let i = 0; i <= len / 2 - 1; i++) {
    maxNum = Math.max(maxNum, arr[i] + arr[len - 1 - i]);
  }
  return maxNum;
}

function reverseList(head: ListNode | null): ListNode | null {
  const dummy = new ListNode(-1, head);
  let curr = head;
  while (curr && curr.next) {
    let fast = head.next;
    curr.next = fast.next;
    fast.next = dummy.next;
    dummy.next = fast;
  }
  return dummy.next;
}

export function pairSumII(head: ListNode | null): number {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // 4 3
  const rightLink = reverseList(slow);

  // 1 2
  const leftLink = head;

  let left = leftLink;
  let right = rightLink;

  let max = 0;

  while (right !== null) {
    max = Math.max(max, right.val + left.val);
    left = left.next;
    right = right.next;
  }

  return max;
}
