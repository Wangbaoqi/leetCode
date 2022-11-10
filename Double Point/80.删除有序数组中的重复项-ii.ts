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

};
// @lc code=end


// solutions

// 1. double pointer

const removeDuplicates__double = (nums) => {

  let len = nums.length;

  if(len < 2) return len;

  let s = 2;

  for (let f = 2; f < len; f++) {
    if(nums[f] != nums[s - 2]) {
      num[s++] = nums[f]
    }
  }
  return s
}