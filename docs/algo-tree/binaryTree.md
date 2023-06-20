---
sidebar_position: 1
---

# 数据结构

二叉树是树中的一种特殊结构，它的叶子节点不超过两个，使得操作起来效率更加高效。

二叉树又分了二叉搜索树、完全二叉树以及满二叉树简单的二叉树结构。

## 实现二叉树

每个树都是由不同的叶子（节点）组成，Node的定义：

```javascript
// 节点类定义
function Node(data, left, right) {
  // 节点value
  this.data = data;
  // 节点的左节点
  this.left = left;
  // 节点的右节点
  this.right = right;
  // 展示节点val
  this.show = show;
}
function show() {
  return this.data
}
```

Node对象可以保存对象，其left和right可以保存左右节点的链接，_show_可以展示节点的值。

### 二叉搜索树实现

接下来**BST**二叉搜索树的实现，包括了根节点_root_，用来保存二叉树的节点，**insert**，用来为树添加节点，以及遍历二叉搜索树等。

```javascript
function BST() {
  this.root = null;
  // 插入数据
  this.insert = insert;
  // 先序遍历
  this.preOrder = preOrder;
  // 中序遍历
  this.inOrder = inOrder;
  // 后序遍历
  this.postOrder = postOrder;
  // 层序遍历
  this.levelOrder = levelOrder;
  // 获取BST最小值
  this.getMin = getMin;
  // 获取BST最大值
  this.getMax = getMax;
  // 寻找节点
  this.find = find;
  // 寻找节点的次数
  this.findCount = findCount;
} 
/**
 * 插入节点
 * @params data 
 **/
function insert(data) {
  let node = new Node(data, null, null);
  // 添加根节点
  if(!this.root) {
    this.root = node
  }else {
    // 添加子节点
    let curNode = this.root;
    let parent;
    while(true) {
      parent = curNode;
      if(data < curNode.data) {
        curNode = curNode.left
        if(curNode === null) {
          parent.left = node;
          break;
        }
      }else {
        curNode = curNode.right;
        if(curNode === null) {
          parent.right = node;
          break;
        }
      }
    }
  }
}
```

_insert_ 主要是给BST添加节点，BST特点是左节点分布是较小的值，而右节点分组是较大的值，这样的特性在遍历以及查找特定值的时候效率会很高。

### 完全二叉树



## 遍历二叉树

树的遍历一般分为`DFS`(深度优先遍历)，`BFS`（广度优先遍历）

目前基本的BST已经成型，可以简单的构造出一颗二叉树搜索树，不过也需要遍历，输出其每个节点上的值。

目前`DFS`有三种方式可以遍历二叉树搜索树，**先序遍历**，**中序遍历**，**后序遍历**

`BFS`一般是层序遍历

### 先序遍历

先序遍历 - 先访问根节点，再访问左子树，最后访问右子树，如下图：

