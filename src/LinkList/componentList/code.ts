/*
 * @lc app=leetcode.cn id=817 lang=typescript
 *
 * [817] 链表组件
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

export function numComponents(head: ListNode | null, nums: number[]): number {
	// 0 1 2 3    --  [0,1,3]
	const set = new Set();
	for (const num of nums) {
		set.add(num);
	}

	let sum = 0;
	let isSub = false;

	while (head !== null) {
		if (set.has(head.val)) {
			if (!isSub) {
				isSub = true;
				sum++;
			}
		} else {
			isSub = false;
		}

		head = head.next;
	}
	return sum;
}
// @lc code=end
