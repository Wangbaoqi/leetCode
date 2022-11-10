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

};
// @lc code=end


// solutions

// 1. traverse count 0 and fill 0 
// O(n) O(n)

const moveZeroes_count = (nums) => {

  let len = nums.length;
  let arr = [];
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if(nums[i] != 0) {
      arr.push(nums[i])
    }else {
      count++;
    }
  }

  for (let i = 0; i < count; i++) {
    arr.push(0)
  }
  return arr
}


// 2. count 0 on origin nums

const moveZeroes_count1 = (nums) => {

  let len = nums.length;

  let s = 0;
  let count = 0;

  for (let f = 0; f < nums.length; f++) {
    if(nums[f] == 0) {
      count++
      continue;
    }
    nums[s++] = nums[f];
  }
  while(s < len) {
    nums[s++] = 0
  }
}



// 2. double pointer

const moveZeroes_count = (nums) => {

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
}