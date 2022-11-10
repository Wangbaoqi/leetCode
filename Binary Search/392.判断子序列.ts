/*
 * @lc app=leetcode.cn id=392 lang=javascript
 *
 * [392] 判断子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// @lc code=end


const isSubsequence = (s: string, t: string): boolean => {

  let i = 0, j = 0;
  let n = s.length, m = t.length;

  let r = 0;

  while (i <= m) {
    
    if (r == n) return true;

    if (t[i] == s[j]) {
      j++;
      r++
    }
    i++;
  }
  return false;
}