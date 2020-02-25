'use strict';
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }
  // adds a node with a value to the top of the stack storage
  push(value) {
    const oldTop = this.top;
    this.top = new Node(value)
    this.top.next = oldTop;
  }
  // Removes the node from the top of the stack
  pop() {
    if (!this.top) {
      this.top = null
    } else {
      this.top = this.top.next;
    }
  }
  // returns whether stack is empty or not
  isEmpty() {
    return this.top === null ? true : false;
  }
  // returns the value of the top node in the stack
  peek() {
    return this.top.value;
  }
}

class Queue {
  constructor() {
    this.front = null;
  }
  enqueue(value) {
    const node = new Node(value);
    if (!this.front) {
      this.front = node;
    } else {
      let current = this.front;
      while(current.next !== null) {
        current = current.next;
      }
      current.next = node;
    }
  }
  peak() {
    return this.front === null ? null : this.front.value;
  }
  dequeue() {
    const origFront = this.front;
    this.front = origFront.next;
    return origFront.value;
  }
  isEmpty() {
    return this.front === null ? true : false;
  }
}

module.exports = { Node, Stack, Queue };
