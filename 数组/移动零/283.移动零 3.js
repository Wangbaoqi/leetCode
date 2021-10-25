/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let len = nums.length;
  let s = 0, f = 0;
  while(f < len) {
    if(nums[f] != 0) {
      let tmp = nums[f];
      nums[f] = nums[s];
      nums[s] = tmp;
      s++
    }
    f++
  }
};
// @lc code=end


// 移动补充0
var moveZeroes = function(nums) {
  let s = 0;
  for (let f = 0; f < nums.length; f++) {

    if(nums[f] != 0) {
      if(s < f) {
        nums[s] = nums[f];
        nums[f] = 0
      }
      s++
    }
  }
}