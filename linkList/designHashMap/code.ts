/*
 * @lc app=leetcode.cn id=706 lang=typescript
 *
 * [706] 设计哈希映射
 */

// @lc code=start
export class MyHashMap {
  BASE: number;
  data: any[][];
  constructor() {
    this.BASE = 769;
    this.data = new Array(this.BASE).fill(0).map(() => new Array());
  }

  hash(key: number): number {
    return key % this.BASE;
  }

  put(key: number, value: number): void {
    const h = this.hash(key);
    for (const el of this.data[h]) {
      if (el[0] === key) {
        el[1] = value;
        return;
      }
    }
    this.data[h].push([key, value]);
  }

  get(key: number): number {
    const h = this.hash(key);
    const it = this.data[h];
    for (const el of it) {
      if (el[0] === key) return el[1];
    }
    return -1;
  }

  remove(key: number): void {
    const h = this.hash(key);
    const it = this.data[h];
    for (const el of it) {
      const id = it.indexOf(el);
      if (el[0] === key) {
        it.splice(id, 1);
        return;
      }
    }
  }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
// @lc code=end
