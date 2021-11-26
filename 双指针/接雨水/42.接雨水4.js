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

// * 1. double pointer

const trap = height => {

  let l = 0, r = height.length - 1;
  let lv = 0, rv = 0;

  let all = 0

  while(l < r) {
    lv = Math.max(lv, height[l]);
    rv = Math.max(rv, height[r]);

    if(height[l] < height[r]) {
      all += lv - height[l]
      l++
    }else {
      all += rv - height[r]
      r--
    }
  }

  return all
}