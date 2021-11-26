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

};
// @lc code=end


// solutions 

// 1. double pointer

const removeDuplicates__double = (nums) => {

  let len = nums.length;

  let s = 0, f = 0;

  while(f < len) {
    if(nums[f] != nums[s]) {
      nums[s+1] = nums[f];
      s++
    }
    f++
  }
  return s+1;
}