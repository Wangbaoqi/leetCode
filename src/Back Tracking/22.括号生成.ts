/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {

};
// @lc code=end

const generateParenthesis_a = n => {

  const ret = [], ans = [];

  const backTracking = (max, l, r) => {

    if (ans.length == 2 * n) {
      ret.push(ans.join(''))
      return
    }

    if (l < max) {
      ans.push('(');
      backTracking(max, l + 1, r);
      ans.pop();
    }
    if (r < l) {
      ans.push(')');
      backTracking(max, l, r + 1);
      ans.pop();
    }
  }
  backTracking(n, 0, 0)
  return ret
}


const res = generateParenthesis_a(3)
console.log(res);