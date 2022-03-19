/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {

};
// @lc code=end

const permuteUnique_a = nums => {

  const ret = [], ans = [], used = [];

  nums.sort((a, b) => a - b);

  const backTracking = () => {

    if (ans.length == nums.length) {
      ret.push([...ans]);
      return;
    }

    for (let j = 0; j < nums.length; j++) {

      if (j > 0 && nums[j - 1] == nums[j] && !used[j - 1]) {
        continue
      }

      if (!used[j]) {
        ans.push(nums[j]);
        used[j] = true;
        backTracking(nums, used);
        ans.pop();
        used[j] = false;
      }
    }
  }
  backTracking(nums, used)
  return ret;
}

const test = [1, 1, 3];
const res = permuteUnique_a(test);
console.log(res);