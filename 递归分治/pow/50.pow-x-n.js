/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {

};
// @lc code=end



// solutions 

// * 1. 递归的方式 

// 自顶向下
// 2^8 = 2^7 * 2 = 2^6 * 2 * 2 = ... == 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2

// 递推公式
// f(x,n) = f(x, n - 1) * x


//? 普通递归

const myPow_rec = (x, n) => {

  const pow = (x, n) => {

    if(n == 1) {
      return x
    }

    return x * pow(x, n - 1)
  }

  return n >= 0 ? pow(x, n) : 1.0 / pow(x, -n)
}

// ? 尾递归优化

const myPow_recP = (x, n) => {
  const pow = (x, n, r = 1) => {

    if(n == 1) {
      return x * r
    }

    return pow(x, n - 1, r * x)
  }

  
}

// 分析时间复杂度

// 每一次递归需要计算一次，总共需要递归`n`次
// 时间复杂度为O(n)
// 空间复杂度为O(n)

// 结果，调用栈空间不足，直接爆栈

// * 2. 递归快速幂

const myPow_q = (x, n) => {

  const pow = (x, n) => {
    if(n == 0) {
      return 1
    }
    const r = pow(x, ~~(n / 2))
    return n >= 0 ? r * r : r * r * x
  }

  return n >= 0 ? pow(x, n) : 1 / pow(x, -n)
}