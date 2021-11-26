/*
 * @lc app=leetcode.cn id=845 lang=javascript
 *
 * [845] 数组中的最长山脉
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var longestMountain = function(arr) {

};
// @lc code=end

// solutions

// * 1. traverse mountain top

const longestMountain_top = arr => {

  let len = arr.length;
  let long = 0;
  let left = Array(len).fill(0);
  for (let i = 1; i < len; i++) {
    left[i] = arr[i] > arr[i - 1] ? left[i-1] + 1 : 0;
  }

  let right = Array(len).fill(0);
  for (let i = len - 2; i > 0; i--) {
    right[i] = arr[i] > arr[i + 1] ? right[i+1] + 1 : 0;    
  }

  for (let i = 0; i < len; i++) {
    if(left[i] > 0 && right[i] > 0) {
      long = Math.max(left[i] + right[i] + 1, long)
    }    
  }
  return long
}

// * 2. traverse mountain footer

const longestMountain_top = arr => {
  let len = arr.length;

  let l = 0;
  let long = 0
  while(l + 2 < len) {
    let r = l + 1;

    if(arr[l] < arr[l+1]) {
      
      while(r < len - 1 && arr[r] < arr[r+1]) {
        r++
      }
      if(r < len - 1 && arr[r] > arr[r+1]) {
        while(r < len - 1 && arr[r] > arr[r+1]) {
          r++
        }
        long = Math.max(r - l + 1, long)
      }
    }
    l = r
  }
  return long
}