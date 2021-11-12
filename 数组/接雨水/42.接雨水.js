/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {

};
// @lc code=end


// solutions 


// * 1. double pointer - two-way pointer

const trap_double = height => {

  let l = 0, lm = 0;
  let r = height.length - 1, rm = 0;

  let res = 0;

  while(l < r) {
    lm = Math.max(lm, height[l]);
    rm = Math.max(rm, height[r]);

    if(height[l] < height[r]) {
      res += lm - height[l]
      l++
    }else {
      res += rm - height[r]
      r--
    }
  }
  return res
}