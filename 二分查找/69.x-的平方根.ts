/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根 
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */

const mySqrt = (x: number): number => {

  if (x < 2) return x;

  let l = 1;
  let r = x;

  while (l <= r) {
    const m = l + ((r - l) >> 1);
    if (m ** 2 === x) {
      return m
    } else if (m ** 2 < x) {
      l = m + 1
    } else {
      r = m - 1
    }
  }

  return r

}

// @lc code=end


// x = 4 r = 2
// x = 8 r = 