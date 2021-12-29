



// 在数组中的两个数字，如果前面一个数字大于后面的数字，则这两个数字组成一个逆序对。
// 输入一个数组，求出这个数组中的逆序对的总数。

// 输入: [7,5,6,4]
// 输出: 5
// [7,5] [7,6] [7,4] [5,4] [6,4]



/**
 * @param {number[]} nums
 * @return {number}
 */
const reversePairs = (nums) => {

  let len = nums.length;

  let left = 0, right = len - 1;
  let temp = Array(len);

  return sortPairs(left, right, nums, temp)
};

const sortPairs = (left, right, nums, temp) => {

  if(left == right) return 0;

  let mid = (left + right) >> 1;
  let leftPairs = sortPairs(left, mid, nums, temp)
  let rightPairs = sortPairs(mid + 1, right, nums, temp)

  const mergeCount = mergePairs1(left, mid, right, nums, temp)

  return leftPairs + rightPairs + mergeCount
}


const mergePairs = (left, mid, right, nums, temp) => {

  for (let i = left; i <= right; i++) {
    temp[i] = nums[i]    
  }

  let i = left, j = mid + 1, count = 0;

  for (let k = left; k <= right; k++) {
    
    if(i == mid + 1) {
      nums[k] = temp[j++]
    }else if(j == right + 1 || temp[i] <= temp[j]) {
      nums[k] = temp[i++]
    }else {
      nums[k] = temp[j++]
      count += mid - i + 1
    }
  }

  return count
}

const mergePairs1 = (left, mid, right, nums, temp) => {

  for (let i = left; i <= right; i++) {
    temp[i] = nums[i]    
  }

  let i = left, j = mid + 1;
  let k = left, count = 0;

  while(i <= mid && j <= right) {
    if(temp[i] <= temp[j]) {
      nums[k++] = temp[i++]
    }else {
      nums[k++] = temp[j++]
      count += mid - i + 1
    }
  }

  while(i <= mid) {
    nums[k++] = temp[i++]
  }

  while(j <= right) {
    nums[k++] = temp[j++]
  }
  return count
}

let nums = [4,2,6,3,8,5,9]

const res = reversePairs(nums)


console.log(res, nums, '归并排序');
