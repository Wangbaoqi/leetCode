/*
 * @lc app=leetcode.cn id=541 lang=javascript
 *
 * [541] 反转字符串 II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {

};
// @lc code=end


const reverseStr_d = (s, k) => {
  let a = s.split('');
  let len = a.length;
  let i = 0;
  const reverse = (l, r) => {
    while (l < r) {
      let t = a[l];
      a[l] = a[r];
      a[r] = t;
      l++;
      r--;
    }
  }
  while (i < len) {
    let l = i, r = Math.min(i + k, len) - 1;
    reverse(l, r)
    i += 2*k 
  }
  return a.join('')
}

// k = 2 ret bacdfegtuyk bacdefgyutk
// k = 3 ret cbadeftytguk 
const test = 'abcdefg' || 'abcdefgtyuk'; 

const ret = reverseStr_d(test, 3)

console.log(ret);
