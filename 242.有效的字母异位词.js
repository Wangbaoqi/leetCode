/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

};
// @lc code=end




const isAnagram_s = (s, t) => {
  if (s.length != t.length) return false;

  return [...s].sort().join('') === [...t].sort().join('')
}


const isAnagram_m = (s, t) => {
  if (s.length != t.length) return false;
  
  const map = new Array(26).fill(0);
  const initPoint = 'a'.codePointAt(); // 97

  for (let i = 0; i < s.length; i++) {
    map[s.codePointAt(i) - initPoint]++
  }

  for (let j = 0; j < t.length; j++) {
    map[t.codePointAt(j) - initPoint]--
    if (map[t.codePointAt(j) - initPoint]  < 0) {
      return false;
    }
  }
  return true;
}