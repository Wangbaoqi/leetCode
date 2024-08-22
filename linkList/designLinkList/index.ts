/*
 * @lc app=leetcode.cn id=707 lang=typescript
 *
 * [707] 设计链表
 */

class ListNode {
  val: number;
  next: ListNode | null;
  prev: ListNode | null;
  constructor(val: number) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

// @lc code=start
class MyLinkedList {
  head: ListNode | null;
  tail: ListNode | null;
  size: number;
  constructor() {
    this.size = 0;
    this.head = new ListNode(-1);
    this.tail = new ListNode(-1);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  get(index: number): number {
    if (index >= this.size || index < 0) return -1;

    if (index == 0) return this.head.next.val;

    let idx = 0;
    let node = this.head.next;

    while (node && idx + 1 !== index) {
      node = node.next;
      idx++;
    }

    return node.next.val;
  }

  addAtHead(val: number): void {
    const node = new ListNode(val);
    // h => v => t
    node.next = this.head.next;
    node.prev = this.head;
    node.next.prev = node;
    this.head.next = node;
    this.size++;
  }

  addAtTail(val: number): void {
    const node = new ListNode(val);
    // h => v => t
    node.next = this.tail;
    node.prev = this.tail.prev;
    node.prev.next = node;
    node.next.prev = node;
    this.size++;
  }

  addAtIndex(index: number, val: number): void {
    if (index > this.size) return;

    if (index === 0) {
      this.addAtHead(val);
      return;
    }
    if (index === this.size) {
      this.addAtTail(val);
      return;
    }

    let idx = 0;
    let node = this.head.next;
    let newNode = new ListNode(val);

    while (node && idx + 1 !== index) {
      node = node.next;
      idx++;
    }

    // h => v => t

    newNode.next = node.next;
    newNode.next.prev = newNode;
    node.next = newNode;
    newNode.prev = node;

    this.size++;
  }

  deleteAtIndex(index: number): void {
    if (index >= this.size || index < 0) return;

    let idx = 0;
    let node = this.head.next;

    if (index == 0) {
      this.head.next = node.next;

      if (node.next) {
        node.next.prev = this.head;
      }
      this.size--;
      return;
    }

    while (node && idx + 1 !== index) {
      node = node.next;
      idx++;
    }

    // h => v => t

    const curNode = node.next;

    node.next = curNode.next;
    curNode.next.prev = node;
    this.size--;
  }
}

// 1 2 7

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
// @lc code=end
