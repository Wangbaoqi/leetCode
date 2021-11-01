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


// * test case 

// * 1. [1,3,5,4,2,3,4,5]

// solutions

// 1. double pointer 贪心

const findLengthOfLCIS_double = (nums) => {
  let len = nums.length;
  if(len < 2) return len;
  let s = 0, f = 1;
  let max = 1;
  let count = 1;
  while(f < len) {
    if(nums[f] <= nums[s]) {
      count = 1;
    }else {
      max = Math.max(max, ++count)
    }
    s = f++
  }
  return max
}