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


// 回溯

const partition_d = s => {

  const ret = [], ans = [];
  const len = s.length;


  const isPalindrome = (s, i, j) => {
    let l = i, r = j;
    while (l < r) {
      if (s[l] != s[r]) return false;
      l++;
      r--;
    }
    return true;
  }

  const backTracking = (s, i) => {

    // 结束条件 判断是否是回文串
    if (i >= len) {
      ret.push([...ans]);
      return;
    }

    for (let j = i; j < s.length; j++) {
      if (isPalindrome(s, i, j)) {
        ans.push(s.slice(i, j + 1));
        backTracking(s, j + 1);
        ans.pop();
      } else {
        continue;
      }
    }
  }

  backTracking(s, 0)
  return ret;
}

const test = 'aab'
const res = partition_d(test)
console.log(res);



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


