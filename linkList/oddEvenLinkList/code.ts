/*
 * @lc app=leetcode.cn id=328 lang=typescript
 *
 * [328] 奇偶链表
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

export function oddEvenList(head: ListNode | null): ListNode | null {

  // 2 1 3 5 6 4 7

  if (head === null || head.next === null) return head;

  const dummy = new ListNode(-1, head);
  let prev = head;
  let node = head.next;

  while (node !== null && node.next !== null) { 
    const nextNode = node.next;
    node.next = nextNode.next;
    nextNode.next = prev.next;
    prev.next = nextNode;
    
    prev = prev.next;
    node = node.next;
  }

  return dummy.next;
};
// @lc code=end

