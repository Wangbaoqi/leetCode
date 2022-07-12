/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {

};
// @lc code=end


// solutions

// * 1. merge two array then find mid value

// time O(m+n)
// space O(m+n)

const findMedianSortedArrays_merge = (nums1, nums2) => {

  let len1 = nums1.length, len2 = nums2.length;

  let nums = Array(len2+len1)

  if(len1 == 0) {
    if(len2 % 2 == 0) {
      return (nums2[len2 / 2 - 1] + nums2[len2 / 2]) / 2
    }else {
      return nums2[~~(len2 / 2)]
    }
  }

  if(len2 == 0) {
    if(len1 % 2 == 0) {
      return (nums1[len1 / 2 - 1] + nums1[len1 / 2]) / 2
    }else {
      return nums1[~~(len1 / 2)]
    }
  }

  let k = 0;
  let i = 0, j = 0;
  while(k != len2 + len1) {

    if(i == len1) {
      while(j < len2) {
        nums[k++] = nums2[j++]
      }
      break
    }

    if(j == len2) {
      while(i < len1) {
        nums[k++] = nums1[i++]
      }
      break
    }

    if(nums1[i] < nums2[j]) {
      nums[k++] = nums1[i++]
    }else {
      nums[k++] = nums2[j++]
    }
  }

  if(k % 2 == 0) {
    return (nums[k / 2 - 1] + nums[k / 2]) / 2
  }else {
    return nums[~~(k / 2)]
  }
}