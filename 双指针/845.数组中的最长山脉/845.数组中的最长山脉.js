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

// [2,1,4,7,3,2,5]

// left = [0,0,0,0,0,0,0]
// right = [0,0,0,0,0,0,0]

// left = [0, 0, 1, 2, 0, 0, 1]
// right = [1, 0, 0, 2, 1, 0, 0]

const longestMountain_tran = arr => {

  let len = arr.length;

  if(len == 0) return 0;

  let left = Array(len).fill(0);
  for (let i = 1; i < len; i++) {
    left[i] = arr[i - 1] < arr[i] ? left[i - 1] + 1 : 0
  }

  let right = Array(len).fill(0);
  for (let j = len - 2; j >= 0; j++) {
    right[j] = arr[j + 1] < arr[j] ? right[j + 1] + 1 : 0;
  }

  let long = 0

  for (let i = 0; i < len; i++) {
    if(left[i] > 0 && right[i] > 0) {
      long = Math.max(long, left[i] + right[i] + 1)
    }    
  }
  return long;
}


// * 2. traverse mountain footer - double pointer

// [2,1,4,7,3,2,5]


const longestMountain_double = arr => {

  let len = arr.length;

  let long = 0;

  let l = 0;

  while(l + 2 < len) {
    let r = l + 1;
    if(arr[l] < arr[l + 1]) {

      while(r < n - 1 && arr[r] < arr[r + 1]) {
        r++
      }
      if(r < n - 1 && arr[r] > arr[r + 1]) {
        while(r < n - 1 && arr[r] > arr[r + 1]) {
          r++
        }
        long = Math.max(long, r - l + 1)
      }else {
        // arr[r] == arr[r + 1]
        r++
      }
    }
    l = r;
  }
  return long;
}