/*
 * @lc app=leetcode.cn id=344 lang=javascript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {

};
// @lc code=end


const reverseString_d = s => {
  let l = 0, r = s.length - 1;

  while (l < r) {
    let t = s[l];
    s[l] = s[r];
    s[r] = t;
    l++;
    r--;
  }
}