/*
 * @lc app=leetcode.cn id=977 lang=javascript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {

};
// @lc code=end


// solutions

// * 1. double pointer

const sortedSquares = nums => {
  let len = nums.length;
  let l = 0, r = len - 1, k = len - 1;
  let result = Array(len)
  while(l <= r) {
    let lv = nums[l] ** 2
    let rv = nums[r] ** 2
    if(lv < rv) {
      result[k--] = rv;
      r--
    }else {
      result[k--] = lv;
      l++
    }
  }
  return result;
}