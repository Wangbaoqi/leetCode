/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let l = 0, r = height.length - 1;

  let area = 0;

  while(l < r) {
    let ae = Math.min(height[l], height[r]) * (r - l);
    area = Math.max(area, ae);
    if(height[l] <= height[r]) {
      l++
    }else {
      r--
    }
  }
  return area
};
// @lc code=end



// solutions

// 1. violence methods

// 2. double pointer