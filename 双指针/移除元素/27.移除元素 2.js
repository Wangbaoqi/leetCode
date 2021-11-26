/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let s = 0; f = 0;
  let len = nus.length;
  while(f < len) {
    if(nums[f] != val) {
      if(nums[f] != nums[s]) {
        let tmp = nums[f];
        nums[f] = nums[s];
        nums[s] = tmp;
      }
      s++
    }
    f++
  }
};
// @lc code=end






// solutions

// 1. double point 




// summaries 
// this remove element similar move zeros 