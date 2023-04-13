/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits: string) {

};
// @lc code=end



const letterCombinations_a = (digits: string): string[] => {

  const ret: string[] = [], ans: string[] = [];
  const map = [
    [],
    [],
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['g', 'h', 'i'],
    ['j', 'k', 'l'],
    ['m', 'n', 'o'],
    ['p', 'q', 'r', 's'],
    ['t', 'u', 'v'],
    ['w', 'x', 'y', 'z'],
  ];

  const backTracking = (digits: string, i: number) => {

    if (i == digits.length) {
      (ans.length) && ret.push(ans.join(''))
      return;
    }

    const item = map[digits[i]];
    for (let j = 0; j < item.length; j++) {
      ans.push(item[j])
      backTracking(digits, i + 1);
      ans.pop()
    }
  }

  backTracking(digits, 0)
  return ret;
}

console.log(letterCombinations_a('2'));