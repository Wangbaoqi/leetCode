// bubble sort

const test = [1, 5, 2, 3, 4, 6, 7, 8, 9, 0];
const test1 = [1, 5, 2, 3, 4, 6, 7, 8, 9, 0];

const test2 = [3, 6, 4, 2, 11, 10, 5];
const test3 = [3, 6, 4, 2, 11, 10, 5];

// 1. original method
export const bubbleSort = (arr: number[]): number[] => {
  let count = 0;
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      // console.log(i, j);
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        count++;
      }
      // console.log(arr, i, j);
    }
  }
  // console.log(count, 'count');

  return arr;
};

// 2. optimized method
// for has sorted

export const bubbleSort2 = (arr: number[]): number[] => {
  let count = 0;
  for (let i = 1; i < arr.length; i++) {
    let flag = true;

    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        flag = false;
        count++;
        // console.log(arr, i, j);
      }
    }
    if (flag) break;
  }
  console.log(count, 'count');

  return arr;
};

// 3. optimized method
// record the last swap position

export const bubbleSort3 = (arr: number[]): number[] => {
  let len = arr.length;
  let k = len - 1;
  let swapPos = 0;
  let count = 0;
  for (let i = 1; i < len; i++) {
    let flag = true;
    for (let j = 0; j < k; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        flag = false;
        swapPos = j;
        count++;
      }
    }
    if (flag) break;
    k = swapPos;
  }
  console.log(count, 'count');

  return arr;
};

// 4. cocktail sort - 鸡尾酒排序（涟漪、搅拌，来回排序）

// [3, 6, 4, 2, 11, 10, 5];

// i = 0; [3, 6, 4, 2, 11, 10, 5]
// i = 1; [3, 4, 6, 2, 11, 10, 5]; index = 1
// i = 2; [3, 4, 2, 6, 11, 10, 5]; index = 2
// i = 3; [3, 4, 2, 6, 11, 10, 5]; index = 2
// i = 4; [3, 4, 2, 5, 10, 11, 5]; index = 4
// i = 5; [3, 4, 2, 5, 10, 5, 11]; index = 5
// i = 6; index = 5

export const bubbleSort4 = (arr: number[]): number[] => {
  let left = 0;
  let right = arr.length - 1;
  let index = left;
  let i;

  while (left < right) {
    // 内层循环
    // index 记录最后一次交换的位置
    let hasSorted = false;
    for (i = left; i < right; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        index = i;
        hasSorted = true;
      }
    }
    // 这里已经进行了一次内循环
    right = index;

    for (i = right; i > left; i--) {
      if (arr[i] < arr[i - 1]) {
        [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
        index = i;
        hasSorted = true;
      }
    }

    left = index;
    if (!hasSorted) break;
  }

  return arr;
};

console.log('-------------- test -----------------');

function shuffle(arr: number[]) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function testFn(sortFn: any) {
  const arr = [];

  for (let i = 0; i < 10000; i++) {
    if (i < 1000) {
      arr[i] = 1000 - i;
    } else {
      arr[i] = i;
    }
  }

  console.log('=============');
  let start = +new Date() - 0;
  sortFn(arr);
  console.log('part sorted', +new Date() - start);

  shuffle(arr);
  start = +new Date() - 0;
  sortFn(arr);
  console.log('full out of sorted', +new Date() - start);
}

// bubbleSort(test2);

console.log('--------------');
testFn(bubbleSort);
// bubbleSort2(test);

console.log('--------------');
testFn(bubbleSort2);

// bubbleSort3(test1);

console.log('--------------');
testFn(bubbleSort3);

const bubbleSortA = (arr: number[]) => {
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
};
