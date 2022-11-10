/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {

};
// @lc code=end



const permute_a = nums => {
  const ret = [], ans = [], used = [];

  const len = nums.length;
  let k = 0;

  const backTracking = (nums, used) => {

    // 当nums为空
    if (ans.length === len) {
      ret.push([...ans]);
      return
    }

    for (let j = 0; j < nums.length; j++) {
      
      if (used[j]) continue;
      used[j] = true;
      ans.push(nums[j]);
      backTracking(nums, used);
      ans.pop();
      used[j] = false;
    }
  }

  backTracking(nums, used)
  return ret
}

const test = [1,3] || [1, 2, 3];
const res = permute_a(test);
console.log(res);