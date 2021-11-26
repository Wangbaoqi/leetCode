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
  let all = 0;
  let left = Array(len).fill(0);
  for (let i = 1; i < len; i++) {
    left[i] = arr[i] > arr[i - 1] ? left[i - 1] + 1 : 0;    
  }

  let right = Array(len).fill(0);

  for (let i = len - 2; i > 0; i++) {
    right[i] = arr[i] > arr[i + 1] ? left[i + 1] + 1: 0    
  }

  for (let i = 0; i < len; i++) {
    if(left[i] > 0 == right[i]) {
      all = Math.max(all, left[i] + right[r] + 1)
    }    
  }
  return all
}


// * 2. double pointer 

const longestMountain_footer = arr => {
  let len = arr.length;

  let l = 0;
  let all = 0
  while(l + 2 < len) {
    let r = l + 1;
    if(arr[l] < arr[l+1]) {
      while(r < n - 1 && arr[r] < arr[r+1]) {
        r++
      }
      if(r < n -1 && arr[r] > arr[r+1]) {
        while(r < n - 1 && arr[r] > arr[r+1]) {
          r++
        }
        all = Math.max(all, r - l + 1)
      }else {
        r++
      }
    }else {
      l++
    }
    l = r
  }
  return all
}