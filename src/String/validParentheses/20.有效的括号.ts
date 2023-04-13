/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s: string): boolean {
  return false
};
// @lc code=end

// 1. stack

export const isValid_stack = (s: string): boolean => {
  
  const map: Map<string, string> = new Map([[')', '('], [']', '['], ['}', '{'] ]);
  const stack: string[] = [];
  const len = s.length;
  for (let i = 0; i < len; i++) {
    const str = s[i];
    switch (str) {
      case ')':
      case ']':
      case '}':
        if (map.get(str) !== stack[stack.length - 1]) return false;
        stack.pop();
        break;
      default:
        stack.push(str);
    }
  }

  return !stack.length
}
