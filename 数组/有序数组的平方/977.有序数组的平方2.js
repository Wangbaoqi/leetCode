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

// description

// 给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。

// 输入：nums = [-4,-1,0,3,10]
// 输出：[0,1,9,16,100]
// 解释：平方后，数组变为 [16,1,0,9,100]
// 排序后，数组变为 [0,1,9,16,100]

// solutions

// * 1. double pointer

const sortedSquares = nums => {

  let len = nums.length;

  let l = 0;
  let r = len - 1;
  let k = len - 1;

  let result = [];

  while(l < r) {
    let lv = nums[l] ** 2
    let rv = nums[r] ** 2

    if(lv < rv) {
      result[k--] = rv;
      r--
    }else {
      result[k--] = lv;
      l++
    }
  }
  return result;
}