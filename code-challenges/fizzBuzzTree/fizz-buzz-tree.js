'use strict';

class Tree {
  constructor(root) {
    this.root = root;
  }
}
class Node {
  constructor(value = null, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
function traverse(rootA, rootB) {
  fizzBuzz(rootA, rootB);
  if (rootA.left !== null) {
    rootB.left = new Node();
    traverse(rootA.left, rootB.left)
  }
  if (rootA.right !== null) {
    rootB.right = new Node();
    traverse(rootA.right, rootB.right)
  }
}
function fizzBuzz(rootA, rootB) {
  if (rootA.value % 3 === 0 && rootA.value % 5 === 0) {
    rootB.value = 'FizzBuzz';
  } else if (rootA.value % 3 === 0) {
    rootB.value = 'Fizz';
  } else if (rootA.value % 5 === 0) {
    rootB.value = 'Buzz';
  } else {
    rootB.value = rootA.value.toString();
  }
}

function fizzBuzzTree(treeA) {
  const rootA = treeA.root;
  const treeB = new Tree(new Node);
  const rootB = treeB.root;
  traverse(rootA, rootB);
  return treeB;
}



module.exports = { fizzBuzzTree, Node, Tree };
