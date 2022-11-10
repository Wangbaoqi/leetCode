/*
 * @lc app=leetcode.cn id=216 lang=javascript
 *
 * [216] 组合总和 III
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {

};
// @lc code=end


// [1,...,9]

const combinationSum = (k, n) => {

  const ret = [], ans = [];
  let sum = 0, cnt = 0;

  const backTracking = (sum, n, i, cnt) => {

    if (sum === n && cnt == k) {
      ret.push([...ans]);
      return;
    }

    for (let j = i; j <= 9; j++) {
      ans.push(j);
      cnt++;
      backTracking(sum + j, n, j + 1, cnt);
      cnt--;
      ans.pop()
    }

  }

  backTracking(sum, n, 1, cnt)
  return ret;
}

const res = combinationSum(1, 1)

console.log(res);