
/**
 * @param {number[]} nums
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number[]}
 */
 var sortTransformedArray = function(nums, a, b, c) {

};



// 给你一个已经 排好序 的整数数组 nums 和整数 a、b、c。对于数组中的每一个数 x，计算函数值 f(x) = ax2 + bx + c，请将函数值产生的数组返回。

// 要注意，返回的这个数组必须按照 升序排列，并且我们所期望的解法时间复杂度为 O(n)。

// 示例 1：

// 输入: nums = [-4,-2,2,4], a = 1, b = 3, c = 5
// 输出: [3,9,15,33]
// 示例 2：

// 输入: nums = [-4,-2,2,4], a = -1, b = 3, c = 5
// 输出: [-23,-5,1,7]


// solutions 

// * 1. double pointer

const sortTransformedArray = (nums, a, b, c) => {

  let res = []

  if(a == 0) {
    if(b == 0) {
      res = Array(nums.length).fill(c)
    }else if(b > 0) { 
      for (let i = 0; i < nums.length; i++) {
        res.push(b * nums[i] + c)        
      }
    }else {
      for (let i = 0; i < nums.length; i++) {
        res.unshift(b * nums[i] + c)        
      }
    }
  }else if(a > 0){
    let l = 0;
    let r = nums.length - 1;
    while(l <= r) {
      let lv = a * (nums[l] ** 2) + b * nums[l] + c;
      let rv = a * (nums[r] ** 2) + b * nums[r] + c;
      if(lv < rv) {
        res.unshift(rv)
        r--
      }else {
        res.unshift(lv)
        l++
      }
    }
  }else {
    let l = 0;
    let r = nums.length - 1;
    while(l <= r) {
      let lv = a * (nums[l] ** 2) + b * nums[l] + c;
      let rv = a * (nums[r] ** 2) + b * nums[r] + c;
      if(lv < rv) {
        res.push(lv)
        l++
      }else {
        res.push(rv)
        r--
      }
    }
  }
  return res
}