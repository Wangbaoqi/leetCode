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
	val: number;
	prev: ListNode | null;
	next: ListNode | null;
	child: ListNode | null;
	constructor(
		val?: number,
		prev?: ListNode,
		next?: ListNode,
		child?: ListNode
	) {
		this.val = val === undefined ? 0 : val;
		this.prev = prev === undefined ? null : prev;
		this.next = next === undefined ? null : next;
		this.child = child === undefined ? null : child;
	}
}

export function flatten(head: ListNode | null): ListNode | null {
	dfs(head);
	return head;
}

// DFS 遍历
const dfs = (node: ListNode | null): ListNode | null => {
	let curNode = node;
	let lastNode = null;

	while (curNode !== null) {
		let nextNode = curNode.next;

		if (curNode.child) {
			const childLast = dfs(curNode.child);
			nextNode = curNode.next;

			curNode.next = curNode.child;
			curNode.child.prev = curNode;

			if (nextNode !== null) {
				childLast.next = nextNode;
				nextNode.prev = childLast;
			}

			curNode.child = null;
			lastNode = childLast;
		} else {
			lastNode = curNode;
		}

		curNode = nextNode;
	}
	return lastNode;
};

// 层级遍历
export const flatten_for = (head: ListNode | null): ListNode | null => {
	const dummy = new ListNode(-1);
	dummy.next = head;

	for (let node = head; node !== null; node = node.next) {
		if (node.child !== null) {
			let nextNode = node.next;
			let childNode = node.child;

			node.next = childNode;
			childNode.prev = node;
			node.child = null;

			let last = node;
			while (last.next !== null) last = last.next;

			last.next = nextNode;

			if (nextNode !== null) nextNode.prev = last;
		}
	}

	return dummy.next;
};
