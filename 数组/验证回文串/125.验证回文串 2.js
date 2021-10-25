/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let str = s.toLowerCase().match(/[a-z0-9]+/g).join('');
  let l = 0, r = str.length - 1;

  while(l <= r) {
    if(str[l] != str[r]) return false;
    l++;
    r--;
  }
  return true;
};
// @lc code=end

// solutions

// 1. double point  O(n)

// 2. array api and reg