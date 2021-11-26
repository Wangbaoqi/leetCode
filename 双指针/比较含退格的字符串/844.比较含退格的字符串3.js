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

  let is = s.length - 1, it = t.length - 1;

  let sCount = 0, tCount = 0;

  while(is >= 0 || it >= 0) {

    while(is >= 0) {
      if(s[is] == '#') {
        sCount++;
        is--;
      }else if(sCount > 0) {
        sCount--;
        is--;
      }else {
        break
      }
    }

    while(it >= 0) {
      if(t[it] == '#') {
        tCount++;
        it--;
      }else if(tCount > 0) {
        tCount--;
        it--;
      }else {
        break
      }
    }

    if(s[is] != t[it]) return false;

    is--;
    it--
  }
  return true;
}


// * 2. stack + traverse

const backspaceCompare_stack = (s, t) => {

  const getString = (str) => {
    let stack = [];

    for (let i = 0; i < str.length; i++) {
      if(str[i] != '#') {
        stack.push(str[i])
      }else {
        if(stack.length) {
          stack.pop()
        }
      }
    }

    return stack.join('')
  }

  return getString(s) == getString(t)

}