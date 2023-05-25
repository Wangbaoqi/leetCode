/*
 * @lc app=leetcode.cn id=374 lang=javascript
 *
 * [374] 猜数字大小
 */

// @lc code=start
/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
const guessNumber = function(n: number): number {
    
  if (n == 1) return 1;

  let l = 1, r = n;

  while (l <= r) {
    let m = l + ((r - l) >> 1);
    let res = guess(m);

    if (res == 0) {
      return m
    } else if (res == -1) {
      r = m - 1
    } else {
      l = l + 1
    }
  }
  return -1
};
// @lc code=end

