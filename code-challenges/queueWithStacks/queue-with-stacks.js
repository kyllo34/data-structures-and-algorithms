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

  pop(value) {

  }
}

module.exports = Stack ;