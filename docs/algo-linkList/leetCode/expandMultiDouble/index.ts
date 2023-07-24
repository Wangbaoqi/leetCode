/*
 * @lc app=leetcode.cn id=430 lang=typescript
 *
 * [430] 扁平化多级双向链表
 */

// @lc code=start
/**
 * Definition for node.
 */

export class ListNode {
  val: number
  prev: ListNode | null
  next: ListNode | null
  child: ListNode | null
  constructor(val?: number, prev? : ListNode, next? : ListNode, child? : ListNode) {
    this.val = (val===undefined ? 0 : val);
    this.prev = (prev===undefined ? null : prev);
    this.next = (next===undefined ? null : next);
    this.child = (child===undefined ? null : child);
  }
}

function flatten(head: ListNode | null): ListNode | null {

};