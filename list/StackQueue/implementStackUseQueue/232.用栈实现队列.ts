/*
 * @lc app=leetcode.cn id=232 lang=typescript
 *
 * [232] 用栈实现队列
 */

// @lc code=start
class MyQueue {
	s1: Array<number>;
	s2: number[];
	constructor() {
		this.s1 = [];
		this.s2 = [];
  }

	push(x: number): void {
		this.s1.push(x);
	}

	pop(): number {
		this.peek();
		return this.s2.pop() as number;
	}

	peek(): number {
		if (!this.s2.length) {
			while (this.s1.length > 0) {
				const el = this.s1.pop() as number;
				this.s2.push(el);
			}
		}
		if (!this.s2.length) { 
			return 0
		}
		return this.s2[this.s2.length - 1];
	}

	empty(): boolean {
		return !this.s2.length && !this.s1.length
	}
}

export default MyQueue

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end
