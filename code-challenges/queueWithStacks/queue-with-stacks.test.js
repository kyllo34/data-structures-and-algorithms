'use strict';

const Stack = require('./queue-with-stacks.js')

// Stack should be able to push, pop, and peek
describe('Stack', () => {
  describe('peek()', () => {
    describe('When the stack is empty', () => {
      const testStack = new Stack();
      it('Returns null', () => {
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
    describe('Returns the new length of the stacks storage.', () => {
      expect(testStack.push(3)).toEqual(testStack.storage.length);
    })
    describe('Increment the length of the stacks storage.', () => {
      expect(testStack.storage.length).toEqual(1);
    })
    describe('Push the new value to the beggining of the stacks storage.', () => {
      expect(testStack.storage[0]).toEqual(3);
    })
  })
})