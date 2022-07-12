/*
 * @lc app=leetcode.cn id=287 lang=javascript
 *
 * [287] 寻找重复数
 */
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// @lc code=end
var findDuplicate = function (nums) {
    nums.sort(function (a, b) { return a - b; });
    // [1,2,2,3,4]
    var n = nums.length;
    var f = 1, s = 0;
    while (f < n) {
        if (nums[f] == nums[s])
            return nums[f];
        f++;
        s++;
    }
    return -1;
};
var findDuplicate1 = function (nums) {
    var n = nums.length;
    var ans = -1;
    var l = 0, r = n - 1;
    while (l <= r) {
        var m = (r + l) >> 1;
        var cnt = 0;
        for (var i = 0; i < n; i++) {
            cnt += Number(nums[i] <= m);
        }
        if (cnt <= m) {
            l = m + 1;
        }
        else {
            r = m - 1;
            ans = m;
        }
    }
    return ans;
};
findDuplicate1([1, 3, 4, 2, 2]);
