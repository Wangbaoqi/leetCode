/*
 * @lc app=leetcode.cn id=2289 lang=typescript
 *
 * [2289] 使数组按非递减顺序排列
 */

// @lc code=start
export function totalSteps(nums: number[]): number {

  let num = 0

  const st = [];

  for (let i = 0; i < nums.length; i++) {

    let max = 0;

    while (st.length && st[st.length - 1][0] <= num[i]) {
      max = Math.max(max, st.pop()[1])
    }

    max = !st.length ? 0 : max + 1;
    num = Math.max(num, max);
    st.push([num, max]);
  }

  return num;
};
// @lc code=end

