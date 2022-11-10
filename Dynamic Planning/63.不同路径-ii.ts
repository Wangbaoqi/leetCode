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

  const m = obstacleGrid[0].length;
  const n = obstacleGrid.length;

  const dp = new Array(n).fill(0).map(() => {
    return new Array(m).fill(0)
  });

  for (let i = 0; i < m && obstacleGrid[0][i] == 0; i++) {
    dp[0][i] = 1
  }


  for (let i = 0; i < n && obstacleGrid[i][0] == 0; i++) {
    dp[i][0] = 1
  }



  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      if (obstacleGrid[i][j] == 1) {
        // dp[i][j] = 0;
        continue;
      }
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  console.log(dp)


  return dp[n - 1][m - 1];

}


const test = [[1]]

uniquePathsWithObstacles(test)