/*
 * @lc app=leetcode.cn id=146 lang=typescript
 *
 * [146] LRU 缓存
 */

class ListNode {
  key: number = 0;
  count: number = 0;
  val: number = 0;
  prev: ListNode | null;
  next: ListNode | null;
  constructor(key?: number, val?: number, count?: number) {
    this.key = key;
    this.count = count;
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoubleList {
  head: ListNode | null;
  tail: ListNode | null;
  constructor() {
    this.head = new ListNode();
    this.tail = new ListNode();
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  addHead(node: ListNode): void {
    node.next = this.head.next;
    node.next.prev = node;
    this.head.next = node;
    node.prev = this.head;
  }

  addTail(node: ListNode): void {
    node.next = this.tail;
    node.prev = this.tail.prev;
    node.prev.next = node;
    node.next.prev = node;
  }

  moveToHead(node: ListNode): void {
    this.removeNode(node);
    this.addHead(node);
  }

  removeNode(node: ListNode): void {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  removeTailNode() {
    const node = this.tail.prev;
    this.removeNode(node);
    return node;
  }
}

// @lc code=start
class LFUCache {
  size: number = 0;
  capacity: number;
  linkList: DoubleList;
  map: Map<number, ListNode>;
  constructor(capacity: number) {
    this.capacity = capacity;
    this.size = 0;
    this.linkList = new DoubleList();
    this.map = new Map();
  }

  get(key: number): number {
    const curNode = this.map.get(key);
    if (!curNode) return -1;

    curNode.count++;
    this.linkList.moveToHead(curNode);
    return curNode.val;
  }

  put(key: number, value: number): void {
    const curNode = this.map.get(key);
    if (curNode) {
      curNode.val = value;
      curNode.count++;

      // TODO
      this.linkList.moveToHead(curNode);
    } else {
      const node = new ListNode(key, value, 1);

      this.map.set(key, node);
      this.size++;

      // TODO
      this.linkList.addTail(node);

      if (this.size > this.capacity) {
        const node = this.linkList.removeTailNode();
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
