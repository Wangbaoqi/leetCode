/*
 * @lc app=leetcode.cn id=147 lang=typescript
 *
 * [147] 对链表进行插入排序
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

// dummy -> 2 -> 1 -> 5 -> 3
// dummy -> 1 -> 2 -> 5 -> 3

export function insertionSortList(head: ListNode | null): ListNode | null {

  if (head === null || head.next === null) return head;

  const dummy = new ListNode(-1, head);
  let last = head;
  let cur = head.next;

  while (cur !== null) { 

    if (cur.val >= last.val) {
      last = last.next;
    } else {
      
      let prev = dummy;
      while (prev.next.val <= cur.val) { 
        prev = prev.next;
      }

      last.next = cur.next;
      cur.next = prev.next
      prev.next = cur
    }
    cur = last.next
  }
  return dummy.next;
};
// @lc code=end

