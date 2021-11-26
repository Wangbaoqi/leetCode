/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {

};
// @lc code=end


// solutions


// * 1. sort + double 

// [-4, -1, 1, 2]

const threeSumClosest_double = (nums, target) => {

  nums.sort((a, b) => a - b);

  let len = nums.length;

  let last = 10000;

  for (let i = 0; i < nums.length; i++) {
    if(i > 0 && nums[i] == nums[i-1]) continue;
    
    let l = i + 1;
    let r = len - 1;

    while(l < r) {
      let sum = nums[i] + nums[l] + nums[r];

      if(sum == target) {
        return target
      }

      if(Math.abs(sum - target) < Math.abs(last - target)) {
        last = sum
      }

      if(sum > target) {
        // need to judge repeat
        r--
      }else {
        // need to judge repeat
        l++
      }
    }
  }
  return last
}