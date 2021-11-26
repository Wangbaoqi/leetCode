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

  let len = nums.length;

  let s = 0, f = 0;

  while(f < len) {
    if(nums[f] != val) {
      let tmp = nums[f];
      nums[f] = nums[s];
      nums[s] = tmp;
      s++
    }
    f++
  }
  return s
};
// @lc code=end



// solution 2

var removeElement = function(nums, val) {
  let s = 0;
  for (let f = 0; f < nums.length; f++) {
    if(nums[f] != val) {
      nums[s++] = nums[f];
    }    
  }
  return s
}