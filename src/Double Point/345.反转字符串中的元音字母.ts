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

// * 1. double pointer

const reverseVowels_double = s => {

  const ym = ['a','e','i','o','u', 'A', 'E', 'I', 'O', 'U'];

  let str = s.split('');

  let l = 0, r = str.length - 1;

  while(l < r) {


    while(l < r && !ym.includes(str[l])) {
      l++
    }

    while(l < r && !ym.includes(str[r])) {
      r--
    }

    if(l < r) {
      let tmp = str[l];
      str[l] = str[r];
      str[r] = tmp;
      l++;
      r--;
    }
  }

  return str.join('')
}