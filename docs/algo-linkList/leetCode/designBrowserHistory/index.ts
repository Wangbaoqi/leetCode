import { DoubleList } from './../LRUCache/index';
/*
 * @lc app=leetcode.cn id=1472 lang=typescript
 *
 * [1472] 设计浏览器历史记录
 */

// @lc code=start

class ListNode {
  val: string;
  next?: ListNode | null;
  prev?: ListNode | null;
  constructor(val: string) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

export class BrowserHistory {
  currentPage: ListNode;
  linkList: DoubleList;
  constructor(homepage: string) {
    const node = new ListNode(homepage);
    this.currentPage = node;
  }

  visit(url: string): void {
    const node = new ListNode(url);
    node.next = null;
    this.currentPage.next = node;
    node.prev = this.currentPage;

    this.currentPage = this.currentPage.next;
  }

  back(steps: number): string {
    let node = this.currentPage;
    while (steps) {
      if (node.prev === null) {
        break;
      } else {
        node = node.prev;
      }
      steps--;
    }
    this.currentPage = node;
    return node.val;
  }

  forward(steps: number): string {
    let node = this.currentPage;

    while (steps) {
      if (node.next === null) break;
      node = node.next;
      steps--;
    }

    this.currentPage = node;
    return node.val;
  }
}

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
// @lc code=end
