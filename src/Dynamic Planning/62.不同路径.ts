/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {

};
// @lc code=end


// # case 1
// [ O. O. O ]
// [ O, O, O ]

// [ 0, 1, 1 ]
// [ 1, 2, 3 ]

// # case 1
// [ O. O. O ]
// [ O, O, O ]
// [ O, O, O ]

// [ 0, 1, 1 ]
// [ 1, 2, 3 ]
// [ 1, 3, 6 ]

// i = 0, j = 0

// i = 1, j = 0, dp = [[0, 1]]
// i = 2, j = 0, dp = [[0, 1, 1]]

// i = 0, j = 1, dp = [[0, 1], [0]]



// todo 确定DP数组的含义

// 从[0,0]到[m-1, n-1]路径有dp[i][j]种

// todo dp递推公式

// dp[i][j] = dp[i-1][j] + dp[i][j-1]


// todo 初始化DP数组

// [[0, 1, 1, ... m-1], [1], [1], [1], ...[1]]

// todo 遍历顺序

// i = 1, j = 1开始，从做到右遍历即可

// todo 举例推导


// [ O. O. O，O. O. O，0 ]
// [ O. O. O，O. O. O，0 ]
// [ O. O. O，O. O. O，0 ]


// dp

// [1, 1, 1, 1, 1, 1, 1]
// [1, 2, 3, 4, 5, 6, 7]
// [1, 3, 6, 10, 15, 21, 28]


const uniquePaths = (m, n) => {

  const dp = Array(m).fill(0).map(() => Array(n).fill(0))

  for (let i = 0; i < n; i++) {
    dp[0][i] = 1
  }

  for (let i = 0; i < m; i++) {
    dp[i][0] = 1
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  console.log(dp[m - 1][n - 1]);
  
  return dp[m-1][n-1]

}

