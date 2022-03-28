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
var fib_demo = function(n) {
  

};
// @lc code=end


const fib = n => {

  if (n == 0) return 0;
  if (n == 1) return 1;

  return fib(n - 1) + fib(n - 2);
}

// fib(2) = fib(1) + fib(0) = 1 + 0 = 1;
// fib(3) = fib(2) + fib(1) = 1 + 1 = 2; 
// fib(3) = fib(3) + fib(1) = 2 + 1 = 3;


// todo 确定DP数组以及每个下标的含义

// dp[0] = 0;
// dp[1] = 1;
// dp[2] = dp[0] + dp[1] = 1;
// dp[3] = dp[2] + dp[1] = 2;
// dp[4] = dp[3] + dp[1] = 3;


// todo 确定递推公式

// fib(n) = fib(n-1) + fib(n-2)

// todo 初始化 dp数组

// n > 1 dp[n] = dp[n-1] + dp[n-2]

// todo 确定遍历顺序

// 从 n = 0开始

// todo 举例推导dp
 



const fib_a = n => {

  if (n === 1) return 1;
  if (n === 0) return 0;

  const dp = [0, 1];


  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  console.log(dp, 'dp');
  console.log(dp[n]);

  return dp[n]
}


const fib_b = n => {
  if (n === 1) return 1;
  if (n === 0) return 0;

  let prev = 0;
  let next = 1;

  let cur = 0;

  for (let i = 2; i <= n; i++) {
    cur = prev + next;
    prev = next;
    next = cur;
  }

  // console.log(cur);
  return cur
}

fib_b(2)
fib_b(3)
fib_b(4)
fib_b(5)
fib_b(6)
fib_b(20)
fib_b(30)



// b(2, 0) = 1
// b(2, 1) = 2
// b(2, 2) = 4
// b(2, 3) = 4 * 2
// b(2, 8) = 4 * 2 * b(2, 4)


// 2 * 2 * 2 * 2 * 2
// 2 ^ 5 = 2 ^ 2 * 2 ^ 2 * 2 = 2 ^ 5 / 2 * 2 * 2

// foo(x, n) = foo(x, n / 2) * foo(x, n / 2) * (n | 1)

const foo = (x, n) => {

  const bar = (x, n) => {
    if (n == 0) return 1;
  
    const m = bar(x, ~~(n / 2));

    return n % 2 == 1 ? m * m * x : m * m;
  }

  return n >= 0 ? bar(x, n) : 1 / bar(x, -n);
}

foo(2, 1)
foo(2, 2)
foo(2, 5)
const re = foo(2, 10)

console.log(re);