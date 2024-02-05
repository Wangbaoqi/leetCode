/*
 * @lc app=leetcode.cn id=432 lang=typescript
 *
 * [432] 全 O(1) 的数据结构
 */

// @lc code=start

export class ListNode {
  count?: number = 0;
  keys: Set<string>;
  prev: ListNode | null;
  next: ListNode | null;
  constructor(count?: number, key?: string) {
    this.count = count || 0;
    this.keys = new Set();
  }

  insert(node: ListNode): ListNode | null {
    node.prev = this;
    node.next = this.next;
    node.prev.next = node;
    node.next.prev = node;
    return node;
  }

  removeNode(): void {
    const node = this;
    if (node.keys.size == 0) {
      node.next.prev = node.prev;
      node.prev.next = node.next;
    }
  }
}

export class AllOne {
  head: ListNode;
  tail: ListNode;
  map: Map<string, ListNode>;
  constructor() {
    this.head = new ListNode();
    this.tail = new ListNode();
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.map = new Map<string, ListNode>();
  }

  inc(key: string): void {
    let { head, map } = this;
    let curNode: ListNode;

    if (!map.has(key)) {
      if (head.next.count !== 1) {
        const newNode = new ListNode(1);
        head.insert(newNode);
      }
      curNode = head.next;
    } else {
      const cur = map.get(key);
      if (cur.next.count !== cur.count + 1) {
        const node = new ListNode(cur.count + 1);
        cur.insert(node);
      }
      curNode = cur.next;
      cur.keys.delete(key);
      cur.removeNode();
    }
    curNode.keys.add(key);
    map.set(key, curNode);
  }

  dec(key: string): void {
    const { map } = this;
    const curNode = map.get(key);
    curNode.keys.delete(key);

    if (curNode.count == 1) {
      map.delete(key);
    } else {
      if (curNode.prev.count !== curNode.count - 1) {
        const node = new ListNode(curNode.count - 1);
        curNode.prev.insert(node);
      }
      const target = curNode.prev;
      target.keys.add(key);
      map.set(key, target);
    }
    curNode.removeNode();
  }

  getMaxKey(): string {
    const node = this.tail.prev;
    let maxKey = '';
    for (const key of [...node.keys]) {
      maxKey = key;
      break;
    }
    return maxKey;
  }

  getMinKey(): string {
    const node = this.head.next;
    let minKey = '';
    for (const key of node.keys) {
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
