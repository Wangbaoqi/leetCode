/*
 * @lc app=leetcode.cn id=146 lang=typescript
 *
 * [146] LRU 缓存
 */

class ListNode {
  key: number = -1;
  count: number = 0;
  val: number = -1;
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
  size: number = 0;
  head: ListNode | null;
  tail: ListNode | null;
  constructor() {
    this.head = new ListNode();
    this.tail = new ListNode();
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.size = 0;
  }

  addHead(node: ListNode): void {
    node.next = this.head.next;
    node.next.prev = node;
    this.head.next = node;
    node.prev = this.head;
    this.size++;
  }

  removeNode(node: ListNode): void {
    node.prev.next = node.next;
    node.next.prev = node.prev;
    this.size--;
  }

  getHead(): ListNode {
    return this.head.next;
  }

  getTail(): ListNode {
    return this.tail.prev;
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

  removeTailNode() {
    const node = this.tail.prev;
    this.removeNode(node);
    return node;
  }
}

// @lc code=start
export class LFUCache {
  capacity: number;
  minFreq: number;
  linkList: DoubleList;
  keyMap: Map<number, ListNode>;
  freqMap: Map<number, DoubleList>;
  constructor(capacity: number) {
    this.capacity = capacity;
    this.linkList = new DoubleList();
    this.keyMap = new Map();
    this.freqMap = new Map();
    this.minFreq = 0;
  }

  get(key: number): number {
    if (this.capacity == 0) return;

    if (!this.keyMap.get(key)) return -1;

    const node = this.keyMap.get(key);
    const { count: freq, val } = node;
    this.freqMap.get(freq).removeNode(node);

    if (this.freqMap.get(this.minFreq).size === 0) {
      this.freqMap.delete(this.minFreq);
      if (this.minFreq == freq) {
        this.minFreq += 1;
      }
    }

    const curList = this.freqMap.get(freq + 1);
    const list = curList ?? new DoubleList();
    list.addHead(new ListNode(key, val, freq + 1));

    this.freqMap.set(freq + 1, list);
    this.keyMap.set(key, this.freqMap.get(freq + 1).getHead());

    return val;
  }

  put(key: number, value: number): void {
    if (this.capacity == 0) return;

    if (!this.keyMap.has(key)) {
      // size is full
      if (this.keyMap.size >= this.capacity) {
        // delete operation
        // first get the minFreq tailNode
        const node = this.freqMap.get(this.minFreq).getTail();
        this.keyMap.delete(node.key);
        this.freqMap.get(this.minFreq).removeNode(node);
        if (this.freqMap.get(this.minFreq).size == 0) {
          this.freqMap.delete(this.minFreq);
        }
      }
      // put new key
      // look freqMap has key 1
      const curList = this.freqMap.get(1);
      const list = curList ?? new DoubleList();
      list.addHead(new ListNode(key, value, 1));

      this.freqMap.set(1, list);
      this.keyMap.set(key, this.freqMap.get(1).getHead());
      this.minFreq = 1;
    } else {
      // update key value and freq
      const node = this.keyMap.get(key);
      const curFreq = node.count;

      this.freqMap.get(curFreq).removeNode(node);

      // cur freq has not node
      // update minFreq
      if (this.freqMap.get(curFreq).size == 0) {
        this.freqMap.delete(curFreq);
        if (this.minFreq == curFreq) {
          this.minFreq += 1;
        }
      }

      // find new freq list
      const curList = this.freqMap.get(curFreq + 1);
      const list = curList ?? new DoubleList();
      list.addHead(new ListNode(key, value, curFreq + 1));

      this.freqMap.set(curFreq + 1, list);
      this.keyMap.set(key, this.freqMap.get(curFreq + 1).getHead());
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
