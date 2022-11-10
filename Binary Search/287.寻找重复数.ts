/*
 * @lc app=leetcode.cn id=287 lang=javascript
 *
 * [287] 寻找重复数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

// @lc code=end

const findDuplicate = (nums: number[]): number => {

  nums.sort((a, b) => a - b);

  // [1,2,2,3,4]

  const n = nums.length;

  let f = 1, s = 0;
  
  while (f < n) {
    
    if (nums[f] == nums[s]) return nums[f];

    f++;
    s++;
  }
  return -1;

}


const findDuplicate1 = (nums: number[]) => {

  const n = nums.length;
  let ans = -1;
  let l = 0, r = n - 1;

  while (l <= r) {
    let m = (r + l) >> 1;

    let cnt = 0;
    for (let i = 0; i < n; i++) {
      cnt += Number(nums[i] <= m);
    }
    if (cnt <= m) {
      l = m + 1
    } else {
      r = m - 1;
      ans = m
    }
  }
  return ans

}


findDuplicate1([1,3,4,2,2])


const findDuplicate2 = (nums: number[]): number => {

  const set = new Set();

  for (const num of nums) {
    
    if (set.has(num)) {
      return num
    }

    set.add(num)
  }

  return -1
}