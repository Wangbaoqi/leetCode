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
var isValid = function(s) {

};
// @lc code=end

// s = '(){}[]'
const isValid_a = s => {
  const map = { ')': '(', ']': '[', '}': '{' }
  const len = s.length;
  const stack = [];
  for (let i = 0; i < len; i++){
    const el = s[i];
    if (map[el]) {
      if (stack[stack.length - 1] != map[el]) return false;
      stack.pop()
    } else {
      stack.push(el)
    }
  }
  return !stack.length
}

// stack ['(', '(', '(', '[', '{']

const s = '(([{}]))'
const res = isValid_a(s)
console.log(res);