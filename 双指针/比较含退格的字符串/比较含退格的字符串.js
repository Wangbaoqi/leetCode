/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var backspaceCompare = function(s, t) {

};



// 给定 s 和 t 两个字符串，当它们分别被输入到空白的文本编辑器后，请你判断二者是否相等。# 代表退格字符。

// 如果相等，返回 true ；否则，返回 false 。

// 注意：如果对空文本输入退格字符，文本继续为空。


// 输入：s = "ab#c", t = "ad#c"
// 输出：true
// 解释：S 和 T 都会变成 “ac”。



// solutions


// * 1. double

const backspaceCompare_double = (s, t) => {

  let i = s.length - 1;
  let j = t.length - 1;

  let is = 0. js = 0;

  while(i >= 0 || j >= 0) {

    while(i >= 0) {
      if(s[i] == '#') {
        is++;
        i--
      }else if(is > 0) {
        is--;
        i--;
      }else {
        break;
      }
    }

    while(j >= 0) {
      if(t[j] == '#') { // record symbol "#" count
        js++;
        j--;
      }else if(js > 0) { // clear up symbol "#" count
        js--;
        j--;
      }else {
        break; // next loop
      }
    }

    // judge not equal conditions
    // attention need judge zero
    if(i >= 0 && j >= 0) {
      if(s[i] != t[j]) return false;
    }else {
      if(i >= 0 || j >= 0) return false;
    }

    i--;
    j--;
  }
  return true
}