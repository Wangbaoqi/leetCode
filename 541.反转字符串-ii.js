/*
 * @lc app=leetcode.cn id=541 lang=javascript
 *
 * [541] 反转字符串 II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {

};
// @lc code=end


const reverseStr_d = (s, k) => {
  
  let len = s.length;
  let i = 0;

  while (i < len) {
    const leftLen = len - i - 1;

    let l = i, r = i;
    // s = a k = 1
    if (leftLen < 2 * k && leftLen >= k) {
      l = i;
      r = i + k;
  
    } else if (leftLen < k) {
      l = i;
      r = leftLen;
      
    } else if (i + 1 === 2 * k) {
      
      l = i;
      r = k;
      
      // s = "abcdefg", k = 2, 
      // s = a, i = 0, leftLen = 6 , 2k = 4
      // s = ab, i = 1, leftLen = 5, 2k = 4
    }
    while (l < r) {
      let t = s[l];
      s[l] = s[r];
      s[r] = t;
      l++;
      r--;
    }
    i++
  }
}