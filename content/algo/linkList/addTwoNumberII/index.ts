/*
 * @lc app=leetcode.cn id=445 lang=typescript
 *
 * [445] 两数相加 II
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

function reverseList(head: ListNode | null): ListNode | null { 

  if (head === null || head.next === null) return head;

  const dummy = new ListNode(-1, head);
  let forward = head;
  let curNode = forward.next;

  while (curNode) {
    forward.next = curNode.next;
    curNode.next = dummy.next;
    dummy.next = curNode

    curNode = forward.next;
  }
  return dummy.next;
}

export function addTwoNumbersII(l1: ListNode | null, l2: ListNode | null): ListNode | null {

  l1 = reverseList(l1);
  l2 = reverseList(l2);

  if (l1 == null) return l2;
  if (l2 == null) return l1;

  const dummy = new ListNode(-1);
  let node = dummy;

  let h1 = l1;
  let h2 = l2;
  let digit = 0;

  while (h1 !== null || h2 !== null) { 

    const h1Val = h1 ? h1.val : 0;
    const h2Val = h2 ? h2.val : 0;
    const sum = (h1Val + h2Val + digit) % 10;
    
    digit = ~~((h1Val + h2Val + digit) / 10);

    node.next = new ListNode(sum);

    node = node.next;
    h1 = h1 && h1.next;
    h2 = h2 && h2.next;

  }

  if (digit) {
    node.next = new ListNode(digit)
  }

  return reverseList(dummy.next);

};
// @lc code=end

