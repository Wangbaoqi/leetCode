/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {

};
// @lc code=end


const merge_double = (nums1, m, nums2, n) => {

  let i = 0, j = 0;
  let sorted = Array(m + n).fill('');
  let cur;

  while (i < m || j < n) {
    if (i == m) {
      cur = nums2[j++];
    } else if (j == n) {
      cur = nums1[i++];
    } else if (nums1[i] < nums2[j]) {
      cur = nums1[i++]
    } else {
      cur = nums2[j++]
    }
    sorted[i + j - 1] = cur;
  }

  for (let z = 0; z < sorted.length; z++) {
    nums1[z] = sorted[z]    
  }
}


const merge_double_last = (nums1, m, nums2, n) => {

  let i = m - 1, j = n - 1;
  let last = m + n - 1;
  let cur;

  while (i >= 0 || j >= 0) {
    if (i == -1) {
      cur = nums2[j--]
    } else if (j == -1) {
      cur = nums1[i--]
    } else if (nums1[i] > nums2[j]) {
      cur = nums1[i--]
    } else {
      cur = nums2[j--]
    }
    nums1[last--] = cur;
  }
}