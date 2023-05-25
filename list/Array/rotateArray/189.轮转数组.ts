/*
 * @lc app=leetcode.cn id=189 lang=typescript
 *
 * [189] 轮转数组
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  const len = nums.length;
  const preArr = nums.slice(len - k, len - 1);
  const afterArr = nums.slice(0, k + 1);

  nums = [...preArr, ...afterArr]
  return
};
// @lc code=end

// Thinking

// 1. cut and for

export const rotate1 = (nums: number[], k: number): void => {
  const len = nums.length;

  if(!(k%len) || !k) return;

  const step = len < k ? ~~(k%len) : k;
  const afterStep = len < k ? len - (~~(k%len)) : len - k;

  const preArr = nums.slice(-step);
  const afterArr = nums.slice(0, afterStep);

  const newArr = [...preArr, ...afterArr];

  for (let i = 0; i < len; i++) {
    nums[i] = newArr[i]
  }
}

// 2. cut and concat

export const rotate2 = (nums: number[], k: number): void => {
  const len = nums.length;

  if (!(k % len) || !k) return;
  
  k = k % len;

  const pre = nums.slice(-k);
  nums.splice(k, len - k);
  nums.unshift(...pre);

}

