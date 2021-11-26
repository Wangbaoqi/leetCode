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

// * 1. double pointer

const backspaceCompare_double = (s, t) => {

  let sl = s.length - 1;

  let tl = t.length - 1;

  let ss = 0;
  let ts = 0;

  while(sl > 0 || tl > 0) {

    while(sl > 0) {
      if(s[sl] == '#') {
        ss++;
        sl--
      }else if(ss > 0) {
        ss--;
        sl--;
      }else {
        break
      }
    }

    while(tl > 0) {
      if(t[tl] == '#') {
        ts++;
        tl--
      }else if(ts > 0) {
        ts--;
        tl--
      }else {
        break;
      }
    }

    // patch 

    if(sl >= 0 && tl >= 0) {
      if(s[sl] != t[tl]) return false;
    }else {
      if(sl >= 0 || tl >= 0) return false;
    }

    tl--;
    sl--;
  }
  return true;
}