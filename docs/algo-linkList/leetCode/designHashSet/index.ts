/*
 * @lc app=leetcode.cn id=705 lang=typescript
 *
 * [705] 设计哈希集合
 */

// @lc code=start

export class MyHashSet {
  BASE: number;
  data: number[][];
  constructor() {
    this.BASE = 769;
    this.data = new Array(this.BASE).fill(0).map(() => new Array());
  }

  add(key: number): void {
    const h = this.hash(key);
    for (const el of this.data[h]) {
      if (el === key) {
        return;
      }
    }
  }

  remove(key: number): void {
    const h = this.hash(key);
    const it = this.data[h];
    for (let i = 0; i < it.length; i++) {
      if (it[i] === key) {
        it.splice(i, 1);
        return;
      }
    }
  }

  contains(key: number): boolean {
    const h = this.hash(key);
    const it = this.data[h];
    for (const el of it) {
      if (el === key) return true;
    }
    return false;
  }

  hash(key: number): number {
    return key % this.BASE;
  }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
// @lc code=end

