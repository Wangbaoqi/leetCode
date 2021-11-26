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

};
// @lc code=end


// solutions 

// * 1. violence methods O(n^2)

const twoSum_violence = (numbers, target) => {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if(numbers[i] + numbers[j] == target) {
        return [i+1, j+1]
      }
    }
  }
}


// * 2. double pointer

const twoSum_double = (numbers, target) => {
  let l = 0, r = numbers.length  - 1;

  while(l < r) {
    if(numbers[l] + numbers[r] == target) {
      return [l+1, r+1];
    }else if(numbers[l] + numbers[r] > target) {
      r--
    }else {
      l++
    }
  }
}