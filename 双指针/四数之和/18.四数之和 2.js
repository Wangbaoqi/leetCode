/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {

};
// @lc code=end


// solutions 

// * 1. sort + double pointer

const fourSum = (nums, target) => {

  nums.sort((a, b) => a - b)

  let res = []

  for (let i = 0; i < nums.length; i++) {
    if(i > 0 && nums[i - 1] == nums[i]) continue;
    
    for (let j = i + 1; j < nums.length; j++) {
      
      if(j > i + 1 && nums[j] == nums[j - 1]) continue;

      let l = j + 1;
      let r = nums.length - 1;

      while(l < r) {
        let sum = nums[i] + nums[j] + nums[l] + nums[r]
        if(sum == target) {
          res.push([nums[i], nums[j], nums[l], nums[r]])
          while(l < r && nums[l] == nums[l + 1]) l++;
          l++;
          while(l < r && nums[r] == nums[r - 1]) r--;
          r--;
        }else if(sum < target) {
          l++
        }else {
          r--
        }
      }
    }
  }
  return res
}