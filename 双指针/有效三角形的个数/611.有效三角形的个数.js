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

// * 1. double pointer - fast slow


const triangleNumber = nums => {
  let len = nums.length;
  nums.sort((a, b) => a -b)
  let ans = 0

  for(let i = 0; i< nums.length; i++) {

    let s = i + 1;
    let f = s + 1;
    while(s < len) {
      
      while(f < len && nums[f] < nums[i] + nums[s]) {
        f++
      }
      // if len == 3 , then f - s - 1 < 0
      ans += Math.max(f - s - 1, 0)

      s++
    }
  }

  return ans
}