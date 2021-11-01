/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {

};
// @lc code=end

// solutions

// * 1. sort api

// * 2. calculate count and fill nums

// * 3. single pointer

const sortColors_singlePointer = (nums) => {

  let p = 0;

  for (let i = 0; i < nums.length; i++) {
    if(nums[i] == 0) {
      let tmp = nums[i];
      nums[i] = nums[p];
      nums[p] = tmp;
      p++
    }
  }

  for (let i = p; i < nums.length; i++) {
    if(nums[i] == 1) {
      let tmp = nums[i];
      nums[i] = nums[p];
      nums[p] = tmp;
      p++
    }    
  }
}

// * 4. double pointer fast slow pointer

// [2,1,0,2,1,0]

const sortColors_doublePointer = (nums) => {
  let p0 = 0, p1 = 0;
  for (let i = 0; i < nums.length; i++) {
    
    if(nums[i] == 1) {
      let tmp = nums[i];
      nums[i] = nums[p1];
      nums[p1] = tmp;
      p1++
    }else if(nums[i] == 0){
      let tmp = nums[i];
      nums[i] = nums[p0];
      nums[p0] = tmp;
      if(p0 < p1) {
        let tmp = nums[i];
        nums[i] = nums[p1];
        nums[p1] = tmp
      }
      p0++;
      p1++
    }
  }
}

// * 5. double pointer back direction pointer

// [2,1,0,2,1,0]

const sortColors_doublePointer1 = (nums) => {

  let p0 = 0, p2 = nums.length - 1;

  for (let i = 0; i <= p2; i++) {
    while(i < p2 && nums[i] == 2) {
      let tmp = nums[i];
      nums[i] = nums[p2];
      nums[p2] = tmp;
      p2--;
    }
    if(nums[i] == 0) {
      let tmp = nums[i];
      nums[i] = nums[p0];
      nums[p0] = tmp;
      p0++
    }
  }
}