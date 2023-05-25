/*
 * @lc app=leetcode.cn id=4 lang=typescript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {

  const m = nums1.length;
  const n = nums2.length;
  const len = m + n;

  const getKthElement = (nums1: number[], nums2: number[], k: number): number => { 

    let mLen = nums1.length, nLen = nums2.length;
    let i = 0, j = 0;

    while (true) {

      // handle bordered arrays
      if (i === mLen) {
        return nums2[j + k - 1]
      }

      if (j === nLen) { 
        return nums1[i + k - 1]
      }
      
      if (k === 1) {
        return Math.min(nums1[i], nums2[j])
      }

      let m = ~~(k / 2);
      let mIdx = Math.min(i + m, mLen) - 1;
      let nIdx = Math.min(j + m, nLen) - 1;

      let mVal = nums1[mIdx], nVal = nums2[nIdx];

      if (mVal <= nVal) {
        k -= (mIdx - i + 1);
        i = mIdx + 1;
      } else {
        k -= (nIdx - j + 1);
        j = nIdx + 1;
      }
    }
  }

  // merge arrays is even number 
  // then convert that into getKthElement of m1 and m2
  // last m1 + m2 ‘s average number
  if (len % 2 == 0) { 
    let m1 = ~~(len / 2) - 1, m2 = ~~(len / 2);
    return (getKthElement(nums1, nums2, m1) + getKthElement(nums1, nums2, m2)) / 2;
  } else {
    // merge arrays is odd number
    let m = ~~(len /2)
    return getKthElement(nums1, nums2, m + 1)
  }
};
// @lc code=end



const findMedianSortedArrays1 = (nums1: number[], nums2: number[]): number => { 

  let n = nums1.length;
  let m = nums2.length;
  let len = n + m;

  let l = -1, r = -1;
  let j = 0;

  for (let i = 0; i <= len / 2; i++) {
    l = r;
    if (i < n && (nums1[i] < nums2[j] || j >= m)) {
      r = nums1[i++];
    } else {
      r = nums2[j++];
    }
  }

  if (len % 2 == 0) { 
    return (l + r) / 2;
  } else {
    return r
  }
}