class Node {
  constructor(value = null, left = null, right = null) {
    this.right = right;
    this.left = left;
    this.value = value;
  }
}


class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  findMaximumValue() {
    return this.preOrderIsh(this.root, -Infinity)
  }
  preOrderIsh(root, max) {
    if(root.value > max) {
      max = root.value;
    }
    if(root.left !== null) {
      max = this.preOrderIsh(root.left, max);
    }
    if(root.right !== null) {
      max = this.preOrderIsh(root.right, max)
    }
    return max
  }

}

function breadthFirst(tree) {
  let queue = [];
  const newArray = [];
  let current;
  queue.push(tree.root);
  while(queue[0]) {
    current = queue.shift();
    newArray.push(current.value);
    if(current.left !== null) {
      queue.push(current.left);
    }
    if(current.right !== null) {
      queue.push(current.right)
    }
  }
  return newArray;
}

module.exports = { Node, BinaryTree, breadthFirst }