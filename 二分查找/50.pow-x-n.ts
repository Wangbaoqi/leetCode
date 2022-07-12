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


// 2 ^ 9 

// 2^9 


const myPow = (x, n) => {

  const pow = (x, n) => {
    if(x == 0) return 1;
    if(x == 1) return x;

    return x * pow(x, n - 1)
  }

  return n >= 0 ? pow(x,n) : 1 / pow(x, -n)
}


const myPow1 = (x: number, n: number): number => {

  const pow = (x: number, n: number) => {

    let ans = 1;

    let res = x;

    while (n > 0) {
      
      if (n % 2 == 1) {
        ans *= res
      }

      res *= res;

      n = ~~(n / 2)
    }
    return ans
  }

  return n >= 0 ? pow(x, n) : 1 / pow(x, -n);
}

const myPow2 = (x: number, n: number): number => { 
  const pow = (x: number, n: number) => {
    if (n == 0) return 1;
    const r = pow(x, ~~(n / 2))
    return n % 2 == 0 ? r * r : r * r * x
  }

  return n >= 0 ? pow(x, n) : 1 / pow(x, -n);
}