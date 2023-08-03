/*
 * @lc app=leetcode.cn id=432 lang=typescript
 *
 * [432] 全 O(1) 的数据结构
 */

// @lc code=start

class ListNode {
	count?: number = 0;
	keys: Set<string> = new Set();
	prev: ListNode | null;
	next: ListNode | null;
	constructor(count?: number, key?: string) {
		this.count = count || 0;
		key ? this.keys.add(key) : this.keys.add(null);
	}

	insert(node: ListNode): ListNode | null {
		node.prev = this;
		node.next = this.next;
		node.prev.next = node;
		node.next.prev = node;
		return node;
	}

	remove() {
		this.prev.next = this.next;
		this.next.prev = this.prev;
	}
}

class AllOne {
	root: ListNode;
	nodes: Map<string, ListNode>;
	constructor() {
		this.root = new ListNode();
		this.root.prev = this.root;
		this.root.next = this.root;
		this.nodes = new Map();
	}

	inc(key: string): void {
		if (this.nodes.has(key)) {
			const cur = this.nodes.get(key);
			const next = cur.next;
			if (next === this.root || next.count > cur.count + 1) {
				this.nodes.set(key, cur.insert(new ListNode(cur.count + 1, key)));
			} else {
				next.keys.add(key);
				this.nodes.set(key, next);
			}
			cur.keys.delete(key);
			if (cur.keys.size === 0) {
				cur.remove();
			}
		} else {
			if (this.root.next === this.root || this.root.next.count > 1) {
				this.nodes.set(key, this.root.insert(new ListNode(1, key)));
			} else {
				this.root.next.keys.add(key);
				this.nodes.set(key, this.root.next);
			}
		}
	}

	dec(key: string): void {
		const cur = this.nodes.get(key);
		if (cur.count === 1) {
			this.nodes.delete(key);
		} else {
			const pre = cur.prev;
			if (pre === this.root || pre.count < cur.count - 1) {
				this.nodes.set(key, cur.prev.insert(new ListNode(cur.count - 1, key)));
			} else {
				pre.keys.add(key);
				this.nodes.set(key, pre);
			}
		}
		cur.keys.delete(key);
		if (cur.keys.size === 0) {
			cur.remove();
		}
	}

	getMaxKey(): string {
		if (!this.root.prev) {
			return '';
		}
		let maxKey = '';
		for (const key of this.root.prev.keys) {
			maxKey = key;
			break;
		}
		return maxKey;
	}

	getMinKey(): string {
		if (!this.root.next) {
			return '';
		}
		let minKey = '';
		for (const key of this.root.next.keys) {
			minKey = key;
			break;
		}
		return minKey;
	}
}

/**
 * Your AllOne object will be instantiated and called as such:
 * var obj = new AllOne()
 * obj.inc(key)
 * obj.dec(key)
 * var param_3 = obj.getMaxKey()
 * var param_4 = obj.getMinKey()
 */
// @lc code=end
