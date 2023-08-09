/*
 * @lc app=leetcode.cn id=146 lang=typescript
 *
 * [146] LRU 缓存
 */

// @lc code=start

export class ListNode {
  key?: number;
  value?: number;
  prev: ListNode | null;
  next: ListNode | null;
  constructor(key?: number, value?: number) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

export class DoubleList {
  dummyHead: ListNode | null;
  dummyTail: ListNode | null;
  constructor() {
    this.dummyHead = new ListNode(-1, -1);
    this.dummyTail = new ListNode(-1, -1);
    this.dummyHead.next = this.dummyTail;
    this.dummyTail.prev = this.dummyHead;
  }

  addHead(node: ListNode): void {
    node.next = this.dummyHead.next;
    node.next.prev = node;
    this.dummyHead.next = node;
    node.prev = this.dummyHead;
  }

  moveToHead(node: ListNode): void {
    this.removeNode(node);
    this.addHead(node);
  }

  removeNode(node: ListNode): void {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  removeTail(): ListNode {
    const node = this.dummyTail.prev;
    this.removeNode(node);
    return node;
  }
}

export class LRUCache {
  size: number;
  capacity: number;
  map: Map<number, ListNode>;
  linkList: DoubleList;
  constructor(capacity: number) {
    this.size = 0;
    this.capacity = capacity;
    this.map = new Map<number, ListNode>();
    this.linkList = new DoubleList();
  }

  get(key: number): number {
    const node = this.map.get(key);
    if (!node) return -1;

    this.linkList.moveToHead(node);
    return node.value;
  }

  put(key: number, value: number): void {
    if (this.map.has(key)) {
      const node = this.map.get(key);
      node.value = value;
      this.linkList.moveToHead(node);
    } else {
      const node = new ListNode(key, value);
      // addHead
      this.linkList.addHead(node);
      this.map.set(key, node);
      this.size++;

      // link size full
      if (this.size > this.capacity) {
        const node = this.linkList.removeTail();
        this.map.delete(node.key);
        this.size--;
      }
    }
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end
