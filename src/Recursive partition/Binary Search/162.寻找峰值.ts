/*
 * @lc app=leetcode.cn id=162 lang=typescript
 *
 * [162] 寻找峰值
 */

// @lc code=start
function findPeakElement(nums: number[]): number {
  let n = nums.length;
  let l = 0, r = n - 1;

  while (l < r) {
    let m = l + ((r - l) >> 1);

    if (nums[m] < nums[m + 1]) {
      l = m + 1
    } else {
      r = m
    }
  }
  if (l < n) return l;
  return -1;
};
// @lc code=end

