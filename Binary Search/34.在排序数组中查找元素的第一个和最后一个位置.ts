/*
 * @lc app=leetcode.cn id=34 lang=typescript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
function searchRange(nums: number[], target: number): number[] {

  let n = nums.length;

  const searchLeft = () => {
    let l = 0, r = n - 1;

    while (l < r) {
      let m = l + ((r - l) >> 1);
      if (nums[m] < target) {
        l = m + 1
      } else {
        r = m
      }
    }
    console.log(r, l);

    if (l < n && nums[l] == target) return l;
    return -1;
  }

  const searchRight = () => {
    let l = 0, r = n;

    while (l < r) {
      let m = l + ((r - l) >> 1);
      if (nums[m] <= target) {
        l = m + 1
      } else {
        r = m
      }
    }
    console.log(r, l);
    
    if (r - 1 < n && nums[r - 1] == target) return r - 1;
    return -1;
  }

  const lr = searchLeft();
  const rr = searchRight();

  return [lr, rr]

};
// @lc code=end

