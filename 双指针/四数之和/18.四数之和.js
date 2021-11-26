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


// [-1,0,-5,-2,-2,-4,0,1,-2]

// [-5,-4,-2,-2,-2,-1,0,0,1]

// -9

const fourSum = (nums, target) => {

  nums.sort((a,b) => a - b);
  let res = []

  for (let i = 0; i < nums.length; i++) {
    if(i > 0 && nums[i] == nums[i - 1]) continue;
    
    for (let j = i + 1; j < nums.length; j++) {
      if(j > i + 1 && nums[j] == nums[j - 1]) continue;
      
      let l = j + 1;
      let r = nums.length - 1;
      let t = (nums[i] + nums[j]);

      while(l < r) {
        let sum = nums[l] + nums[r] + t
        if(sum == target) {
          res.push([nums[i], nums[j], nums[l], nums[r]])
          while(l < r && (nums[l] == nums[l + 1])) l++;
          l++;
          while(l < r && (nums[r] == nums[r - 1])) r--;
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