/*
 * @lc app=leetcode.cn id=2 lang=typescript
 *
 * [2] 两数相加
 */

// @lc code=start

export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}
export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {

  // 9 9 9 9 9 9 9
  // 9 9 9 9
  // 8 9 9 9 0 0 0 1
  // 1 1 1 1 1 1 1

  const dummy = new ListNode(-1);
  let nextNode = dummy;

  let tmp = 0;
  
  while (l1 !== null && l2 !== null) { 

    const sum = l1.val + l2.val + tmp;

    tmp = 0;
    let res = 0;
    if (sum >= 10) {
      tmp = 1
    }
    res = sum % 10;

    const node = new ListNode(res);
    nextNode.next = node;

    nextNode = nextNode.next;

    l1 = l1.next;
    l2 = l2.next;
  }

  let curNode = l1 === null ? l2 : l1;

  while (curNode !== null) {
    const sum = curNode.val + tmp;

    tmp = 0
    if (sum >= 10) {
      tmp = 1
    } 
    const res = sum % 10;
    const node = new ListNode(res)
    nextNode.next = node;
    nextNode = nextNode.next;
    curNode = curNode.next;
  }

  if (curNode === null) {
    if (tmp > 0) {
      const node = new ListNode(tmp);
      nextNode.next = node;
    }
  }

  return dummy.next;
};
// @lc code=end

