/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {

};
// @lc code=end



// 求所有的子问题且不能重复
const subsets_a = nums => {

  const ret = [], ans = [];

  const backTracking = (nums, i) => {
    ret.push([...ans]);
    // 剩余子元素为空 反过来就是 i >= nums.length
    if (i >= nums.length) {
      return;
    }

    for (let j = i; j < nums.length; j++) {
      ans.push(nums[j]);
      backTracking(nums, j + 1);
      ans.pop()
    }
  }

  backTracking(nums, 0)
  return ret
}

const test = [1, 2, 3];
const res = subsets_a(test);
console.log(res);