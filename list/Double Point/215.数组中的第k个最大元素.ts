/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {

};
// @lc code=end


// solutions

// * 1. sort & get

// * 2. select sort

const findKthLargest = (nums, k) => {
  
  for (let i = 0; i < nums.length; i++) {
    let max = i;

    for (let j = i + 1; j < nums.length; j++) {
      if(nums[j] > nums[max]) max = j;
    }

    let tmp = nums[i];
    nums[i] = nums[max];
    nums[max] = tmp;

    if(i - 1 == k) return nums[i]
  }
}