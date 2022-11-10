/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

};
// @lc code=end


const longestCommonPrefix_a = strs => {

  let prefix = strs[0];

  const getCommonPrefix = (pre, cur) => {
    let i = 0, j = 0;
    let common = '';
    while (i < pre.length || j < cur.length) {
      if (pre[i] != cur[j]) {
        break;
      }
      common += pre[i];
      i++;
      j++;
    }
    return common;
  }

  for (let i = 1; i < strs.length; i++) {
    prefix = getCommonPrefix(prefix, strs[i])
  }

  return prefix
}