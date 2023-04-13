/*
 * @lc app=leetcode.cn id=367 lang=javascript
 *
 * [367] 有效的完全平方数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */

// @lc code=end


const isPerfectSquare = (num: number): boolean => {

  let l = 1, r = num;

  while (l <= r) {
    let m = l + ((r - l) >> 1);

    if (m * m == num) return true;

    if (m * m > num) {
      r = m - 1;
    } else {
      l = m + 1;
    }
  }
  return false;
}
