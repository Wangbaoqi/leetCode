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

// 1. double pointer 贪心

const findLengthOfLCIS_double = (nums) => {
  let s = 0, f = 0;
  let max = 1;
  let count = 1;

  while(f < nums.length) {
    if(nums[f] <= nums[s]) {
      count = 1
    }else {
      count++
    }
    max = Math.max(max, count)
    s = f++;
  }
  return max
}