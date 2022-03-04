/*
 * @lc app=leetcode.cn id=74 lang=javascript
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {

};
// @lc code=end


// 二分法 + nlogn

const searchMatrix_binarySearch = (matrix, target) => {

  for (let i = 0; i < matrix.length; i++) {
    let item = matrix[i];
    let left = 0;
    let right = item.length - 1;

    while (left <= right) {
      let mid = (right + left) >> 1;
      if (item[mid] == target) {
        return true;
      } else if (item[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return false;
}


// Z字形查找

const searchMatrix_zSearch = (matrix, target) => {

  // 这里要注意 n和m的取值
  const m = matrix.length, n = matrix[0].length;

  let x = 0, y = n - 1;

  while (x < m && y >= 0) {
    if (matrix[x][y] == target) {
      return true;
    }
    if (matrix[x][y] > target) {
      y--;
    } else {
      x++;
    }
  }
  return false;
}


const matrix = [[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]]
const matrix1 = [[1,4],[2,5]]

console.time('search')
const ret = searchMatrix_binarySearch(matrix1, 2)
const ret1 = searchMatrix_zSearch(matrix1, 2)
console.log(ret, ret1);
console.timeEnd('search')
