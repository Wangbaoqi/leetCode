/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// @lc code=end

const search = (nums: number[], target: number): number => {

  const len = nums.length;

  if (!len) return -1;
  if (len == 1) return target == nums[0] ? 0 : -1;

  let l = 0, r = len - 1;

  while (l <= r) {
    let m = l + ((r - l) >> 1);

    if (nums[m] == target) return m;

    if (nums[0] < nums[m]) {
      if (nums[0] <= target && nums[m] >= target) {
        r = m - 1
      } else {
        l = m + 1
      }
    } else {
      if (nums[m] <= target && nums[len - 1] >= target) {
        l = m + 1
      } else {
        r = m - 1
      }
    }
  }

  return -1;
}


search([1,2,3], 1)