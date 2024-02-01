/*
 * @lc app=leetcode.cn id=2289 lang=typescript
 *
 * [2289] 使数组按非递减顺序排列
 */

// @lc code=start
export function totalSteps(nums: number[]): number {
  // [5,3,4,4,7,3,6,11,8,5,11]

  // max = 0, ans = 0, st = [[5, 0]],
  // max = 0, max = 1, ans = 0, st = [[5, 0], [3, 1]],
  // max = 0, max = Max(0, 1), max = 2, ans = 2, st = [[5, 0], [4, 2]],
  // max = 0, max = Max(0, 2), max = 3, ans = 3, st = [[5, 0], [4, 3]]
  // max = 0, max = Max(0, 3), max = 4, ans = 4, st = [[5, 0], [7, 4]]
  // max = 0, max = 1, ans = 4, st = [[5, 0], [7, 4], [3, 1]]
  // max = 0, max = Max(0, 1), max = 2, ans = 4, st = [[5, 0], [7, 4], [6, 2]]
  // max = 0, max = Max(0, 2), max = 2, ans = 4, st = [[5, 0], [7, 4], [11, 2]]
  // max = 0, max = 1, ans = 4, st = [[5, 0], [7, 4], [11, 2], [8, 1]]
  // max = 0, max = 1, ans = 4, st = [[5, 0], [7, 4], [11, 2], [8, 1], [5, 1]]
  // max = 0, max = Max(0, 1), max = 2, ans = 4, st = [[5, 0], [7, 4], [11, 2], [8, 1]]
  // max = 2, max = Max(2, 1), max = 2, ans = 4, st = [[5, 0], [7, 4], [11, 2], [11, 2]]

  let ans = 0;

  const st = [];

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let max = 0;

    while (st.length && st[st.length - 1][0] <= num) {
      max = Math.max(max, st.pop()[1]);
    }

    max = !st.length ? 0 : max + 1;
    ans = Math.max(ans, max);
    st.push([num, max]);
  }

  return ans;
}
// @lc code=end
