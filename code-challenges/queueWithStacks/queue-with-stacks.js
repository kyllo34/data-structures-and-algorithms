'use strict';

class Stack {
  // instantiates Stack with empty storage
  constructor() {
    this.storage = [];
  }
  // Returns the value at the top of the stack
  peek() {
    return this.storage.length ? this.storage[0] : null;
  }
// pushes new value to top of stack
  push(value) {
    return this.storage.unshift(value);
  }
// removes first element from storage
  pop() {
    return this.storage.length === 0 ? undefined : this.storage.shift();
  }
}

class PseudoQueue {
  constructor(stack1 = new Stack, stack2 = new Stack) {
    this.stack1 = stack1;
    this.stack2 = stack2;
  }
  
  enqueue(value) {
    for (let i = 0; i < this.stack1.storage.length; i ++) {
      this.stack2.storage.push(this.stack1.storage[i]);
    }
    this.stack2.storage.push(value);
  }

  dequeue() {
    for (let i = 0; i < this.stack1.storage.length; i++) {
      this.stack2.storage.push(this.stack1.storage[i]);
    }
    this.stack2.storage.pop();
  }

}

module.exports = {Stack, PseudoQueue } ;