/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {

};
// @lc code=end


const longestPalindrome_a = s => {

  if (s.length == 1) return s;

  let slow = 0;
  let max = ''

  const palindarome = (str, s, e) => {
    let l = s, r = e;

    while (l >= 0 && r < str.length && str[l] == str[r]) {
      l--;
      r++;
    }
    return str.slice(l + 1, r);
  }

  while (slow < s.length) {
    
    const lStr = palindarome(s, slow, slow);
    const rStr = palindarome(s, slow, slow + 1);

    if (lStr.length > max.length) {
      max = lStr
    }

    if (rStr.length > max.length) {
      max = rStr
    }

    slow++
  }

  return max;
}


const test = 'babad';

const res = longestPalindrome_a(test);
console.log(res);