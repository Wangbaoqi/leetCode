/*
 * @lc app=leetcode.cn id=658 lang=javascript
 *
 * [658] 找到 K 个最接近的元素
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {

};
// @lc code=end


// ideas

// arr[l] - x and arr[r] - x


// solutions

// * 1. double pointer + remain

const findClosestElements_double = (arr, k, x) => {

  let res = [];

  let l = 0;
  let r = arr.length - 1;

  let remain = arr.length - k

  while(remain > 0) {
    
    if(x - arr[l] <= arr[r] - x) {
      r--
    }else {
      l++
    }
    remain--
  }

  for (let i = l; i < l+k; i++) {
    res.push(arr[l])    
  }

  return res
} 