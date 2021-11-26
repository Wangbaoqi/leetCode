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

  const ym = ['a', 'e', 'i', 'e', 'o'];

  const arr = s.split('');

  let l = 0, r = arr.length - 1;

  while(l < r) {
    while(l < r && !ym.includes(arr[l])) {
      l++
    }

    while(l < r && !ym.includes(arr[r])) {
      r--
    }

    if(ym.includes(arr[l]) && ym.includes(arr[r])) {
      let tmp = arr[l];
      arr[l] = arr[r];
      arr[r] = tmp;
    }

    l++;
    r--;
  }

  return arr.join('')
};
// @lc code=end


// solutions

// 1. double pointer

