'use strict';

const { Node, BinaryTree, BinarySearchTree } = require('./tree');
// const tree = new BinaryTree(new Node('A', new Node('B', new Node('D'), new Node('E')), new Node('C', new Node('F'), new Node('G'))) )

describe('Binary Search Tree class', () => {
  it('Instantiates empty tree', () => {
    const tree = new BinarySearchTree;
    expect(tree.root).toBe(null);
  })
  it('Creates')
})













describe('Binary Tree class', () => {
  it('Instantiates empty tree.', () => {
    const tree = new BinaryTree;
    expect(tree.root).toBe(null);
  })
  it('Instantiates a tree with a single root node', () => {
    const node = new Node('A');
    const tree = new BinaryTree(node);
    expect(tree.root).toEqual(node)
  })
  it('Adds a left and right child to a single root node.', () => {
    const nodeB = new Node('B');
    const nodeC = new Node('C');
    const nodeA = new Node('A', nodeB, nodeC);
    const tree = new BinaryTree(nodeA);
    expect(tree.root.left).toEqual(nodeB);
    expect(tree.root.right).toEqual(nodeC)
  })
  it('Returns a collection from a preorder traversal', () => {
    const tree = new BinaryTree(new Node('A', new Node('B', new Node('D'), new Node('E')), new Node('C', new Node('F'), new Node('G'))));
    expect(tree.preOrder(tree.root)).toEqual(['A', 'B', 'D', 'E', 'C', 'F','G'])
  })
  it('Returns a collection from inOrder traversal', () => {
    const tree = new BinaryTree(new Node('A', new Node('B', new Node('D'), new Node('E')), new Node('C', new Node('F'), new Node('G'))));
    expect(tree.inOrder(tree.root)).toEqual(['D', 'B', 'E', 'A', 'F', 'C','G'])
  })
  it('Returns a collection from postOrder traversal.', () => {
    const tree = new BinaryTree(new Node('A', new Node('B', new Node('D'), new Node('E')), new Node('C', new Node('F'), new Node('G'))));
    expect(tree.postOrder(tree.root)).toEqual(['D', 'E', 'B', 'F', 'G', 'C','A'])

  })
})
