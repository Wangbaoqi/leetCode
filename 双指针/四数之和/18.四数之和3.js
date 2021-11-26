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

// * 1. double pointer + sort 

const fourSum_double = (nums, target) => {
  nums.sort((a,b) => a - b)

  let res = [];

  for (let i = 0; i < nums.length; i++) {
    
    if(i > 0 && nums[i] == nums[i - 1]) continue;

    for (let j = i + 1; j < nums.length; j++) {
      
      if(j > i + 1 && nums[j] == nums[j - 1]) continue;

      let l = j + 1;
      let r = nums.length - 1;

      while(l < r) {
        let all = nums[i] + nums[j] + nums[l] + nums[r];

        if(all == target) {
          res.push([nums[i], nums[j], nums[l], nums[r]])

          while(l < r && nums[l] == nums[l+1]) l++;
          l++;

          while(l < r && nums[r] == nums[r-1]) r--;
          r--
        }else if(all < target) {
          l++
        }else {
          r--
        }
      }
    }
  }
  return res
}