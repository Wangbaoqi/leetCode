/*
 * @lc app=leetcode.cn id=343 lang=javascript
 *
 * [343] 整数拆分
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {

};
// @lc code=end


// # case

// n = 5
// n = 4 + 1, g = 4 * 1
// n = 


// dp = []

// todo 


const integerBreak = n => {

  const dp = new Array(n + 1).fill(0);

  dp[2] = 1;

  for (let i = 3; i <= n; i++) {
    for (let j = 1; j < i - 1; j++) {

      const curv = (i - j) * j;
      const prev = dp[i - j] * j;

      dp[i] = Math.max(dp[i], Math.max(curv, prev))
    }
  }
  return dp[n]
}

