/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var twoSumLessThanK = function(nums, k) {

};



// 给你一个整数数组 nums 和整数 k ，返回最大和 sum ，满足存在 i < j 使得 nums[i] + nums[j] = sum 且 sum < k 。
// 如果没有满足此等式的 i,j 存在，则返回 -1 。


// 输入：nums = [34,23,1,24,75,33,54,8], k = 60
// 输出：58
// 解释：
// 34 和 24 相加得到 58，58 小于 60，满足题意。


// [1,2,3,4,5,6] k = 5


// solution

// * 1. double pointer

const twoSumLessThanK = (nums, k) => {

  nums.sort((a,b) => a - b)
  let len = nums.length;

  let l = 0;
  let r = len - 1;

  let max = -1;

  while(l < r) {
    let s = nums[l] + nums[r];
    if(s >= k) {
      r--
    }else {
      max = Math.max(max, s)
      l++
    }
  }
  return max
}