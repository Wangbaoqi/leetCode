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

// * 1. sort + double pointer(fast slow)

const threeSum_double = nums => {

  nums.sort((a, b) => a - b);

  let len = nums.length;
  let res = [];

  for (let i = 0; i < nums.length; i++) {
    
    if(i > 0 && nums[i] == nums[i - 1]) continue;

    let j = i + 1;
    let z = len - 1;

    while(j < z) {

      if(j > i + 1 && nums[j] == nums[j-1]) {
        j++;
        continue;
      }

      while(j < z && nums[i] + nums[j] + nums[z] > 0) {
        z--
      }

      if(j == z) break;

      if(nums[i] + nums[j] + nums[z] == 0) {
        res.push([nums[i], nums[j], nums[z]])
      }

      j++
    }
  }
  return res
}


// [-4, -1,-1, 0, 1,2]

// * 2. sort + double pointer (left right)

const threeSum_double1 = nums => {

  nums.sort((a, b) => a - b);

  let len = nums.length;

  let res = [];

  for (let i = 0; i < nums.length; i++) {
    
    if(i > 0 && nums[i] == nums[i-1]) continue;

    let j = i + 1;
    let z = len - 1;
    let t = -nums[i];

    while(j < z) {

      if(nums[j] + nums[z] == t) {
        res.push([nums[i], nums[j], nums[z]])
        j++;
        z--;
        while(j < z && nums[j] == nums[j-1]) j++; 
        while(j < z && nums[z] == nums[z-1]) z--; 

      }else if(nums[j] + nums[z] > t) {
        z--
      }else {
        j++
      }
    }
  }
  return res
}