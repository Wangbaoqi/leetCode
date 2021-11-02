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

};
// @lc code=end


// solutions

// 1. double pointer

const maxArea_double = height => {

  let l = 0, r = height.length - 1;
  let max = 0;

  while(l < r) {
    let area = Math.min(height[l], height[r]) * (r - l);
    max = Math.max(max, area);
    if(height[l] <= height[r]) {
      l++
    }else {
      r--
    }
  }
}