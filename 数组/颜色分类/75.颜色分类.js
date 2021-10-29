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


// * 1. count and fill 

// process: 
// first traverse that calculate the count of 0,1,2 
// second traverse that fill the array

const sortColors_count = function(nums) {

  let red_count = 0;
  let white_count = 0;
  let blue_count = 0;

  for (let i = 0; i < nums.length; i++) {
    if(nums[i] === 0) red_count++;
    if(nums[i] === 1) white_count++;    
    if(nums[i] === 2) blue_count++;    
  }

  for (let i = 0; i < red_count; i++) {
    nums[i] = 0;
  }

  for (let i = red_count; i < red_count + white_count; i++) {
    nums[i] = 1;
  }
  for (let i = red_count + white_count; i < red_count + white_count + blue_count; i++) {
    nums[i] = 0;
  }
};


// * 2. single pointer 

const sortColors_singlePointer = (nums) => {

  let p = 0;

  for (let i = 0; i < nums.length; i++) {
    if(nums[i] == 0) {
      let tmp = nums[i];
      nums[i] = nums[p];
      nums[p]  = tmp;
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


// * 3. double pointer - Fast slow pointer

// need two pointer p0 p1
// p0 < p1 exchange cur i and p1, make sure that 1 will not moved 
// keyword point is that when i == 0

const sortColors_doublePointer = (nums) => {
  let p0 = 0, p1 = 0;

  for (let i = 0; i < nums.length; i++) {
    if(nums[i] == 1) {
      let tmp = nums[i];
      nums[i] = nums[p1];
      nums[p1] = tmp;
      p1++
    }else if(nums[i] == 0) {
      let tmp = nums[i];
      nums[i] = nums[p0];
      nums[p0] = tmp;
      if(p0 < p1) {
        let tmp = nums[i];
        nums[i] = nums[p1]
        nums[p1] = tmp
      }
      p0++;
      p1++;
    }
  }
}


// * 4. double pointer - Collision pointer

// need two pointer p0 = 0 p2 = len - 1
// traverse arr 
// 1. while nums[i] == 2 exchange i and p2 && p2--
// 2. if nums[i] == 0 exchange and i and p0 

const sortColors_doublePointer1 = (nums) => {

  let p0 = 0, p2 = nums.length - 1;

  for (let i = 0; i < p2; i++) {
    
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



// * 4. quick sort - three road quick sort 