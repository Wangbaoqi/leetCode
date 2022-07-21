/*
 * @lc app=leetcode.cn id=786 lang=typescript
 *
 * [786] 第 K 个最小的素数分数
 */

// @lc code=start
function kthSmallestPrimeFraction(arr: number[], k: number): number[] {

  let n = arr.length;
  let l = 0, r = 1;

  while (true) {
    let m = (l + r) / 2;

    let i = -1, j = 1, count = 0;

    let x = 0, y = 1;

    for (let j = 1; j < n; j++) {
      
      while (arr[i + 1] / arr[j] < m) {
        i++;

        if (arr[i] * y > arr[j] * x) {
          x = i;
          y = j
        }
      }

      count += i + 1
    }

    if (k == count) {
      return [x, y]
    } else if (k < count) {
      r = m
    } else {
      l = m
    }
  }

};
// @lc code=end

