/*
 * @lc app=leetcode.cn id=278 lang=javascript
 *
 * [278] 第一个错误的版本
 */

// @lc code=start
/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
	return function (n) {
		let l = 1, r = n;

		while (l < r) {
			let m = l + ((r - l) >> 1);
			let isBad = isBadVersion(m);
			if (isBad) {
				r = m
			} else {
				l = m + 1
			}
		}

		if (isBadVersion(l) || l <= n) return l
		return -1
	};
};
// @lc code=end
