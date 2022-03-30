/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {

};
// @lc code=end


// [-2,1,-3,4,-1,2,1,-5,4]

// dp[0] = -2
// dp[1] = -2 + 1 = -1
// dp[2] = -1 + -3



- 确定dp数组

// dp[i] 记录 i 之前最大的子序列和


- 确定递推公式

// dp[0] = -2
// dp[1] = max(dp[i-1] + nums[i], nums[i])

- 初始化dp

// dp[0] = nums[0]

- 遍历顺序

// 从 i = 1 开始

- 距离推导


const maxSubArray = nums => {

  const dp = [];
  dp[0] = nums[0];
  let res = nums[0];

  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(nums[i] + dp[i - 1], nums[i]);
    res = Math.max(dp[i], res)
  }

  return res;
}

// [-2,1,-3,4,-1,2,1,-5,4]
// sum -2 [1] []

const maxSubArray_a = nums => {

  let sum = nums[0];
  let res = nums[0];

  for (let i = 1; i < nums.length; i++) {
    sum = Math.max(sum + nums[i], nums[i]);
    res = Math.max(res, sum)
  }
  return res;
}