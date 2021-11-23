
/**
 * @param {number[][]} slots1
 * @param {number[][]} slots2
 * @param {number} duration
 * @return {number[]}
 */
 var minAvailableDuration = function(slots1, slots2, duration) {

};




// 你是一名行政助理，手里有两位客户的空闲时间表：slots1 和 slots2，以及会议的预计持续时间 duration，请你为他们安排合适的会议时间。

//「会议时间」是两位客户都有空参加，并且持续时间能够满足预计时间 duration 的 最早的时间间隔。

// 如果没有满足要求的会议时间，就请返回一个 空数组。
 
//「空闲时间」的格式是 [start, end]，由开始时间 start 和结束时间 end 组成，表示从 start 开始，到 end 结束。 

// 题目保证数据有效：同一个人的空闲时间不会出现交叠的情况，也就是说，对于同一个人的两个空闲时间 [start1, end1] 和 [start2, end2]，要么 start1 > end2，要么 start2 > end1。


// 输入：slots1 = [[10,50],[60,120],[140,210]], slots2 = [[0,15],[60,70]], duration = 8
// 输出：[60,68]


// solutions

const minAvailableDuration = (slots1, slots2, duration) => {

  slots1.sort((a, b) => a[0] - b[0])
  slots2.sort((a, b) => a[0] - b[0])

  let len1 = slots1.length;
  let len2 = slots2.length;

  let s1 = 0;
  let s2 = 0;

  while(s1 < len1 && s2 < len2) {
    let s1_0 = slots1[s1][0]
    let s1_1 = slots1[s1][1]

    let s2_0 = slots2[s2][0]
    let s2_1 = slots2[s2][1]

    if(s1_0 > s2_1) {
      s2++
    }else if(s1_1 < s2_0) {
      s1++
    }else {
      let sl = Math.max(s1_0, s2_0);
      let sr = Math.min(s1_1, s2_1);
      if(sr - sl >= duration) {
        return [sl, sl + duration]
      }else if(s2_1 < s1_1) {
        s2++
      }else {
        s1++
      }
    }
  }
  return []
}