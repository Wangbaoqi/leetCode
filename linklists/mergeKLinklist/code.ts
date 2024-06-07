/*
 * @lc app=leetcode.cn id=23 lang=typescript
 *
 * [23] 合并 K 个升序链表
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

export function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
	// [
	//  1 -> 2 -> 4
	//  5 -> 6 -> 9
	//  1 -> 3 -> 10
	// ]
	const len = lists.length;

	if (len === 0) return null;
	if (len === 1) return lists[0];

	let head = lists[0];

	for (let i = 1; i < lists.length; i++) {
		head = mergeSortList(head, lists[i]);
	}

	return head;
}

// Divide and rule
export function mergeKListsI(lists: Array<ListNode | null>): ListNode | null {
	const merge = (l: number, r: number): ListNode | null => {
		if (l === r) return lists[l] || null;

		if (l > r) return null;

		let mid = (l + r) >> 1;

		const leftList = merge(l, mid);
		const rightList = merge(mid + 1, r);

		return mergeSortList(leftList, rightList);
	};

	return merge(0, lists.length - 1);
}

const mergeSortList = (
	head1: ListNode | null,
	head2: ListNode | null
): ListNode | null => {
	const dummy = new ListNode(-1);

	let pre = dummy;
	let h1 = head1;
	let h2 = head2;

	while (h1 !== null && h2 !== null) {
		if (h1.val < h2.val) {
			pre.next = h1;
			h1 = h1.next;
		} else {
			pre.next = h2;
			h2 = h2.next;
		}
		pre = pre.next;
	}

	pre.next = h1 !== null ? h1 : h2;
	return dummy.next;
};
// @lc code=end
