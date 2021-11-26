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


// 1. double pointer o(n)

var maxArea = (height) => {

  let l = 0, r = height.length - 1;
  let area = 0;

  while(l < r) {
    let tmpArea = Math.min(height[l], height[r]) * (r - l);
    area = Math.max(area, tmpArea);
    if(height[l] <= height[r]) {
      l++
    }else {
      r--
    }
  }
}
