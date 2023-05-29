/*
 * @lc app=leetcode.cn id=21 lang=typescript
 *
 * [21] 合并两个有序链表
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
export function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  const dummy = new ListNode(-1);
  let tmpNode = dummy;

  while (list1 !== null && list2 !== null) { 
    if (list1.val <= list2.val) {
      tmpNode.next = list1;
      list1 = list1.next
    } else {
      tmpNode.next = list2;
      list2 = list2.next;
    }
    tmpNode = tmpNode.next;
  }

  tmpNode.next = list1 === null ? list2 : list1;
  return dummy.next
};
// @lc code=end

