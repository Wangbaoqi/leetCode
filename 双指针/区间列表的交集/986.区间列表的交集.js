/*
 * @lc app=leetcode.cn id=986 lang=javascript
 *
 * [986] 区间列表的交集
 */

// @lc code=start
/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function(firstList, secondList) {

};
// @lc code=end


// 第一题

/**
 * 1.计算多个区间的交集
 *   区间用长度为2的数字数组表示，如[2, 5]表示区间2到5（包括2和5）；
 *   区间不限定方向，如[5, 2]等同于[2, 5]；
 *   实现`getIntersection 函数`
 *   可接收多个区间，并返回所有区间的交集（用区间表示），如空集用null表示
 * 示例：
 *   getIntersection([5, 2], [4, 9], [3, 6]); // [4, 5]
 *   getIntersection([1, 7], [8, 9]); // null
 */


// [5, 2], [4, 9], [3, 6]

const getIntersection = () => {
  const arr = [...arguments]

  if(!arr.length) return null;

  const min = 0;
  const max = Math.max(arr[0][0],arr[0][1]);

  for (const x of arr) {
    
    min = Math.max(Math.min(x[0], x[1]), min)
    max = Math.min(Math.max(x[0], x[1]), max)
  }

  if(min <= max) {
    return [min, max]
  }
  return null

}


const intervalIntersection = (firstList, secondList) => {

  let fLen = firstList.length;
  let sLen = secondList.length;

  let f = 0, s = 0, res = [];

  while(f < fLen && s < sLen) {

    const fx = firstList[f];
    const sx = secondList[s];

    if(fx[1] < sx[0]) {
      f++
    }else if(fx[0] > sx[1]) {
      s++
    }else {
      const min = Math.max(fx[0], sx[0])
      const max = Math.min(fx[1], sx[1])
      if(min <= max) {
        res.push([min, max])
      }
      if(firstList[f+1][0] <= sx[1]) {
        f++
      }
      else if(secondList[s+1][0] <= fx[1]) {
        s++
      }
      else {
        f++
        s++
      }
    }
  }
  return res

}