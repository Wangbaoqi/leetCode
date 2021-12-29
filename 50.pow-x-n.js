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
