/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let len = numbers.length;
  
  let l = 0, r = len - 1;

  while(l < r) {
    let sum = numbers[l] + numbers[r];
    if(sum < target) {
      l++;
    }else if(sum > target) {
      r--;
    }else {
      return [l+1, r+1]
    }
  }


};
// @lc code=end




// solutions

// 1. violence method O(n^2)


// 2. double point O(n)

