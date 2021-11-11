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


// * 1. sort + double pointer

// [-4, -1, -1, 0, 1, 2]

const threeSum = nums => {

  nums.sort((a, b) => a - b);

  let res = []

  for (let i = 0; i < nums.length; i++) {
    
    if(i > 0 && nums[i] == nums[i - 1]) continue;

    let j = i + 1;
    let z = nums.length - 1;

    while(j < z) {
      let sum = nums[i] + nums[j] + nums[z];

      if(sum == 0) {
        res.push([nums[i], nums[j], nums[z]])
        j++;
        z--;
        while(j < z && nums[j] == nums[j - 1]) j++;
        while(j < z && nums[z] == nums[z - 1]) z--;
      }else if(sum > 0){
        j++
      }else {
        z--
      }
    }
  }
  return res
}