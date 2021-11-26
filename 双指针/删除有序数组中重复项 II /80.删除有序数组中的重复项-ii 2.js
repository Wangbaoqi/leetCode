/*
 * @lc app=leetcode.cn id=80 lang=javascript
 *
 * [80] 删除有序数组中的重复项 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

  let len = nums.length;

  if(len < 2) return len;

  let s = 2, f = 2;


  while(f < len) {
    if(nums[f] != nums[s - 2] ) {
      nums[s] = nums[f] 
      s++
    }
    f++
  }
};
// @lc code=end

