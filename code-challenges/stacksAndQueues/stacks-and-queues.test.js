'use strict';

const { Node, Queue, Stack } = require('./stacks-and-queues.js');

describe('Stack class', () => {
  it('Instantiates an empty Stack', () => {
    const stack = new Stack;
    expect(stack.top).toBe(null);
  })
  describe('push()', () => {
    const stack = new Stack;
    it('Adds a node with the value to the top of the stack.', () => {
      stack.push(5);
      expect(stack.top.value).toEqual(5);
    })
    it('Adds multiple nodes to the stack.', () => {
      stack.push(4)
      expect(stack.top.next.value).toEqual(5);
    })
  })
  describe('pop()', () => {
    const stack = new Stack;
    stack.push(4);
    stack.push(5);
    it('Removes the node at the top of the stack', () => {
      stack.pop();
      expect(stack.top.value).toEqual(4);
    })
    it ('Empties a stack after multiple pops.', () => {
      stack.pop();
      expect(stack.isEmpty()).toBe(true);
    })
  })
  describe('peek()', () => {
    const stack = new Stack;
    it('Returns the value of the node at the top of the stack.', () => {
      stack.push(4);
      expect(stack.peek()).toEqual(4);
    })
  })
});

describe('Queue class', () => {
  it('Instantiates an empty queue.', () => {
    const queue = new Queue;
    expect(queue.front).toBe(null);
  })
  describe('peek()', () => {
    it('Returns value from beginning of queue.', () => {
      const queue = new Queue;
      queue.enqueue(5);
      expect(queue.peak()).toEqual(5);
    })
  })
  describe('enqueue()', () => {
    it('Adds a new node with a value to the end of the queue.', () => {
      const queue = new Queue;
      queue.front = new Node(1);
      queue.enqueue(10)
      expect(queue.front.next.value).toEqual(10);
    })
    it('Adds multiple nodes with values to the end of the queue.', () => {
      const queue = new Queue
      queue.enqueue(15);
      queue.enqueue(25);
      expect(queue.front.next.value).toEqual(25);
    })
  })
  describe('isEmpty()', () => {
    it('Returns true when queue is empty.', () => {
      const queue = new Queue;
      expect(queue.isEmpty()).toBe(true);
    })
  })
  describe('dequeue()', () => {
    it('Returns the value of the removed node.', () => {
      const queue = new Queue;
      queue.enqueue(15);
      queue.enqueue(25);
      expect(queue.dequeue()).toEqual(15);
    })
    it('Empties a queue after multiple dequeues.', () => {
      const queue = new Queue;
      queue.enqueue();
      queue.dequeue();
      expect(queue.isEmpty()).toBe(true);
    })
  })
})
