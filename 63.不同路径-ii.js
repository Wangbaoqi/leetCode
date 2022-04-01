/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles_d = function(obstacleGrid) {

};
// @lc code=end



// # check

// # case1
// [0, 0, 0]
// [0, 1, 0] 
// [0, 0, 0]

// dp

// [1, 1, 1]
// [1, 0, 1]
// [1, 1, 2]

// # case2
// [0, 1, 0]
// [0, 0, 0]
// [0, 0, 0]

// # dp
// [0, 0, 0]
// [1, 1, 1]
// [1, 2, 3]


// # case2
// [0, 1, 0]
// [0, 0, 1]
// [0, 0, 0]

// #dp

// [1, 0, 0]
// [1, 1, 0]



const uniquePathsWithObstacles = obstacleGrid => {

  const dp = [...obstacleGrid];

  const m = dp[0].length;
  const n = dp.length;


  for (let i = 0; i < m; i++) {
    if (dp[0][i] == 1) {
      dp[0][i] = 0;
      break
    }
    dp[0][i] = 1
  }

  for (let i = 0; i < n; i++) {
    if (dp[i][0] == 1 && i != 0) {
      dp[i][0] = 0;
      break
    }
    dp[i][0] = 1
  }

  console.log(dp);


  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (dp[i][j] == 1) {
        dp[i][j] = 0;
        continue;
      }
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  console.log(dp);

  return dp[m - 1][n - 1];

}


const test = [[1]]

uniquePathsWithObstacles(test)