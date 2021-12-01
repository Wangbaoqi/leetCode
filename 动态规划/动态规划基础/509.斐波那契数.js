/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib_d = function(n) {

};
// @lc code=end


// solutions

// * 1. 递归

const fib = n => {

  if(n == 0 || n == 1) return n;

  return fib(n - 1) + fib(n - 2)
}



// * 2. 递归 + memo(记忆集)


const fibMemo = n => {
  let map = new Map();

  const helper = n => {

    if(n == 0) return 0;

    if(n == 1) return 1;

    if(map.has(n)) {
      return map.get(n)
    }
    
    map.set(n, helper(n - 1) + helper(n - 2))

    return map.get(n)
  }
  return helper(n)
}



// * 3. 循环 + dp Table

const fibTable = n => {

  if(n == 0) return 0;

  let dp = Array(n+1);

  dp[0] = 0;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]    
  }

  return dp[n]
}


// test 
const mainTest = (n, fn) => {
  console.time('fib time')
  const res = fn(n);
  console.log(res, 'result');
  console.timeEnd('fib time')
}
mainTest(30, fib)
mainTest(30, fibMemo)
mainTest(30, fibTable)

