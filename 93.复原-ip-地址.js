/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原 IP 地址
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {

};
// @lc code=end


const restoreIpAddresses_b = s => {

  const ret = [];
  let pointNum = 0;
  s = s.split('');

  const isValid = (str, s, e) => {
    if (s > e) {
      return false;
    }
    if (str[s] == 0 && s != e) {
      return false;
    }
    let num = 0;
    for (let i = s; i <= e; i++) {
      if (str[i] > '9' || str[i] < '0') return false;
      num = num * 10 + (str[i] - '0')
      console.log(num, 'num');
      if (num > 255) {
        return false;
      }
    }
    return true;
  }

  const backTracking = (s, i, pointNum) => {

    if (pointNum == 3) {
      if (isValid(s, i, s.length - 1)) {
        ret.push(s.join(''))
      }
      return
    }

    for (let j = i; j < s.length; j++) {
      if (isValid(s, i, j)) {
        s.splice(j+1, 0, '.')
        backTracking(s, j + 2, pointNum + 1)
        s.splice(j+1, 1)
      } else {
        break;
      }
    }
  }
  backTracking(s, 0, pointNum)
  return ret
}


// 切割的问题
// 1. 递归函数的参数
// 2. 递归结束的条件
// 3. 单层搜索的过程

const restoreIpAddresses_a = s => {

  s = s.split('');

  const ret = [];
  let pointNum = 0;


  const isValid = (str, s, e) => {
    if (s > e) {
      return false
    }
    // 不能有前导 0 
    if (str[s] == 0 && s != e) {
      return false;      
    }

    let num = 0;
    for (let i = s; i <= e; i++) {
      num = num * 10 + (str[i] - '0');
      if (num > 255) {
        return false
      }
    }
    return true;
  }

  const backTracking = (s, i, pointNum) => {

    // 递归结束的条件
    if (pointNum === 3) {
      if (isValid(s, i, s.length - 1)) {
        ret.push(s.join(''))
      }
      return;
    }
    // 单层函数搜索的过程
    for (let j = i; j < s.length; j++) {
      if (isValid(s, i, j)) {
        s.splice(j + 1, 0, '.');
        backTracking(s, j + 2, pointNum + 1);
        s.splice(j + 1, 1);
      } else {
        break;
      }
    }
  }

  backTracking(s, 0, pointNum);
  return ret
}


const str = '101023' || '0000' || '25525511135'
const res = restoreIpAddresses_a(str)

console.log(res);