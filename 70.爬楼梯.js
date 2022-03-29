/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs_a = function(n) {

};
// @lc code=end


// f(1) = 1

// f(2) = 1 + 1; 
// f(2) = 2;

// f(3) = 1 + 1 + 1; 
// f(3) = 1 + 2;
// f(3) = 2 + 1;

// f(4) = 1 + 1 + 1 + 1;
// f(4) = 1 + 1 + 2; 
// f(4) = 1 + 2 + 1; 
// f(4) = 2 + 1 + 1;
// f(4) = 2 + 2;







// todo 确定DP数组

// dp = [] dp[i] 为第几层有多少种方法
// dp[1] = 1, dp[2] = 2, dp[3] = 3, dp[4] = 5

// todo 确认递推公式

// dp[i] = dp[i - 2] + dp[i - 1]

// todo dp数组初始化

// dp[0, 1]

// todo 遍历顺序

// 从n = 2到n

// todo 举例推导


const climbStairs = n => {

  const dp = [0, 1, 2];

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  console.log(dp);

  return dp[n]
}

const climbStairs_1 = n => {

  if (n <= 2) return n;

  let p = 1;
  let q = 2;

  let r = 0;

  // 1, 2, [3], 

  for (let i = 3; i <= n; i++) {
    r = p + q;
    p = q;
    q = r;
  }

  return r;
}

const r = climbStairs(5)
const r1 = climbStairs_1(5)

console.log(r, r1);
