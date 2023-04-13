/*
 * @lc app=leetcode.cn id=153 lang=typescript
 *
 * [153] 寻找旋转排序数组中的最小值
 */

// @lc code=start
function findMin(nums: number[]): number {
  let n = nums.length;

  let l = 0, r = n - 1;
  while (l < r) {
    let m = l + ((r - l) >> 1);

    if (nums[m] < nums[r]) {
      r = m
    } else {
      l = m + 1
    }
  }
  return nums[r]
};
// @lc code=end

