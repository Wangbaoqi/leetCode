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
  const len = s.length;
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

const str = '101023' || '0000' || '25525511135'
const res = restoreIpAddresses_b(str)

console.log(res);