

// 数组排序 

// 归并排序 + 递归分治

// 深度优先遍历

// * 分析过程

// [4,2,6,3,8,5,9,1,7]

// 1. 拆分子问题
// [4,2,6,3,8] | [5,9,1,7]
// [4,2,6] [3,8] | [5,9] [1,7]
// [4] [2] [6] [3] [8] | [5] [9] [1] [7]

// 2. 递归结束条件 
// 当拆分之剩下一个元素的时候，结束递归，继续执行下次递归或者解决当前子问题

// 3. 解决合并自问题
// 根据递归结构和执行顺序，跟二叉树的后序遍历一致
// 当解决当前子问题，也就是合并两个有序数组，使用归并排序


// * 复杂度分析

// 1. 时间复杂度
// O(nlogn) = O(n) + n/2

const sortArray = (nums) => {
  let len  = nums.length;
  let left = 0, right = len - 1;
  let temp = Array(len);
  sortMerge(left, right, nums, temp)
  return nums
}

const sortMerge = (left, right, nums, temp) => {
  
  console.log('拆分子问题');

  // 递归结束条件
  if(left >= right) return;
  // 继续拆分子问题
  let mid = (right + left) >> 1;
  // 递归左侧子问题序列
  sortMerge(left, mid, nums, temp);
  // 递归右侧子问题序列
  sortMerge(mid + 1, right, nums, temp);

  // 合并子问题的值
  mergerSortedArray(left, mid, right, nums, temp)

  console.log('解决子问题');

}


// 归并排序

const mergerSortedArray = (left, mid, right, nums, temp) => {

  // 获取整个区间的数组 [left, right]
  for (let i = left; i <= right; i++) {
    temp[i] = nums[i]
  }

  // 两个区间 
  // [left, mid] 和 [mid + 1, right]
  // 合并两个有序的子数组

  let i = left, j = mid + 1;
  let k = left;

  // 比较两个有序区间的值 结果给到原数组
  while(i <= mid && j <= right) {
    if(temp[i] <= temp[j]) {
      nums[k++] = temp[i++]
    }else {
      nums[k++] = temp[j++]
    }
  }

  // 打补丁 如果[i, mid]区间没有遍历结束
  while(i <= mid) {
    nums[k++] = temp[i++]
  }

  // 打补丁 如果[mid + 1, right]区间没有遍历结束
  while(j <= right) {
    nums[k++] = temp[j++]
  }
}



// test case 

let nums = [4,2,6,3,8,5,9]

sortArray(nums)


console.log(nums, '归并排序');