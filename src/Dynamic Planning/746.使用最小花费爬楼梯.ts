/*
 * @lc app=leetcode.cn id=746 lang=javascript
 *
 * [746] 使用最小花费爬楼梯
 */

// @lc code=start
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {

};
// @lc code=end





// [10,15,20]

// i = 0. c = 10       dp = [10]

// i = 1， c = 15 + 10 || 15 = 15  dp = [10, 15]

// i = 2, c = 10 + 15 + 20 || 15 + 20  || 10 + 20 = 30    dp = [10, 15, 30]




// dp = [25, 15] min = 10

// todo 确定dp数组

// dp[i] 记录走到当前台阶最少花费的价格

// dp[i] = min(dp[i - 1], dp[i - 2]]) + cost[i]

// todo 确认递推公式

// dp[i] = min(dp[i - 1], dp[i - 2]]) + cost[i]

// todo dp 数组初始化

// dp[0] = cost[0]
// dp[1] = cost[1]

// todo 确认遍历顺序

// i = 2 开始

// todo 举例推导

// [1,100, 1,1,1,100,1,1,100,1]

// dp = [1, 100]

// i = 2, dp[2] = min(1, 100) + 1 = 2;     dp = [1, 100, 2]
// i = 3, dp[3] = min(2, 100) + 1 = 3;     dp = [1, 100, 2, 3]
// i = 4. dp[4] = min(2, 3) + 1 = 3;       dp = [1, 100, 2, 3, 3]
// i = 5. dp[5] = min(3, 3) + 100 = 103;   dp = [1, 100, 2, 3, 3, 103]
// i = 6. dp[6] = min(3, 103) + 1 = 4;     dp = [1, 100, 2, 3, 3, 103, 4]
// i = 7. dp[7] = min(4, 103) + 1 = 5;     dp = [1, 100, 2, 3, 3, 103, 4, 5]
// i = 8. dp[8] = min(4, 5) + 100 = 104;   dp = [1, 100, 2, 3, 3, 103, 4, 5, 104]
// i = 9. dp[9] = min(104, 5) + 1 = 6;     dp = [1, 100, 2, 3, 3, 103, 4, 5, 104, 6]




const minCostClimbingStairs = cost => {

  const dp = [];
  const len = cost.length;
  dp[0] = cost[0];
  dp[1] = cost[1];

  for (let i = 2; i < cost.length; i++) {
    dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i];
  }

  return Math.min(dp[len-1], dp[len-2])
}


const minCostClimbingStairs_a = cost => {

  let pre = cost[0];
  let next = cost[1];

  for (let i = 2; i < cost.length; i++) {
    const min = Math.min(pre, next) + cost[i];
    pre = next;
    next = min
  }

  return pre > next ? next : pre
}