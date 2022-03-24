/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {

};
// @lc code=end



const lengthOfLongestSubstring_a = s => {

  let slow = 0, fast = 0;

  let map = {};
  let max = 0;

  while (fast < s.length) {
    const fItem = s[fast++];
    console.log(sItem,'sItem');
    map[fItem] ? map[fItem]++ : (map[fItem] = 1);

    while (map[fItem] > 1) {
      const sItem = s[slow];
      map[sItem]--;
      slow++
    }

    max = Math.max(max, fast - slow)
  }

  return max;

}

const res = lengthOfLongestSubstring_a('abcabcbb')

console.log(res);