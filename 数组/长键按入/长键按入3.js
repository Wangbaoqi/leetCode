

/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
 var isLongPressedName = function(name, typed) {

};





// 你的朋友正在使用键盘输入他的名字 name。偶尔，在键入字符 c 时，按键可能会被长按，而字符可能被输入 1 次或多次。

// 你将会检查键盘输入的字符 typed。如果它对应的可能是你的朋友的名字（其中一些字符可能被长按），那么就返回 True。


// 输入：name = "alex", typed = "aaleex"
// 输出：true
// 解释：'alex' 中的 'a' 和 'e' 被长按。


// solutions

// * 1. double pointer

const isLongPressedName = (name, typed) => {

  let i = 0, j = 0;

  while(j < typed.length) {

    if(i < name.length && name[i] == typed[j]) {
      i++
      j++
    }else if(j < typed.length && typed[j] == typed[j-1]) {
      j++
    }else {
      return false
    }
  }

  return true
}