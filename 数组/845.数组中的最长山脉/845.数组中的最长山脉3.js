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

  let left = Array(len).fill(0);

  let long = 0;

  for (let i = 1; i < len; i++) {
    left[i] = arr[i] > arr[i - 1] ? left[i - 1] + 1 : 0    
  }

  let right = Array(len).fill(0)
  for (let i = len - 2; i > 0; i--) {
    right[i] = arr[i] > arr[i + 1] ? right[i + 1] + 1 : 0 
  }

  for (let i = 0; i < len; i++) {
    if(left[i] > 0 && right[i] > 0) {
      long = Math.max(long, left[i] + right[i] + 1)
    }
  }

  return long;
}

// * 2. traverse mountain footer - double pointer

const longestMountain_footer = arr => {

  let len = arr.length;
  let left = 0;
  let long = 0;

  while(left + 2 < len) {
    let right = left + 1;
    if(arr[left] < arr[left + 1]) {
      while(right < len - 1 && arr[right] < arr[right + 1]) {
        right++
      }
      if(right < len - 1 && arr[right] > arr[right + 1]) {
        while(right < len - 1 && arr[right] > arr[right + 1]) {
          right++
        }
        long = Math.max(long, right - left + 1)
      }
    }
    left = right
  }
  return long
}