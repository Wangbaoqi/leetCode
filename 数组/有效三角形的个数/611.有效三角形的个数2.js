/*
 * @lc app=leetcode.cn id=611 lang=javascript
 *
 * [611] 有效三角形的个数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function(nums) {

};
// @lc code=end



// solutions

// [2,2,3,4] 


const triangleNumber = nums => {

  nums.sort((a, b) => a - b)
  let ans = 0;

  for (let i = 0; i < nums.length; i++) {

    let s = i + 1;
    let f = s + 1;

    while(s < len) {
      while(f < len && nums[f] < nums[i] + nums[s]) {
        f++
      }
      ans += Math.max(f - s - 1, 0)
      s++
    }
  }
  return ans
}