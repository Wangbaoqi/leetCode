/*
 * @lc app=leetcode.cn id=382 lang=typescript
 *
 * [382] 链表随机节点
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

export class Solution {
  head: ListNode | null;
  constructor(head: ListNode | null) {
    this.head = head;
  }

  getRandom(): number {
    let i = 1,
      ans = 0;
    for (let node = this.head; node != null; node = node.next) {
      if (Math.floor(Math.random() * i) === 0) {
        ans = node.val;
      }
      i++;
    }
    return ans;
  }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */
// @lc code=end