![preOrder](https://media.wangbaoqi.tech/assets/blog/algorithm/tree/BST_preOrder.webp)

```javascript
/**
 * 先序遍历
 * @param node
 **/
function preOrder(node) {
  if(node !== null) {
    // 当前节点值
    console.log(node.data);
    preOrder(node.left);
    preOrder(node.right);
  }
}

// test
let bst = new BST();

bst.insert(23);
bst.insert(45);
bst.insert(16);
bst.insert(37);
bst.insert(3);
bst.insert(99);
bst.insert(22);

bst.preOrder(bst.root); // 23 16 3 22 45 37 99
```

### 中序遍历

中序遍历 - BST 节点排序（小-大），按照节点上的键值，以升序访问BST上的所有节点，先访问左子树，在访问根节点，最后访问右子树。

![inOrder](https://media.wangbaoqi.tech/assets/blog/algorithm/tree/BST_inOrder.webp)

```javascript
/**
 * 中序遍历
 * @param node
 **/
function inOrder(node) {
  if(node !== null) {
    inOrder(node.left);
    console.log(node.data);
    inOrder(node.right)
  }
}

// test
let bst = new BST();

bst.insert(23);
bst.insert(45);
bst.insert(16);
bst.insert(37);
bst.insert(3);
bst.insert(99);
bst.insert(22);

bst.inOrder(bst.root); // 3 16 22 23 37 45 99
```

### 后序遍历

后序遍历 - 先访问叶子节点，从左子树到右子树，再到根节点

![postOrder](https://media.wangbaoqi.tech/assets/blog/algorithm/tree/BST_postOrder.webp)

```javascript
/**
 * 后序遍历
 * @param node
 **/
function postOrder(node) {
  if(node !== null) {
    postOrder(node.left);
    postOrder(node.right);
    console.log(node.data);
  }
}

// test
let bst = new BST();

bst.insert(23);
bst.insert(45);
bst.insert(16);
bst.insert(37);
bst.insert(3);
bst.insert(99);
bst.insert(22);

bst.postOrder(bst.root); // 3 22 16 37 99 45 23
```

### 层序遍历

`BFS`是层序遍历，也就是将二叉树按层次来进行遍历

![BST_levelOrder](https://media.wangbaoqi.tech/assets/blog/algorithm/tree/BST_levelOrder.webp)

广度优先遍历跟深度优先遍历不同，其不是按照节点的顺序来的，因此在这里要借助`队列`数据结构。

首先，根节点入队，获取其节点值，然后出队，如果根节点有子节点，依次将其入队，然后出队，依次类推，直到整个队列为空

```javascript
/**
 * 层序遍历
 * @param node
 **/
function levelOrder(node) {
  let queue = [];
  queue.push(node)
  while(queue.length) {
    // 出队
    const curNode = queue.shift();
    console.log(curNode.data)
    if(curNode.left) {
      queue.push(curNode.left)
    }
    if(curNode.right) {
      queue.push(curNode.right)
    }
  }
}
```

## 二叉搜索树查找

在二叉搜索树上查到节点的方式有三种：

* 查找最小值 - 左子树上搜索
* 查找最大值 - 右子树上搜索
* 查找特定值 - 左子树和右子树上节点对比

#### 查找最小值

根据二叉搜索树的特性（较小值分布在左子树），所以直接遍历左子树就可以查找到最小值

```javascript
/**
 * 查找最小值
 * @return minData
 **/
function getMin() {
  let curNode = this.root;
  while(curNode.left !== null) {
    curNode = curNode.left
  }
  return curNode.data
}
```

#### 查找最大值

根据二叉搜索树的特性（较大值分布在右子树），所以直接遍历右子树就可以查找到最大值

```javascript
/**
 * 查找最大值 
 * @returns maxData
 */
function getMax() {
  let curRoot = this.root;
  while(curRoot.right !== null) {
    curRoot.right = curRoot
  }
  return curRoot.data
}
```

#### 查找特定值

查找特定值，需要定位该值在二叉树的左子树还是右子树

```javascript
/**
 * 查找特定值
 * @returns findData
 */
function find(data) {
  let current = this.root;
  while(current != null) {
    if(current.data === data) {
      return current
    }else if(current.data < data) {
      current = current.right
    }else {
      current = current.left
    }
  }
}

/**
 * 查找特定值 递归写法 也是LeetCode-700的解法
 * @returns findData
 */
function searchBst(root, data) {
  if(root == null) return null;

  if(root.data == data) {
    return root;
  }else if(root.data < data) {
    return searchBst(root.right, data)
  }else {
    return searchBst(root.left, data)
  }
}
```

### 二叉搜索树删除节点

删除节点主要有两种方式，一种是叶子节点（没有子节点的节点），另一种是有子节点的节点。

* 删除叶子节点 - 没有子节点，直接删除就可以
* 删除有子节点的节点 
  * 左节点存在，没有右子节点
  * 右节点存在，没有左子节点
  * 左右节点都存在 

这里整理出删除节点的一套框架，采用递归的方式。

```javascript
/**
 * 删除节点
 * @param node data
 * @return node
 */
function deleteNode(node, data) {
  if(node == null) return null;
  // 查找到待删除的节点
  if(node.data === data) {
    // 进行删除
  }else if(node.data < data){
    node.right = deleteNode(node.right, data)
  }else {
    node.left = deleteNode(node.left, data)
  }
  return node
}
```

1. 删除叶子节点（没有左右子节点的节点）

![bst_deletion_case\_1](https://media.wangbaoqi.tech/assets/blog/algorithm/tree/bst_deletion_case\_1.webp)

```javascript
// 删除没有子节点的节点
if(node.data === data) {
  if(!node.left && !node.right) return null
}
```

1. 删除只有一个子节点的节点

![bst_deletion_case2](https://media.wangbaoqi.tech/assets/blog/algorithm/tree/bst_deletion_case\_2.webp)


```javascript
// 删除只有一个子节点的节点
if(node.data === data) {
  if(node.left == null) return node.right;
  if(node.right == null) return node.left;
}
```

1. 删除左右子节点都存在的节点

![bst_deletion_case3](https://media.wangbaoqi.tech/assets/blog/algorithm/tree/bst_deletion_case\_3.webp)

```javascript
// 删除左右子节点都存在的节点
if(node.data === data) {
  // 获取右子树的最小的节点
  let tmpNode = getMinNode(node.right);
  node.data = tmpNode.data;
  node.right = deleteNode(node.right, tmpNode.data)
}
```

完整代码:

```javascript
/**
 * 删除节点
 * @param node data
 * @return node
 */
function deleteNode(node, data) {
  if(node == null) return null;
  // 查找到待删除的节点
  if(node.data === data) {
    // 进行删除
    if(!node.left && !node.right) return null;
    if(node.left == null) return node.right;
    if(node.right == null) return node.left;

    let tmpNode = getMinNode(node.right);
    node.data = tmpNode.data;
    node.right = deleteNode(node.right, tmpNode.data);
  }else if(node.data < data){
    node.right = deleteNode(node.right, data)
  }else {
    node.left = deleteNode(node.left, data)
  }
  return node
}

// test 
let bst = new BST();

bst.insert(23);
bst.insert(45);
bst.insert(16);
bst.insert(37);
bst.insert(3);
bst.insert(99);
bst.insert(22);

// inorder
bst.inOrder(bst.root); // 3 16 22 23 37 45 99

// remove 
bst.remove(16);
bst.inOrder(bst.root); // 3 22 23 37 45 99
```

### 二叉搜索树计数

计数需要在节点新增一个属性_count_，遍历一组数据时，可以判断该值是否存在树中，存在的话，其_count_加`1`，否则，将该值插入到树中。

```javascript
/**
 * 节点类定义
 * @param node data
 * @param node left
 * @param node right
 */
function Node(data, left, right) {
  // 节点value
  this.data = data;
  // 节点的左节点
  this.left = left;
  // 节点的右节点
  this.right = right;
  // 展示节点val
  this.show = show;
  // 节点数量
  this.count = 1;
}

// 寻找节点次数 BST 方法 
function findCount(data) {
  return this.find(data).count || 0
}


// test case
let arr = [20, 19, 30, 22, 4, 20, 18, 22]
let bst = new BST();

for (const key of arr) {
  if(!bst.find(key)) {
    bst.insert(key)
  }else {
    let curNode = bst.find(key)
    curNode.count++;
  }
}
```

## 二叉树经典算法题

* [701. 二叉搜索树中的插入操作](https://leetcode-cn.com/problems/insert-into-a-binary-search-tree/)
* [450. 删除二叉搜索树中的节点](https://leetcode-cn.com/problems/delete-node-in-a-bst/)
* [700. 二叉搜索树中的搜索](https://leetcode-cn.com/problems/search-in-a-binary-search-tree/)
* [101. 对称二叉树](https://leetcode-cn.com/problems/symmetric-tree/)
* [100. 相同的树](https://leetcode-cn.com/problems/same-tree/)
* [98. 验证二叉搜索树](https://leetcode-cn.com/problems/validate-binary-search-tree/)
* [剑指 Offer 27. 二叉树的镜像](https://leetcode.cn/problems/er-cha-shu-de-jing-xiang-lcof/)
* [226. 翻转二叉树](https://leetcode-cn.com/problems/invert-binary-tree/)
* [剑指 Offer 55 - I. 二叉树的深度](https://leetcode-cn.com/problems/二叉树-de-shen-du-lcof/)
* [1038. 从二叉搜索树到更大和树](https://leetcode-cn.com/problems/binary-search-tree-to-greater-sum-tree/)
* [二叉树的直径](https://leetcode-cn.com/problems/diameter-of-binary-tree/)
* [二叉树的最大路径总和](https://leetcode-cn.com/problems/binary-tree-maximum-path-sum/)
* [二叉树展开为链表](https://leetcode-cn.com/problems/flatten-binary-tree-to-linked-list/)
* [二叉树的最近公共祖先](https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/)
* [把二叉搜索树转换为累加树](https://leetcode-cn.com/problems/convert-bst-to-greater-tree/)
* [合并二叉树](https://leetcode-cn.com/problems/merge-two-binary-trees/)
* 二叉搜索树迭代器
* 二叉树的右视图

### 相同的树

如果对比两颗二叉搜索树完全相同，就要递归遍历两棵树的每个节点都要相同。

```javascript
/**
 * 相同的树
 * @param node root1
 * @param node root2
 */
function sameBST(root1, root2) {
  // 两个为空
  if(root1 == null && root2 == null) return true;
  // 一个为空 一个非空
  if(root1 == null || root2 == null) return false;
  // 后判断节点的值是否相等
  if(root1.data != root2.data) return false;

  return sameBST(root1.left, root2.left) && sameBST(root1.right, root2.right)
}

// test
let bst1 = new BST()
bst1.insert(23);
bst1.insert(45);
bst1.insert(16);
bst1.insert(37);
bst1.insert(3);
bst1.insert(99);
bst1.insert(22);

let bst2 = new BST();
bst2.insert(23);
bst2.insert(45);
bst2.insert(16);
bst2.insert(37);
bst2.insert(3);
bst2.insert(99);
bst2.insert(22);

sameBST(bst1.root, bst2.root)
```

### 验证BST的合法性

如何验证一个BST的合法性，跟前面如何实现一个BST还是有关联的，在实现一个BST的时候，只要新加入一个节点就会跟左子树（或者右子树）上的所有节点值相比较。

而验证一个BST，跟实现BST的思路类似，比如判断一根节点的左子树，必须判断左子树中所有的节点都要比根节点小，除此之外，就是每个节点跟其左右子节点之间的比较。

**1. 循环递归的方式**

```javascript
/**
 * 验证树的合法性
 * @param node root
 */
function isValidBST(root) {

  if(root == null) return true;

  if(root.left) {
    let nodeLeft = root.left;

    while(nodeLeft.right) {
      nodeLeft = nodeLeft.right
    }
    if(nodeLeft.data <= root.data) return false;
  }

  if(root.right) {
    let nodeLeft = root.right;

    while(nodeLeft.left) {
      nodeLeft = nodeLeft.left
    }
    if(nodeLeft.data >= root.data) return false;
  }

  return isValidBST(root.left) && isValidBST(root.right)
}
```

**2. 纯递归的方式**

```javascript
function validBST(root) {
  return isValidBST(root, null, null);
}

function isValidBST(root, min, max) {

  if(root == null) return true;

  if(min !== null && min.data >= root.data) return false;

  if(max !== null && max.data <= root.data) return false;


  return isValidBST(root.left, min, root) && isValidBST(root.right, root, max)
}
```

### 二叉搜索树的镜像

二叉树的镜像定义(也是二叉树的交换)：交换节点的左右子节点，如下图：_来自LeetCode_

![BST_mirror](https://media.wangbaoqi.tech/assets/blog/algorithm/tree/BST_mirror.webp)


[LeetCode - 二叉树交换](https://leetcode-cn.com/problems/invert-binary-tree/), [LeetCode - 剑指 Offer 27. 二叉树的镜像](https://leetcode.cn/problems/er-cha-shu-de-jing-xiang-lcof/)这两道题是一个意思

如果采用递归的方式：

* 结束条件；当节点指向`null`，返回`null`.
* 递推公式（交换节点）；
  * 暂存左节点
  * 当前右节点赋值到左节点
  * 将暂存的左节点赋值到右节点
  * 返回当前节点

下面看代码：

```javascript
/**
 * 树的镜像
 * @param node root
 */
function mirrorBST(root) {

  // 结束条件
  if(root == null) return null;

  // 递推公式
  let tmp = root.left;
  root.left = mirrorBST(root.right);
  root.right = mirrorBST(tmp);
  return root;
}
```

### 对称二叉树

如下图

![BST_same](https://media.wangbaoqi.tech/assets/blog/algorithm/tree/BST_same.gif)


判断一个二叉树是是否对称，就要判断相对位置的子节点值是否相等。

#### 自顶向下的递归

分别递归二叉树的左右节点，如果当前节点的左节点和右节点相等，则继续向下递归，直到结束。

```javascript
function isSymmetric(root) {
  return check(root. root)
}

function check(leftNode, rightNode) {
  if(leftNode == null && rightNode == null) return true;
  if(leftNode == null || rightNode == null) return false;
  
  return leftNode.data == rightNode.data && 
          check(leftNode.left, rightNode.right) &&
          check(leftNode.right, rightNode.left)
}
```

#### 借用队列循环判断

![BST_same1](https://media.wangbaoqi.tech/assets/blog/algorithm/tree/BST_same\_1.gif)


类似于BFS层序遍历，借用队列来记录节点，这里将根节点的左节点和右节点先入队，判断两者是否相等，接着将当前左节点的左节点和当前右节点的右节点入队，以此类推，直到循环结束。

```javascript
function isSymmetric(root) {
  // 空节点对称
  if(root = null) return true;
  if(root.left == null && root.right == null) return true;
  
  let queue = [];
  
  queue.push(root.left);
  queue.push(root.right);
  
  while(queue.length) {
    const left = queue.shift();
    const right = queue.shift();
    
    if(left == null && right == null) continue;
    if(left == null || right == null) return false;
    if(left.data != right.data) return false;
    
    queue.push(left.left)
    queue.push(right.right)
    
    queue.push(left.right)
    queue.push(right.left)
  }
}
```

### 二叉搜索树的第K大节点

题目来自_LeetCode_，[剑指 Offer 54. 二叉搜索树的第k大节点](https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-di-kda-jie-dian-lcof/)。

要获取二叉搜索树中第K大的节点，可以间接的获取中序遍历后反转的第_k-1_的值

![BST_KNode](https://media.wangbaoqi.tech/assets/blog/algorithm/tree/BST_KNode.webp)

下面看代码：

```javascript
/**
 * 二叉搜索树的第K大节点
 * @param node root
 * @param int k
 */
function kthLargest(root, k) {
  let result = [];
  // 中序遍历
  function inOrder(root) {
    if(root !== null) {
      inOrder(root.left);
      result.push(root.data);
      inOrder(root.right);
    }
  }
  inOrder(root)
  return result.reverse()[k-1];
}
```

### 二叉树的深度

计算二叉树的深度，可以采用前面讲的树的遍历方式。

* DFS(深度优先遍历): 后序遍历
* BFS(广度优先遍历): 层序遍历

**DFS 后序遍历**

看下图示（来自LeetCode）

![DFS - depth](https://media.wangbaoqi.tech/assets/blog/algorithm/tree/BST_depth.webp)

递归方式：

* 递归结束条件 - 节点指向`null`，则深度为`0`
* 递归公式
  * 计算左子树的深度
  * 计算右子树的深度
  * 返回树的深度

```javascript
/**
 * 二叉树的深度 DFS 自底向上 递归
 * @param node root
 */
function depthBST(root) {
  // 结束条件
  if(root == null) return 0;
  // 递推公式
  return Math.max(depthBST(root.left), depthBST(root.right)) + 1
}
```

**BFS 层序遍历**

层序遍历也是广度优先遍历，树的层序遍历的过程：

需要栈来暂存每一层节点，每次循环将左右子树压入栈中，树的深度递加一次，直到栈为空

* 根节点为`null`，返回`0`
* 首次将`root`压入`stack`栈，进入遍历栈的过程
  * 将该节点的左子树和右子树压入临时栈`tmpStack`
  * 树深度自增
  * 将临时栈`tmpStack`赋值给`stack`中

看下面图示: 来自_LeetCode_

![bfs1](https://media.wangbaoqi.tech/assets/blog/algorithm/tree/BST_BFS.webp)

初始化，将整个树压入栈，初始化深度计数器

![bfs2](https://media.wangbaoqi.tech/assets/blog/algorithm/tree/BST_BFS1.webp)

遍历栈，此时栈中只有树一个节点，将左右子树压入临时栈中

![bfs3](https://media.wangbaoqi.tech/assets/blog/algorithm/tree/BST_BFS2.webp)

将临时栈赋值到stack中，计数器自增

![bfs4](https://media.wangbaoqi.tech/assets/blog/algorithm/tree/BST_BFS3.webp)

此时临时栈中压入子树的子节点，重复图三，知道节点为`null`，遍历结束。

下面看代码:

```javascript
/**
 * 二叉树的深度 BFS
 * @param node root
 */
function maxDepth_BFS(root) {
  let stack = [root], depth = 0;
  while(stack.length) {
    let tmp = [];

    for(let node of stack) {
      if(node.left !=  null) tmp.push(node.left)
      if(node.right != null) tmp.push(node.right)
    }
    stack = tmp;
    depth++;
  }
  return depth
}
```

### 二叉树的直径

![bst_diameter](https://media.wangbaoqi.tech/assets/blog/algorithm/tree/bst_diameter.webp)

从**二叉树的深度**可以看到，二叉树的直径等于左子树的深度加上右子树的深度再减去 `1`

$$
BSTDiameter = depth(root.left) + depth(root.right) - 1
$$

```javascript
const diameterOfBinaryTree = (root) => {
  let result = 0
  
  // 后序遍历
  const bstDepth = (root) => {
    if(root == null) return 0;  
    const L = bstDepth(root.left)
    const R = bstDepth(root.right)
    result = Math.max(result, L + R + 1)
    return Math.max(L, R) + 1
  }
  
  return result - 1
}
```



### 二叉树路径总和



### 二叉树的右视图

![bst-right](https://media.wangbaoqi.tech/assets/blog/algorithm/tree/bst-right.webp)

根据题意，可以用层序遍历来解决。

### 二叉树总结

从上述二叉树的结构以及其实现，包含了`left`、`right`以及`data`。由于二叉搜索树是一个特殊的二叉树结构，所以有了以下一系列对二叉树的操作，包括`节点插入(insert)`、`遍历二叉树`(中序、先序、后序)、`二叉树查找`(最小、最大以及特定值)、`二叉树节点删除`、`二叉树的节点计数`、`二叉树的深度`(深度遍历以及广度遍历)以及其他的操作，可以到[leetCode-二叉树](https://leetcode-cn.com/problemset/all/?search=%E4%BA%8C%E5%8F%89%E6%A0%91)查看。

#### 二叉树中算法思想

可以看到，在众多的二叉树算法中，用到最多的算法模式是**递归**的思想，当然也可以用**迭代**的方式解决。**递归**是纵向看待问题的，不会去看细节，也就是过程是如何处理的。而**迭代**是横向解决的，也就是需要注重细节的。

写了这么多的算法，怎么保证随着时间的推移而不会忘记，其他从中可以看出，这些算法也是有所谓的**框架**的，也就是常说的**套路**。

#### 二叉树Insert Frame

二叉树的实现，也就是节点**insert**，这个是二叉树的基本算法，根据二叉搜索树的特性，采用递归的方式，生成框架:

```javascript
/**
 * 节点构造函数 Node
 * @param data
 */
function Node(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}
/**
 * BST Insert
 * @param root
 * @param data
 */
function BSTInsert(root, data) {
  if(root == null) return new Node(data);

  if(root.data < data) return root.right = BSTInsert(root.right, data);

  if(root.data > data) return root.left = BSTInsert(root.left, data);
}
```