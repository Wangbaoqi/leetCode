/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {

};
// @lc code=end



const combinationSum1 = (candidates, target) => {

  const ret = [], ans = [];
  const len = candidates.length;

  const ansSum = ans => {
    return ans.reduce((p, c) => p + c, 0)
  }

  const backTracking = (len, target, i) => {

    const sum = ansSum(ans);
    // stop condition
    if (sum === target || sum > target) {
      (sum === target) && ret.push([...ans]);
      return
    }

    for (let j = i; j < len; j++) {
      ans.push(candidates[j]);
      backTracking(len, target, j);
      ans.pop()
    }
  }

  backTracking(len, target, 0);
  return ret;
}

const combinationSum2 = (candidates, target) => {

  const ret = [], ans = [];
  const len = candidates.length;

  /**
   * 递归函数
   * @param {*} s 计算和
   * @param {*} target 
   * @param {*} i 
   * @returns 
   */
  const backTracking = (s, target, i) => {
    
    // stop condition
    if (s === target || s > target) {
      (s === target) && ret.push([...ans]);
      return
    }

    for (let j = i; j < len; j++) {
      ans.push(candidates[j]);
      backTracking(s + candidates[j], target, j);
      ans.pop()
    }
  }

  backTracking(0, target, 0);
  return ret;
}

const res = combinationSum2([2,3,5], 8)

console.log(res);