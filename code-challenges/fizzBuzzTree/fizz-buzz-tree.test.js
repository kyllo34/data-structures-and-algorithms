'use strict';

const { fizzBuzzTree, Node, Tree } = require('./fizz-buzz-tree');

describe('fizzBuzzTree()', () => {
  it('Returns a new modified tree', () => {
    const tree1 = new Tree(new Node(5, new Node(3, new Node(15), new Node(7)), new Node(13, new Node(500), new Node(20))));
    const tree2 = new Tree(new Node('Buzz', new Node('Fizz', new Node('FizzBuzz'), new Node('7')), new Node('13', new Node('Buzz'), new Node('Buzz'))));
    expect(fizzBuzzTree(tree1)).toEqual(tree2);
  })
})

