/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */
// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    var n = nums.length;
    var l = 0, r = n - 1;
    while (l <= r) {
        var m = (l + r) >> 1;
        if (nums[m] == target)
            return nums[m];
        if (nums[m] > target) {
            r = m - 1;
        }
        else {
            l = m + 1;
        }
    }
    return l;
};
// @lc code=end
