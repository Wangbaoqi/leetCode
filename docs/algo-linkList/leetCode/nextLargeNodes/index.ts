/*
 * @lc app=leetcode.cn id=1019 lang=typescript
 *
 * [1019] 链表中的下一个更大节点
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

export function nextLargerNodes(head: ListNode | null): number[] {
  // 2 7 4 3 5

  // 2 1 5
  // 2, stack [[2, 0]], ans = [0]
  // 1, stack [[2, 0], [1, 1]], ans = [0, 0]
  // 5, stack [[2, 0], [1, 1]], ans = [0, 0, 0]
  // 5, stack [[2, 0]], ans = [0, 5, 0]
  // 5, stack [], ans = [5, 5, 0]

  // stack [[5,2]]

  const ans = [];
  const stack = [];

  let node = head;

  let idx = 0;
  while(node !== null) {

    ans.push(0);

    while(stack.length && stack[stack.length - 1][0] < node.val) {
      ans[stack.pop()[1]] = node.val;
    }

    stack.push([node.val, idx++])

    node = node.next;
  }

  console.log(stack, 'stack');
  console.log(ans, 'ans');

  return ans;
}
// @lc code=end
