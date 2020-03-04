'use strict';

class Node {
  constructor(value = null, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}


class BinaryTree {
  constructor(root = null) {
    this.root = root;
    this.storage = [];
  }

  preOrder(root) {
    if (!root) {
      return 'Where\'s the node!';
    }
    this.storage.push(root.value);

    if (root.left !== null) {
      this.preOrder(root.left)
    }
    if (root.right !== null) {
      this.preOrder(root.right)
    }
    return this.storage;
  }
  
  inOrder(root) {
    if(!root) {
      return 'Where\'s the node!';
    }
    if (root.left !== null) {
      this.inOrder(root.left);
    }
    this.storage.push(root.value);
    if (root.right !== null) {
      this.inOrder(root.right)
    }
    return this.storage;
  }
  postOrder(root) {
    if (!root) {
      return 'Where\'s the node!';
    }
    if (root.left !== null) {
      this.postOrder(root.left);
    }
    if (root.right !== null) {
      this.postOrder(root.right)
    }
    this.storage.push(root.value)
    return this.storage;
  }
}

class BinarySearchTree extends BinaryTree {
  add(value) {
    const node = new Node(value);
    if (!this.root) {
      return 'Where\'s the node!';
    }
    let current = this.root;
    while (current) {
      if (node.value < current.value && current.left) {
        current = current.left;
      } else if (node.value > current.value && current.right) {
        current = current.right;
      } else if (node.value < current.value) {
        current.left = node;
      } else if (node.value > current.value) {
        current.right = node;
      }
    }

  }

}

module.exports = { Node, BinaryTree, BinarySearchTree }
