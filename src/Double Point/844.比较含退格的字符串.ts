/*
 * @lc app=leetcode.cn id=844 lang=javascript
 *
 * [844] 比较含退格的字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {

};
// @lc code=end



// solutions

// * 1. double + count

const backspaceCompare = (s, t) => {

  let i = s.length - 1;
  let j = t.length - 1;

  let ic = 0;
  let jc = 0;

  while(i >= 0 || j >= 0) {

    while(i >= 0) {
      if(s[i] == '#') {
        ic++
        i--
      }else if(ic > 0) {
        ic--;
        i--
      }else {
        break;
      }
    }

    while(j >= 0) {
      if(t[j] == '#') {
        jc++
        j--
      }else if(jc > 0) {
        jc--;
        j--
      }else {
        break;
      }
    }

    if(s[i] != t[j]) return false;
    i--;
    j--;
  }

  return true

}

