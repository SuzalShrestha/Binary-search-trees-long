const { BinarySearchTree, TreeNode } = require("./binary-search-tree.js");
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST(rootNode) {
  // Your code here
  let currentNode = rootNode;
  while (currentNode.left) {
    currentNode = currentNode.left;
  }
  return currentNode.val;
}

function findMaxBST(rootNode) {
  // Your code here
  let currentNode = rootNode;
  while (currentNode.right) {
    currentNode = currentNode.right;
  }
  return currentNode.val;
}

function findMinBT(rootNode) {
  // Your code here
  let min = rootNode.val;
  let queue = [rootNode];
  while (queue.length > 0) {
    let currentNode = queue.shift();
    if (currentNode.val < min) {
      min = currentNode.val;
    }
    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }
  }
  return min;
}

function findMaxBT(rootNode) {
  // Your code here
  let max = rootNode.val;
  let queue = [rootNode];
  while (queue.length > 0) {
    let currentNode = queue.shift();
    if (currentNode.val > max) {
      max = currentNode.val;
    }
    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }
  }
  return max;
}

function getHeight(rootNode) {
  // Your code here
  if (!rootNode) return -1;
  let left = rootNode.left;
  let right = rootNode.right;
  if (!left && !right) return 0;
  return 1 + Math.max(getHeight(left), getHeight(right));
}

function balancedTree(rootNode) {
  // Your code here
  if (!rootNode) return true;
  let left = rootNode.left;
  let right = rootNode.right;
  //base case
  if (!left && !right) return true;
  let leftHeight = getHeight(left);
  let rightHeight = getHeight(right);
  //if not balanced tree
  if (Math.abs(leftHeight - rightHeight) > 1) return false;
  return balancedTree(left) && balancedTree(right); //recursive call
}

function countNodes(rootNode) {
  // Your code here
  if (!rootNode) return 0;
  let leftCount = countNodes(rootNode.left);
  let rightCount = countNodes(rootNode.right);
  return 1 + leftCount + rightCount;
}

function getParentNode(rootNode, target) {
  // Your code here
  if (rootNode.val === target) return null;
  let queue = [rootNode];
  while (queue.length > 0) {
    let currentNode = queue.shift();
    if (currentNode.left && currentNode.left.val === target) return currentNode;
    if (currentNode.right && currentNode.right.val === target)
      return currentNode;
    if (currentNode.left) queue.push(currentNode.left);
    if (currentNode.right) queue.push(currentNode.right);
  }
}

function inOrderPredecessor(rootNode, target) {
  // Your code here
  let currentNode = rootNode;
}

function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent
  // Undefined if the target cannot be found
  // Set target based on parent
  // Case 0: Zero children and no parent:
  //   return null
  // Case 1: Zero children:
  //   Set the parent that points to it to null
  // Case 2: Two children:
  //  Set the value to its in-order predecessor, then delete the predecessor
  //  Replace target node with the left most child on its right side,
  //  or the right most child on its left side.
  //  Then delete the child that it was replaced with.
  // Case 3: One child:
  //   Make the parent point to the child
}

module.exports = {
  findMinBST,
  findMaxBST,
  findMinBT,
  findMaxBT,
  getHeight,
  countNodes,
  balancedTree,
  getParentNode,
  inOrderPredecessor,
  deleteNodeBST,
};
