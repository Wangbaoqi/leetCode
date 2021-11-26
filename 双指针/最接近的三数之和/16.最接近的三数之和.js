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

// * 1. sort + double pointer

// [-4,-1,1,2] t = 1

const threeSumClosest_sort = (nums, target) => {

  nums.sort((a, b) => a - b);

  let len = nums.length;
  let last = 10000;

  for (let i = 0; i < nums.length; i++) {

    if(i > 0 && nums[i] == nums[i-1]) continue;

    let j = i + 1;
    let z = len - 1;

    while(j < z) {
      let sum = nums[i] + nums[j] + nums[z];
      
      if(sum == target) return target;

      if(Math.abs(sum - target) < Math.abs(last - target)) {
        last = sum
      }

      if(sum > target) {
        let z0 = z - 1;
        while(z0 < z && nums[z0] == nums[z]) {
          z0--
        }
        z = z0
      }else {
        let j0 = j + 1;
        while(j0 < z && nums[j0] == nums[j]) {
          j0++
        }
        j = j0
      }

    }
  }
  return last
}