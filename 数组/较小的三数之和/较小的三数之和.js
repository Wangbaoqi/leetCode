/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var threeSumSmaller = function(nums, target) {

};




// 给定一个长度为 n 的整数数组和一个目标值 target，寻找能够使条件 nums[i] + nums[j] + nums[k] < target 成立的三元组  i, j, k 个数（0 <= i < j < k < n）。

// 示例：

// 输入: nums = [-2,0,1,3], target = 2
// 输出: 2 
// 解释: 因为一共有两个三元组满足累加和小于 2:
//     [-2,0,1]
//     [-2,0,3]
// 进阶：是否能在 O(n^2) 的时间复杂度内解决？


// ideas 

// 



// solutions 

// * 1. double pointer 

// [0, 2, 2, 5, 8] 8

const threeSumSmaller = (nums, target) => {

  nums.sort((a,b) => a - b);

  let sum = 0;

  for (let i = 0; i < nums.length; i++) {

    let l = i + 1;
    let r = nums.length - 1;
    let t = target - nums[i];

    while(l < r) {
      if(nums[l] + nums[r] < t) {
        sum += r - l
        l++
      }else {
        r--
      }
    }
  }
  return sum
}
