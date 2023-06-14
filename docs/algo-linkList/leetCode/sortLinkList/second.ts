/*
 * @lc app=leetcode.cn id=148 lang=typescript
 *
 * [148] 排序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 */
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
export function sortListII(head: ListNode | null): ListNode | null {
  if (head === null) return head;

  let length = 0;
  let node = head;
  while (node !== null) {
    length++;
    node = node.next;
  }

  const dummy = new ListNode(-1, head);

  for (let sub = 1; sub < length; sub <<= 1) {
    let prev = dummy;
    let curr = dummy.next;

    while (curr !== null) {
      let head1 = curr;

      // handle h1 linkList
      for (let i = 1; i < sub && curr.next; i++) {
        curr = curr.next;
      }

      let head2 = curr.next;
      curr.next = null;
      curr = head2;
      for (let i = 1; i < sub && curr != null && curr.next != null; i++) {
        curr = curr.next;
      }

      let next = null;
      if (curr != null) {
        next = curr.next;
        curr.next = null;
      }
      let merged = mergeList(head1, head2);
      prev.next = merged;
      while (prev.next != null) {
        prev = prev.next;
      }
      curr = next;
    }
  }

  return dummy.next;
}

const mergeList = (left: ListNode | null, right: ListNode | null) => {
  const dummy = new ListNode(-1);

  let temp = dummy;
  let head1 = left;
  let head2 = right;

  while (head1 !== null && head2 !== null) {
    if (head1.val <= head2.val) {
      temp.next = head1;
      head1 = head1.next!;
    } else {
      temp.next = head2;
      head2 = head2.next!;
    }
    temp = temp.next;
  }

  temp.next = head1 !== null ? head1 : head2;

  return dummy.next;
};
// @lc code=end
