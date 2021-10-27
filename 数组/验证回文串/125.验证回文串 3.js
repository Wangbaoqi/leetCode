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


// solutions

// 1. double pointer + reg  O(n)

var isPalindrome_double = function(s) {

  const str = s.toLowerCase().match(/[a-z0-9]+/g)?.join('');

  if(!str) return true;
  
  let l = 0, r = str.length - 1;

  while(l < r) {
    if(str[l++] != str[r++]) return false;
  }
  return true
}

// 2. double pointer on origin arr o(n)

var isPalindrome_double = function(s) {

  let l = 0, r = s.length - 1;

  while(l < r) {
    while(l < r && !isLetterOrDigit(s[r])) {
      r--
    }
    while(l < r && !isLetterOrDigit(s[l])) {
      l++
    }
    if(l < r) {
      if(s[l].toLowerCase() !== s[r].toLowerCase()) return false;
      l++;
      r--;
    }
  }
  return true
}

var isLetterOrDigit = (s) => {
  const isLowerLetter = s.codePointAt() > 96 && s.codePointAt() < 123;
  const isUpperLetter = s.codePointAt() > 64 && s.codePointAt() < 91;
  const isDigit = s.codePointAt() > 47 && s.codePointAt() < 58;
  if(isLowerLetter || isUpperLetter || isDigit) return true;
  return false;
}