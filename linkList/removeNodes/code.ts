/*
 * @lc app=leetcode.cn id=2487 lang=typescript
 *
 * [2487] 从链表中移除节点
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

export function removeNodes(head: ListNode | null): ListNode | null {
  const dummy = new ListNode(100001, head);
  const stack = [dummy];

  let node = head;
  let peek = null;

  // 2 7 4 3 5

  while (node !== null) {
    while (stack.length && (peek = stack[stack.length - 1]).val < node.val) {
      stack.pop();
    }

    peek.next = node;
    stack.push(node);
    node = node.next;
  }

  return dummy.next;
}
// @lc code=end

function reverseNodes(head: ListNode | null): ListNode | null {
  const dummy = new ListNode(-1, head);
  let node = head;

  while (node !== null && node.next !== null) {
    let nextNode = node.next;

    node.next = nextNode.next;
    nextNode.next = dummy.next;
    dummy.next = nextNode;
  }
  return dummy.next;
}

export function removeNodesII(head: ListNode | null): ListNode | null {
  head = reverseNodes(head);

  let node = head;
  // 5 3 4 7 2

  while (node !== null && node.next !== null) {
    if (node.val > node.next.val) {
      node.next = node.next.next;
    } else {
      node = node.next;
    }
  }

  return reverseNodes(head);
}
