/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

  let len = nums.length;

  if(len < 2) return len;

  let s = 0; f = 1;

  while(f < len) {
    if(nums[f] != nums[s]) {
      nums[s + 1] = nums[f]
      s++
    }
    f++
  }
};
// @lc code=end



// solutions

// 1. double points

// nice skill nums[s+1] = nums[f]