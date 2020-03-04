const { Node, BinaryTree, breadthFirst } = require('./breadth-first')

describe('breadthFirst()', () => {
  it('Returns null if the input tree is null.', () => {
    const tree = new BinaryTree;
    expect(tree.root).toBe(null)
  })
  it('Traverses tree breadth-first and returns array of node value in order they were encountered', () => {
    const tree1 = new BinaryTree(new Node(5, new Node(3, new Node(15), new Node(7)), new Node(13, new Node(500), new Node(20))));
    expect(breadthFirst(tree1)).toEqual([5, 3, 13, 15, 7, 500, 20]);
  })
})
