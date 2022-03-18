/*
 * @lc app=leetcode.cn id=491 lang=javascript
 *
 * [491] 递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {

};
// @lc code=end



const findSubsequences_a = nums => {
  const ret = [], ans = [];

  const backTracking = (nums, i) => {

    if (ans.length > 1) {
      ret.push([...ans])
      
    }
    // 在横向遍历的时候 遇到重复的则直接 continue 
    const set = new Set();
    const used = Array(200).fill(0);
    for (let j = i; j < nums.length; j++) {

      if (ans[ans.length - 1] > nums[j] || set.has(nums[j])) {
        continue;
      }
      // if (ans[ans.length - 1] > nums[j] || used[nums[j] + 100] == 1) {
      //   continue;
      // }
      set.add(nums[j]);
      used[nums[j] + 100] = 1
      ans.push(nums[j])
      backTracking(nums, j + 1);
      ans.pop()
    }
  }

  backTracking(nums, 0)
  return ret;
}

const test = [4, 7, 7, ];
const res = findSubsequences_a(test);
console.log(res);