/*
 * @lc app=leetcode.cn id=83 lang=typescript
 *
 * [83] 删除排序链表中的重复元素
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

export function deleteDuplicates(head: ListNode | null): ListNode | null {

  if (head === null) return null;
  
  if (head.next === null) return head;

  const dummy = head;

  let slow = dummy;
  let fast = dummy.next;

  while (fast !== null) {

    if (slow.val === fast.val) {

      fast = fast.next;
      continue;
    }

    slow.next = fast;
    slow = fast;
    fast = fast.next;
  }

  slow.next = fast

  return dummy;
};
// @lc code=end

