/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {

};
// @lc code=end


const combine_1 = (n, k) => {

  const res = [], ans = [];

  const backTracking = (n, k, i) => {

      // 终止条件 ans.length == k
    if (ans.length == k) {
      res.push([...ans])
      return;
    }

    const p = n - ans.length + 1
    for (let j = i; j <= p; j++) {
      ans.push(j); // 处理节点
      backTracking(n, k, j + 1); // 递归遍历
      ans.pop() // 回溯操作
    }
  }

  backTracking(n, k, 1)

  return res;

}


const ret = combine_1(4, 2);

console.log(ret);