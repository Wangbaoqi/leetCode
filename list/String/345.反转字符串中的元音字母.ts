/*
 * @lc app=leetcode.cn id=345 lang=javascript
 *
 * [345] 反转字符串中的元音字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {

};
// @lc code=end


const reverseVowels_d = s => {

  const va = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  let a = s.split('');

  let l = 0, r = a.length - 1;
  while (l < r) {
    while (l < r && !va.includes(a[r])) {
      r--
    }
    while (l < r && !va.includes(a[l])) {
      l++
    }
    let tmp = a[l];
    a[l] = a[r];
    a[r] = tmp;
    l++;
    r--;
  }
  return a.join('')
}

const ret = reverseVowels_d('leetcode')

console.log(ret);