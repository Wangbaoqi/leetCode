/*
 * @lc app=leetcode.cn id=138 lang=typescript
 *
 * [138] 复制带随机指针的链表
 */

// @lc code=start
/**
 * Definition for Node.
 */
export class ListNode {
  val: number;
  next: ListNode | null;
  random: ListNode | null;
  constructor(val?: number, next?: ListNode, random?: ListNode) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
    this.random = random === undefined ? null : random;
  }
}

export function copyRandomList(head: ListNode | null): ListNode | null {
  if (head === null) return null;

  // console.log(head);

  // first step
  // copy the copy each node
  for (let node = head; node !== null; node = node.next!.next!) {
    node.next = new ListNode(node.val, node.next!);
  }

  // second step
  // copy the random node
  for (let node = head; node !== null; node = node.next!.next!) {
    const nodeNew = node.next;
    if (nodeNew)
      nodeNew.random = node.random !== null ? node.random.next : null;
  }

  // third step
  // Shorter the connection of the same node

  const headNew = head.next;
  for (let node = head; node !== null; node = node.next!) {
    const nodeNew = node.next;
    node.next = node.next !== null ? node.next.next : null;
    if (nodeNew) {
      nodeNew.next = nodeNew.next !== null ? nodeNew.next!.next! : null;
    }
  }
  // console.log(headNew);

  return headNew;
}
// @lc code=end
