/*
 * @lc app=leetcode.cn id=674 lang=javascript
 *
 * [674] 最长连续递增序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {

};
// @lc code=end


// solutions

// * 1. double pointer

const findLengthOfLCIS_double = nums => {

  let len = nums.length;

  if(len < 2) return len;

  let max = 1;

  let s = 0, f = 1;

  while(f < len) {
    let count = 1;
    if(nums[s] < nums[f]) {
      count++;
    }else {
      count = 1
    }
    max = Math.max(max, count)
    s = f++
  }
  return max
}