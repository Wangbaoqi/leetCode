/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow_d = function(s, t) {

};
// @lc code=end


const minWindow = (s, t) => {

  let l = 0;
  let r = 0;

  let m = 0;

  let min = Number.MAX_SAFE_INTEGER;
  let start = 0;
  
  let need = {};
  let window = {};

  for (let i = 0; i < t.length; i++) {
    const el = t[i];
    need[el] = need[el] ? need[el] + 1 : 1;
  }

  while (r < s.length) {
    const rEl = s[r];
    if (need[rEl]) {
      // 进入滑动窗口
      window[rEl] = (window[rEl] || 0) + 1;

      if (need[rEl] === window[rEl]) {
        m++
      }
    }
    r++

    const keys = Object.keys(need);

    // 滑动窗口中字符包含了所有的目标字符
    // 移动左侧指针 缩小窗口
    while (m == keys.length) {
      const lEl = s[l];

      // 更新窗口大小
      if (r - l < min) {
        min = r - l;
        start = l;
      }

      // 当前字符如果在目标字符中，移除字符
      if (need[lEl]) {
        window[lEl]--;
        // 如果移除的字符 在window中的数量小于need，则两者字符不匹配，则继续扩大窗口
        if (need[lEl] > window[lEl]) {
          m--
        }
      }
      l++
    }
  }

  console.log(min, 'min');
  console.log(start, l, r, 'start');

  console.log(s.slice(start, start + min), 'str sub');
  console.log(s.slice(l - 1, l + min), 'str sub l');

  return min == Number.MAX_SAFE_INTEGER ? '' : s.slice(l - 1, l + min);
}

const s = 'ADOBECODEBANC';

const t = 'ABCD'

const ret = minWindow(s, t)
console.log(ret);