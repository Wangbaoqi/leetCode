/*
 * @lc app=leetcode.cn id=40 lang=javascript
* [40] 组合总和 II
*/

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {

};
// @lc code=end



const combinationSum = (candidates, target) => {

  const ret = [], ans = [], used = [];
  const len = candidates.length;
  let sum = 0;

  candidates.sort((a, b) => a - b);

  const backTracking = (sum, target, i, used) => {
    
    if (sum === target) {
      ret.push([...ans]);
      return;
    }
    for (let j = i; j < len && sum + candidates[j] <= target; j++) {

      if (j > 0 && candidates[j] == candidates[j - 1] && !used[j - 1]) {
        continue;
      }
      ans.push(candidates[j]);
      used[j] = 1;
      backTracking(sum + candidates[j], target, j + 1, used);
      // 回溯操作
      used[j] = 0;
      ans.pop();
    }
  }
  backTracking(sum, target, 0, used);
  return ret;
}
// [3,1,3,5,1,1] 8
// [1,1,1,3,3,5] 8
// [1,1,3,3]

const res = combinationSum([3,1,3,5,1,1], 8)
console.log(res);