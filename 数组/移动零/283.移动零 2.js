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
// solutions 2
var moveZeroes = function(nums) {
  let count = 0;
  let len = nums.length;

  let slow = 0;
  for (let i = 0; i < len; i++) {
    if(nums[i] == 0) {
      count++;
      continue;
    }
    nums[slow] = nums[i];
    slow++
  }

  while(slow < len) {
    nums[slow] = 0
  }
};

// solutions 2
var moveZeroes = function(nums) {
  let slow = 0, fast = 0;
  let len = nums.length;
  while(fast < len) {
    if(nums[fast] != 0) {
      let tmp = nums[fast]
      nums[fast] = nums[slow]
      nums[slow] = tmp
      slow++
    }
    fast++
  }
};
// @lc code=end


// solutions 

// 1. count 

// first traverse(遍历) nums, 
// when meet zero, fast point move one step, exchange slow point value to fast point value
// next fast and slow point move one step.
// or move fast point 

// until traverse over, position that slow point direct that is need fill zero 


// 2. double point 

// traverse one time nums,
// define slow point and fast point 
// when fast point meet zero, fast point next move 