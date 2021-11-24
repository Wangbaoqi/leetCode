/*
 * @lc app=leetcode.cn id=881 lang=javascript
 *
 * [881] 救生艇
 */

// @lc code=start
/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {

};
// @lc code=end


// solutions

// * 1. double pointer + sort

// [1,2,2,3] l = 3

const numRescueBoats = (people, limit) => {

  people.sort((a,b) => a - b)

  let l = 0;
  let r = people.length - 1;

  let ans = 0;
  
  while(l <= r) {
    if(people[l] + people[r] <= limit) {
      l++
    }
    ans += 1
    r--
  }

  return ans
}