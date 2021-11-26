/*
 * @lc app=leetcode.cn id=977 lang=javascript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {

};
// @lc code=end


// solutions 


// * 1. traverse one time and sort 

const sortedSquares = nums => {

  let arr = []

  for (let i = 0; i < nums.length; i++) {
    arr.push(nums[i] ** 2)
  }

  arr.sort((a, b) => a - b)

  return arr
}


// * 2. double pointer

const sortedSquares_double = nums => {

  let l = 0, r = nums.length - 1, k = nums.length - 1;

  let ans = Array(nums.length);

  while(l <= r) {
    let lv = nums[l] ** 2
    let rv = nums[r] ** 2

    if(lv < rv) {
      // ans.unshift(rv)
      ans[k--] = rv
      r--
    }else {
      ans[k--] = lv
      // ans.unshift(lv)
      l++
    }
  }
  return ans
}