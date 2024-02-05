/*
 * @lc app=leetcode.cn id=141 lang=typescript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 */

export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

export function hasCycle(head: ListNode | null): boolean {
  
  if (head === null || head.next === null) return false;
  
  let slow = head;
  let fast = head.next;

  while (slow !== fast) { 
    if (fast === null || fast.next === null) return false;
    
    slow = slow.next!;
    fast = fast.next.next!;
  }
  return true;
};
// @lc code=end

// 1. Floyd 判圈算法
