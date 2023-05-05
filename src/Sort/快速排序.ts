



// 快速排序

// 也是递归的思想

// eg [2,5,1,6,3,4,8,7,9]

// first loop
// [2,1,5,6,3,4,8,7,9] -> [1,2,5,6,3,4,8,7,9]
// return l


const quickSort = nums => {

  quick(nums, 0, nums.length - 1)
  return nums
}

const quick = (nums, left, right) => {

  if(left >= right) return;

  const pivot = partition(left, right, nums);

  quick(nums, left, pivot - 1)
  quick(nums, pivot + 1, right)
}


const partition1 = (left, right, nums) => {

  // 第一个为基准值
  let p = nums[left];

  let l = left;
  let r = right;

  while(l < r) {

    while(l < r && nums[r] >= p) {
      r--
    }

    while(l < r && nums[l] <= p) {
      l++
    }

    if(l < r) {
      let tmp = nums[l];
      nums[l] = nums[r];
      nums[r] = tmp;
    }

  }
  
  nums[left] = nums[l];
  nums[l] = p;

  return l 
}

let nums = [2,5,1,6,3,4,8,7,9]

quickSort(nums)

console.log(nums);