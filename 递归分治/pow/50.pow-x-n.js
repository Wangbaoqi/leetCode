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

// 分析复杂度

// 每一次递归需要计算一次，总共需要递归`n`次
// 时间复杂度为O(n)
// 空间复杂度为O(n)

// 结果，调用栈空间不足，直接爆栈

// * 2. 递归快速幂

// 2^6 = 2^3 * 2^3

// 将原问题划分为 子问题之间相乘
// 例如 2^6 , 只要计算出 2^3 的值，则将两个子问题的结果相乘，得到最终值
// 这样将时间复杂度瞬间降低了

const myPow_q = (x, n) => {

  const pow = (x, n) => {
    if(n == 0) {
      return 1
    }
    const r = pow(x, ~~(n / 2))
    console.log(r, 'res');
    return n % 2 == 0 ? r * r : r * r * x
  }

  return n >= 0 ? pow(x, n) : 1 / pow(x, -n)
}

// 分析复杂度

// 时间O(logn)
// 空间O(logn)


// * 3. 循环快速幂

const myPow_r = (x, n) => {

  const pow = (x, n) => {
    let ans = 1;
    let prev = x;
    while(n > 0) {
      if(n % 2 == 1) {
        ans *= prev
      }
      prev *= prev
      n = ~~(n / 2)
    }
    return ans
  }
  return n >= 0 ? pow(x, n) : 1 / pow(x, -n)
}

// 分析复杂度

// 时间O(logn)
// 空间O(1)


// ?? test case

const val = myPow_q(2, 4)
console.log(val);