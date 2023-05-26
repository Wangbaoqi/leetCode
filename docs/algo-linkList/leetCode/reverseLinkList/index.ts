/*
 * @lc app=leetcode.cn id=206 lang=typescript
 *
 * [206] 反转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

export function reverseList(head: ListNode | null): ListNode | null {

  const dummy = new ListNode(-1, head);
  let forward = head;
  let curNode = forward?.next;

  while (curNode && forward && dummy) {
    forward.next = curNode?.next;
    curNode.next = dummy?.next
    dummy.next = curNode;

    curNode = forward?.next
  }

  return dummy && dummy.next
};
// @lc code=end


