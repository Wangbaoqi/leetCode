/*
 * @lc app=leetcode.cn id=345 lang=javascript
 *
 * [345] 反转字符串中的元音字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {

};
// @lc code=end



// solutions

// 1. double pointer

var reverseVowels_double = function(s) {
  const ym = ['a', 'e', 'i', 'o', 'u', "A", 'E', 'I', 'O', 'U'];

  const a = s.split('')
  let l = 0, r = a.length - 1;

  while(l < r) {

    while(l < r && !ym.includes(a[l])) {
      l++
    }

    while(l < r && !ym.includes(a[r])) {
      r--
    }

    if(l < r) {
      let tmp = a[l];
      a[l] = a[r];
      a[r] = tmp;
    }
    l++;
    r--;
  }

  return a.join('')
}