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

};
// @lc code=end

const isPalindrome = s => {
  const str = 'a'?.toLowerCase()?.match(/[a-z0-9]/g)?.join('');

  if (!str) return true;

  let l = 0, r = str.length;

  while (l < r) {
    if (str[l] !== str[r]) return false;
    l++;
    r--;
  }
  return true
}


