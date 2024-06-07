/*
 * @lc app=leetcode.cn id=2326 lang=typescript
 *
 * [2326] 螺旋矩阵 IV
 */

// @lc code=start
/**
 * Definition for singly-linked list.

 */
export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function spiralMatrix(
  m: number,
  n: number,
  head: ListNode | null
): number[][] {

  // const matrix = new Array(m).fill(new Array(n).fill(-1)); // 这种方法创建的二维数组有毛病
  const matrix = new Array(m);
  for(let i = 0; i < m; i++) {
    matrix[i] = new Array(n).fill(-1)
  }

  const dirs = [
    [0, 1],   // left -> right y + 1
    [1, 0],   // top -> bottom x + 1
    [0, -1],  // right -> left y - 1
    [-1, 0]   // bottom -> top x - 1
  ]
  let dir = 0; // 控制方向 0 1 2 3
  let x = 0, y = 0;
  let node = head;

  while(node !== null) {
    matrix[x][y] = node.val;
    node = node.next;

    let nx = x + dirs[dir][0]; // x + 0
    let ny = y + dirs[dir][1]; // y + 1

    // test
    const a = [
      [3, 0, 2, 6, 8],    // dir = 0, x = 0, y = 4; ny = 5 >= n 则需要转弯
      [5, -1, -1, -1, 1], // dir = 1, x = 1, y = 4, ny = 4, nx = 3 >= m 则需要转弯
      [5, 2, 4, 9, 7],    // dir = 2, x = 2, y = 4 nx = 2, ny = -1 则需要转弯
                          // dir = 3, x = 2, y = 0, nx = -1 则需要转弯
                          // dir = 0, x = 1, y = 1,
    ]
    // 出界的场景
    if(nx < 0 || ny < 0 || nx >= m || ny >= n || matrix[nx][ny] !== -1) {
      dir = (dir + 1) % 4;

      nx = x + dirs[dir][0];
      ny = y + dirs[dir][1];
    }

    x = nx;
    y = ny;
  }

  return matrix
}
// @lc code=end
