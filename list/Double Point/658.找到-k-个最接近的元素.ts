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


// solutions


// * 1. remain + traverse

const findClosestElements = (arr, k, x) => {

  let len = arr.length;
  let result = [];
  let l = 0;
  let r = len - 1;
  let remain = len - k;

  while(remain > 0) {
    if(x - arr[l] > arr[r] - x) {
      l++
    }else {
      r--
    }
  }

  for (let i = l; i < l + k; i++) {
    result.push(arr[i])    
  }

  return result;
}


// * 2. binary search 

const findClosestElements_binary = (arr, k, x) => {

  let len = arr.length;
  let result = [];

  let l = 0;
  let r = len - k;

  while(l < r) {

    let mid = (l + r) >>> 1;

    if(x - arr[mid] <= arr[mid + k] - x) {
      r--
    }else {
      l++
    }
  }

  for (let i = l; i < l + k; i++) {
    result.push(arr[i])    
  }

  return result;
}