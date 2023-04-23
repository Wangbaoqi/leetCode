/*
 * @lc app=leetcode.cn id=92 lang=typescript
 *
 * [92] 反转链表 II
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

function reverseLinkList(head: ListNode | null): ListNode | null {

  if (head === null || head.next === null) return head;

  const dummy = new ListNode(-1);
  dummy.next = head;

  let slow = head;
  let fast = head?.next;

  while (fast !== null) {
    slow.next = fast.next;
    fast.next = dummy.next;
    dummy.next = fast;

    fast = slow.next!;
  }

  return dummy.next;

}
export function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
  
  if (head === null || head.next === null) return head;

  const dummy = new ListNode(-1);

  dummy.next = head;

  let preNode = dummy;
  
  for (let i = 0; i < left - 1; i++) {
    preNode = preNode.next!    
  }

  let nextNode = preNode

  for (let i = 0; i < right - left + 1; i++) {
    nextNode = nextNode.next!    
  }

  let leftNode = preNode.next;
  let rightNode = nextNode.next;

  preNode.next = null;
  nextNode.next = null;

  reverseLinkList(leftNode);

  preNode.next = nextNode;
  if(leftNode) leftNode.next = rightNode;

  return dummy.next

};
// @lc code=end

export function reverseBetweenII(head: ListNode | null, left: number, right: number): ListNode | null { 

  

}