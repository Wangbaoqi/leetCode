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



// 递归

// 2^6 = 2 * 2^5 = 2 * 2 * 2 * 2 * 2 * 2

// f(x,n) = f(x, n - 1) * x

// n == 1 return 1;

const myPow1 = (x, n) => {

  const pow = (x, n) => {
    if(n == 0) return 1;
    if(n == 1) return x;

    return myPow(x, n - 1) * x
  }

  return n >= 0 ? myPow(x, n) : 1 / myPow(x, -n)
}



const myPow2 = (x, n) => {

  let s = 0;
  let pow;
  try {
    pow = (x, n, r = 1) => {
      if(n == 0) return r;
      if(n == 1) return x * r;
      return pow(x, n - 1, r * x)
    }
  } catch (error) {
    console.log(s, error);
  }

  return n >= 0 ? pow(x, n) : 1 / pow(x, -n)
}


const myPow12 = (x, n) => {

  const pow = (x, n) => {

    let ans = 1;
    let prev = x;

    while(n > 0) {
      if(n == 1) {
        ans = prev
      }
      prev *= x
      // ans = prev
      n -= 1
    }
    return ans
  }

  return n >= 0 ? pow(x, n) : 1 / pow(x, -n)
}

// 快速幂

// 2^6 = 2 ^ 3 * 2 ^ 3
// 2^6 = 2 ^ 3 * 2 * 2 ^ 2

// 2^6 = 2^3 * 2 * 2 * 2 

// f(x,n) = f(x, n/2) * f(x, n/2)

const myPow3 = (x, n) => {

  const pow = (x, n) => {
    if(n == 0) return 1;
    const r = pow(x, ~~(n/2))
    return n % 2 == 0 ? r * r : r * r * n;
  }

  return n >= 0 ? pow(x, n) : 1 / pow(x, -n);
}


const myPow4 = (x, n) => {

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
  return n >= 0 ? pow(x, n) : 1 / pow(x, -n);
}


let x = 0.00001, n = 2147483647;

// let x = 2, n = 100000;
let r = myPow12(x, n)

console.log(r, 'result');