/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {

};
// @lc code=end


// solutions

// * 1. violence 

// [-4,-1,-1,0,1,2]

const threeSum_violence = nums => {
  let res = []
  nums.sort((a,b) => a - b);
  let len = nums.length;
  for (let i = 0; i < nums.length; i++) {
    
    if(i > 0 && nums[i] == nums[i - 1]) continue;

    let z = len - 1;
    let t = -nums[i];

    for (let j = i + 1; j < nums.length; j++) {
      if(j > i + 1 && nums[j] == nums[j-1]) continue;

      while(j < z && nums[j] + nums[z] > t) {
        z--
      }

      if(j == z) break;

      if(nums[j] + nums[z] == t) {
        res.push([nums[i], nums[j], nums[z]])
      }
      
    }
  }
  return res
}