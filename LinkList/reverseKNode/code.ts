/*
 * @lc app=leetcode.cn id=25 lang=typescript
 *
 * [25] K 个一组翻转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 *
 */

export class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}
export function reverseKGroup(
	head: ListNode | null,
	k: number
): ListNode | null {
	if (head === null || head.next === null) return head;

	const dummy = new ListNode(-1, head);
	let prev = dummy;
	let node = head;

	while (node !== null) {
		let curr = node;
		let fast = null;

		// check nodes nums
		let tmp = node;
		let num = 0;
		for (let i = 0; i < k && tmp; i++) {
			tmp = tmp.next;
			num++;
		}

		// reverse nodes
		let isReverse = num % k === 0;
		for (let i = 0; i < k - 1 && curr && isReverse; i++) {
			fast = curr.next;
			curr.next = fast.next;
			fast.next = prev.next;
			prev.next = fast;
		}

		prev = curr;
		node = curr ? curr.next : null;
	}
	return dummy.next;
}

// @lc code=end
