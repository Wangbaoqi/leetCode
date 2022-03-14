/*
 * @lc app=leetcode.cn id=131 lang=javascript
 *
 * [131] 分割回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {

};
// @lc code=end



const partition_1 = s => {

  let ret = [], ans = [];


  const dfs = i => {
    if (i === n) {
      ret.push(ans.slice());
      return
    }

    for (let j = i; j < n; j++) {
      const palindrome = isPalindrome(i, j);
      console.log(palindrome, 'isPalindrome');
      if (palindrome === 1) {
        // point
        ans.push(s.slice(i, j + 1));
        dfs(j + 1);
        ans.pop()
      }
    }
  }

  const isPalindrome = (i, j) => {
    if (f[i][j] !== 0) {
      return f[i][j];
    }
    if (i >= j) {
      f[i][j] = 1
    } else if (s[i] === s[j]) {
      f[i][j] = isPalindrome(i + 1, j - 1)
    } else {
      f[i][j] = -1
    }

    console.log(f, 'ff-is');

    return f[i][j];
  }


  const n = s.length;

  // f [[0, 0, 0],[0, 0, 0],[0, 0, 0]]
  const f = new Array(n).fill(0).map(() => new Array(n).fill(0));

  console.log(f, 'ff');
  dfs(0);
  return ret
}


const partition_2 = s => {

  const ret = [], ans = [];

  const dfs = i => {
    if (i == n) {
      ret.push(ans.slice())
      return;
    }
    for (let j = i; j < n; j++) {
      if (f[i][j]) {
        ans.push(s.slice(i, j + 1));
        dfs(j + 1);
        ans.pop();
      }
    }
  }

  const n = s.length;

  const f = new Array(n).fill(0).map(() => new Array(n).fill(true));

  for (let i = n - 1; i >= 0; i--) {
    for (let j = i + 1; j < n; j++) {
      f[i][j] = s[i] == s[j] && f[i + 1][j - 1];
    }
  }

  dfs(0)

  return f
}

const test = 'aab'
const res = partition_2(test)
console.log(res);
