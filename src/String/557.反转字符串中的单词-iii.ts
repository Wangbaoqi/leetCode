/*
 * @lc app=leetcode.cn id=557 lang=javascript
 *
 * [557] 反转字符串中的单词 III
 */

const { reverse } = require("dns/promises");

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {

};
// @lc code=end

const reverseWords_d = s => {
  const a = s.split(' ');

  const reverse = (a, word, index) => {
    const word_a = word.split('');
    let l = 0, r = word_a.length;
    while (l < r) {
      let tmp = word_a[l];
      word_a[l] = word_a[r];
      word_a[r] = tmp;
      l++;
      r--;
    }
    a[index] = word_a.join('');
  }

  for (let i = 0; i < a.length; i++) {
    const word = a[i];
    reverse(a, word, i);
  }
  return a.join(' ');
}


const ret = reverseWords_d("Let's take LeetCode contest");

console.log(ret);