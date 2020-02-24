'use strict';

const {Stack, PseudoQueue } = require('./queue-with-stacks.js')

describe('PseudoQueue', () => {
  describe('enqueue()', () => {
    const pseudoQueue = new PseudoQueue();
    pseudoQueue.stack1.storage = [20, 15, 10];
    it('Adds the new value to the end of the psuedoqueue.', () => {
      pseudoQueue.enqueue(5);
      expect(pseudoQueue.stack2.storage[3]).toEqual(5);
    })
  })
  describe('dequeue()', () => {
    const pseudoQueue = new PseudoQueue();
    pseudoQueue.stack1.storage = [20, 15, 10, 5];
    it('Removes value from the end of the pseudoQueue.', () => {
      pseudoQueue.dequeue();
      expect(pseudoQueue.stack2.storage).toEqual([20, 15, 10]);
    })
  })
})





// Stack should be able to push, pop, and peek
describe('Stack', () => {
  describe('peek()', () => {
    describe('When the stack is empty', () => {
      const testStack = new Stack();
      xit('Returns null', () => {
        expect(testStack.peek()).toBe(null);
      })
    })
    describe('When the stack is populated', () => {
      const testStack = new Stack();
      testStack.storage = [1,2,3];
      it('Returns the 1st value in the stacks storage.', () => {
        expect(testStack.peek()).toEqual(testStack.storage[0]);
      })
    })
  })
  describe('push()', () => {
    const testStack = new Stack;
    xit('Returns the new length of the stacks storage.', () => {
      expect(testStack.push(3)).toEqual(testStack.storage.length);
    })
    xit('Increment the length of the stacks storage.', () => {
      expect(testStack.storage.length).toEqual(1);
    })
    xit('Adds the new value to the beggining of the stacks storage.', () => {
      expect(testStack.storage[0]).toEqual(3);
    })
  })
  describe('pop()', () => {
    const testStack = new Stack;
    xit('When the stack is empty.', () => {
      it('Returns undefined.' , () => {
        expect(testStack.pop()).toBeUndefined();
      })
    })
    xit('Returns the value that was removed from the top off the stacks storage', () => {
      testStack.storage = [1,2];
      expect(testStack.pop()).toEqual(1);
    })
    xit('Decrements the length of the stacks storage.', () => {
      expect(testStack.storage.length).toEqual(1);
    })
    xit('Removes the top value from the stacks storage.', () => {
      expect(testStack.storage).toEqual([2]);
    })
  })
})