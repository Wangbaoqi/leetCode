/*
 * @lc app=leetcode.cn id=658 lang=typescript
 *
 * [658] 找到 K 个最接近的元素
 */

// @lc code=start
function findClosestElements(arr: number[], k: number, x: number): number[] {

  let n = arr.length;
  let l = 0, r = n - 1;

  while (l < r) {
    let m = l + ((r - l) >> 1);

    if (x - arr[m] <= arr[m + k] - x) {
      r--
    } else {
      l++
    }
  }

  let res: number[] = [];

  for (let i = l; i < l + k; i++) {
    res.push(arr[i])    
  }

  return res
};
// @lc code=end

const findClosestElements1 = (arr: number[], k: number, x: number): number[] => {

  let n = arr.length;
  let l = 0, r = n - 1, res: number[] = [];

  let rem = n - k;

  while (rem > 0) {
    
    if (x - arr[l] <= arr[r] - x) {
      r--
    }else {
      l++
    }
    rem--
  }

  for (let i = l; i < l + k; i++) {
    res.push(arr[i])
  }

  return res;
}