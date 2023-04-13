/*
 * @lc app=leetcode.cn id=154 lang=typescript
 *
 * [154] 寻找旋转排序数组中的最小值 II
 */

// @lc code=start
function findMin(nums: number[]): number {
  let n = nums.length;

  let l = 0, r = n - 1;

  while (l < r) {
    let m = l + ((r - l) >> 1);
    if (nums[m] < nums[r]) {
      r = m
    } else if (nums[m] > nums[r]) {
      l = m + 1
    } else {
      r -= 1
    }
  }
  return nums[l]
};
// @lc code=end

