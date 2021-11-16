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

// * 1. remaining double pointer

// $ time complexity O(n)
// $ space complexity O(1)

const findClosestElements_double = (arr, k, x) => {

  let res = [];

  let l = 0;
  let r = arr.length - 1;

  let leftLen = arr.length - k;

  while(leftLen > 0) {

    if(Math.abs(arr[l] - x) > Math.abs(arr[r] - x)) {
      l++
    }else {
      r--
    }
    leftLen--
  }

  for (let i = l; i < l + k; i++) {
    res.push(arr[i])    
  }
  return res
}

// * 2. binary search left 

const findClosestElements_binary = (arr, k, x) => {

  let res = [];
  let l = 0;
  let r = arr,length - k;

  while(l < r) {
    let m = (l + r) >>> 1;

    if(x - arr[m] <= arr[m+k] - x) {
      r = mid;
    }else {
      l = mid + 1
    }
  }
  
  for (let i = l; i < l + k; i++) {
    res.push(arr[i])    
  }
  return res

}