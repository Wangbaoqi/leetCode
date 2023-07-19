/*
 * @lc app=leetcode.cn id=029 lang=typescript
 *
 * 剑指 Offer II 029. 排序的循环链表
 */

// @lc code=start

/**
 * Definition for node.
 */

export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function insert(head: ListNode | null, insertVal: number): ListNode | null {

  const node = new ListNode(insertVal);

  // head == null
  if(head === null) {
    node.next = node;
    return node;
  }

  // head only one
  if(head.next === head) {
    head.next = node;
    node.next = head;
    return head
  }

  let slow = head;
  let fast = head.next;

  while(fast !== head ) {

    if(slow.val <= insertVal && fast.val >= insertVal) {
      break;
    }

    // 1 2 3 4
    if(slow.val > fast.val) {
      if(insertVal > slow.val || insertVal < fast.val) break
    }

    slow = slow.next;
    fast = fast.next;
  }

  slow.next = node;
  node.next = fast;

  return head;
}