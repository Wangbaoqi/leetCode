/*
 * @lc app=leetcode.cn id=744 lang=typescript
 *
 * [744] 寻找比目标字母大的最小字母
 */

// @lc code=start
function nextGreatestLetter(letters: string[], target: string): string {

  let n = letters.length;
  let l = 0, r = n - 1;

  while (l < r) {
    let m = l + ((r - l) >> 1);
    const mp = letters[m].codePointAt(0) || 0;
    const tp = target.codePointAt(0) || 0;


    if (mp >= tp) {
      r = m
    } else {
      l = m + 1
    }
  }

  if (r < n && letters[r] > target) return letters[r];
  return letters[0]
};
// @lc code=end

