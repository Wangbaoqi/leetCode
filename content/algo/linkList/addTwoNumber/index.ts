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

  return dummy.next;
};
// @lc code=end

