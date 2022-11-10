/*
 * @lc app=leetcode.cn id=1624 lang=javascript
 *
 * [1624] 两个相同字符之间的最长子字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function (s) {};
// @lc code=end

/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters_b = function (s) {
  const len = s.length;
  let slow = 0;
  let max = -1;
  while (slow < len) {
    let fast = slow + 1;
    while (fast < len) {
      if (s[slow] == s[fast] && slow != fast) {
        max = Math.max(fast - slow - 1, max);
      }
      fast++;
    }

    slow++;
  }
  return max;
};

const maxLengthBetweenEqualCharacters_m = s => {

  let map = new Map();
  let max = -1;

  for (let i = 0; i < s.length; i++) {
    const v = s[i]
    if (map.has(v)) {
      const d = map.get(v)
      max = Math.max(i - d - 1, max)
    } else {
      map.set(v, i)
    }
  }
  return max
}

const test = "scayofdzca";

const ret = maxLengthBetweenEqualCharacters_b(test);
const ret1 = maxLengthBetweenEqualCharacters_m(test);

console.log(ret, ret1);
