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

// * 1. sort api then get k element

const findKthLargest_sort = (nums, k) => {
  nums.sort((a, b) => b - a)
  return nums[k-1]
}

// * 2. select sort O(n^2)

const findKthLargest_selectSort = (nums, k) => {

  let res = 0;

  for (let i = 0; i < nums.length; i++) {
    const max = i;
    
    for (let j = i + 1; j < nums.length; j++) {
      if(if(nums[max] < nums[j])) max = j
    }

    let tmp = nums[i];
    nums[i] = nums[max];
    nums[max] = tmp;

    if(i == k - 1) {
      return nums[i]
    }
  }
}

// * 3. quick sort 