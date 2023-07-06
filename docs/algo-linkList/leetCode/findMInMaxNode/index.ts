/*
 * @lc app=leetcode.cn id=2058 lang=typescript
 *
 * [2058] 找出临界点之间的最小和最大距离
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

export function nodesBetweenCriticalPoints(head: ListNode | null): number[] {
  if (head === null || head.next === null || head.next.next === null)
    return [-1, -1];

  let slow = head;
  let fast = head.next;

  let minDistance = -1;
  let maxDistance = -1;

  let minIdx = -1;
  let maxIdx = -1;

  let pos = 2;
  while (fast && fast.next !== null) {
    // [5,3,1,2,5,1,2]

    // minIdx = 3, maxIdx = 3
    // minDis = 5 - maxIdx; maxDix = 5 - minIdx = 2;

    // [3, 5, 6]

    // i = 3; minIdx = i, maxIdx = i;
    // i = 5; minDis = i - maxIdx = 2; maxDis = max(i - minIdx, maxIdx) = 2; maxIdx = 5
    // i = 6; minDiS = min(minDis, i - maxIdx) = 1, maxDis = max(maxDis, i - minIdx) = 3

    const pv = slow.val;
    const cv = fast.val;
    const nv = fast.next.val;

    // 如果是临界点
    if (cv > Math.max(pv, nv) || cv < Math.min(pv, nv)) {
      if (maxIdx !== -1) {
        maxDistance = Math.max(maxDistance, pos - minIdx);
        minDistance =
          minDistance == -1
            ? pos - maxIdx
            : Math.min(minDistance, pos - maxIdx);
      }

      // 关键 第一个极小点位置找到之后一直不变
      if (minIdx === -1) {
        minIdx = pos;
      }

      // 更新最大的极点位置
      maxIdx = pos;
    }

    pos++;
    slow = fast;
    fast = fast.next;
  }

  return [minDistance, maxDistance];
}
// @lc code=end
