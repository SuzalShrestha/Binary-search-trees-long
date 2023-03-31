// Before starting, copy and paste your guided practice work from
// `binary-search-tree.js` into this file

// Your code here
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    // Your code here
    this.root = null;
  }

  insert(val, currentNode = this.root) {
    // Your code here
    let node = new TreeNode(val);
    if (!this.root) this.root = node;
    else {
      while (currentNode) {
        let currentValue = currentNode.val;
        if (currentValue > val) {
          if (!currentNode.left) {
            currentNode.left = node;
            break;
          } else {
            currentNode = currentNode.left;
          }
        } else {
          if (!currentNode.right) {
            currentNode.right = node;
            break;
          } else {
            currentNode = currentNode.right;
          }
        }
      }
    }
  }

  search(val) {
    // Your code here
    let currentNode = this.root;
    while (currentNode) {
      let currentValue = currentNode.val;
      if (currentValue === val) return true;
      if (currentValue > val) {
        currentNode = currentNode.left;
      }
      if (currentValue < val) {
        currentNode = currentNode.right;
      }
    }
    return false;
  }

  preOrderTraversal(currentNode = this.root) {
    // Your code here
    while (currentNode) {
      console.log(currentNode.val);
      if (currentNode.left) this.preOrderTraversal(currentNode.left);
      if (currentNode.right) this.preOrderTraversal(currentNode.right);
      break;
    }
  }
  inOrderTraversal(currentNode = this.root) {
    // Your code here
    while (currentNode) {
      if (currentNode.left) this.inOrderTraversal(currentNode.left);
      console.log(currentNode.val);
      if (currentNode.right) this.inOrderTraversal(currentNode.right);
      break;
    }
  }

  postOrderTraversal(currentNode = this.root) {
    // Your code here
    while (currentNode) {
      if (currentNode.left) this.postOrderTraversal(currentNode.left);
      if (currentNode.right) this.postOrderTraversal(currentNode.right);
      console.log(currentNode.val);
      break;
    }
  }

  // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    // your code here
    // initialize a queue with the root node
    let queue = [];
    queue.push(this.root);
    // while the queue is not empty
    while (queue.length > 0) {
      // print and remove first node in queue
      let node = queue.shift();
      console.log(node.val);
      // if the node has a left node
      // push the left node on the back of the queue
      if (node.left) queue.push(node.left);
      // if the node has a right node
      // push the right node on the back of the queue
      if (node.right) queue.push(node.right);
    }
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    // your code here
    // initialize a stack with the root node
    let currentNode = this.root;
    let stack = [];
    stack.push(currentNode);
    // while the stack is not empty
    while (stack.length > 0) {
      // print and remove first node in stack
      let node = stack.pop();
      console.log(node.val);
      // if the node has a left node
      // push the left node on the back of the stack
      if (node.left) stack.push(node.left);
      // if the node has a right node
      // push the right node on the back of the stack
      if (node.right) stack.push(node.right);
    }
  }
}
module.exports={BinarySearchTree,TreeNode}