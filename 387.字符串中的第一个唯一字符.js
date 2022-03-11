/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {

};
// @lc code=end


const firstUniqChar_d = s => {

  for (let i = 0; i < s.length; i++) {
    if (s.lastIndexOf(s[i]) === s.indexOf(s[i])) {
      return i
    }   
  }

  return -1;
}

const firstUniqChar_m = s => {

  const map = new Map();

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      map.set(s[i], map.get(s[i]) + 1)
    } else {
      map.set(s[i], 1);
    }
  }

  for (let i = 0; i < s.length; i++) {
    const sLen = map.get(s[i])
    if (sLen === 1) return i;   
  }

  return -1;
}

const test = 'aabb'

const res = firstUniqChar_d(test)

console.log(res);