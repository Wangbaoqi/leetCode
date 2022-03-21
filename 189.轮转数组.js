/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 轮转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {

};
// @lc code=end



const rotate_a = (nums, k) => {
 
  while (k > 0) {
    const el = nums.pop();
    nums.unshift(el)
    k--;
  }
}

const rotate_b = (nums, k) => {
  const n = nums.length;

  k %= n;

  const reverse = (nums, s, e) => {
    let l = s, r = e;
    while (l < r) {
      let tmp = nums[l];
      nums[l] = nums[r];
      nums[r] = tmp;
      l++;
      r--;
    }
  }

  reverse(nums, 0, n); //[7, 6, 5, 4, 3, 2, 1]
  reverse(nums, 0, k - 1); //  [5, 6, 7, 4, 3, 2, 1]
  reverse(nums, k, n); // [ 5, 6, 7, 1,2, 3, 4]
}


const nums = [1, 2, 3, 4, 5, 6, 7], k = 3;

rotate_a(nums, k)


console.log(nums);
