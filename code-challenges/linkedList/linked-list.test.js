class Node {
  constructor (value, next) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insert(value) {
      let node = new Node(value);
      if (!this.head) {
        this.head = node;
      } else {
        let originalHead = this.head;
        this.head = node;
        this.head.next = originalHead;
      }

  }
  includes(val) {
    if (this.head !== null && val !== null) {
      let valid = false
      let current = this.head;
      while(current.next !== null) {
        if(current.next.value === val) {
          valid = true;
          break;
        } else if (current.value === val) {
          valid = true;
          break;
        } else if (current.next.next === val) {
          valid = true;
          break;
        } else {
          current = current.next;
        }
      }
      return valid;
    } else if (this.head === null) {
      console.error('Head is null');
    } else {
      console.error('There is no value');
    }
  }
  toString() {
    if (this.head !== null) {
      let str = ''
      let current = this.head;
      while(current.next !== null) {
        str = `${str}{ ${current.value} } -> `;
        current = current.next;
      }
      str = `${str} NULL`;
      return str;
    } else {
      console.error('toString() did not work.');
    }
  }
}

describe('Testing Linked-List', () => {
  test('Should instantiate an empty linked list.' , () => {
    const list = new LinkedList();
    expect(list.head).toStrictEqual(null);
  });
  test('Should insert into the linked list.', () => {
    const list = new LinkedList();
    for( let i = 0; i < 6; i++) {
      list.insert(i);
      expect(list.head.value).toStrictEqual(i);
    }
  })
  test('The head property should properly point to the first node in the linked list.', () => {
    const list = new LinkedList();
    list.insert(2);
    list.insert(3);  
    expect(list.head.next.value).toEqual(2);
  })
  test('Should properly insert multple nodes into the linked list.', () => {
    const list = new LinkedList();
    for(let i = 0; i < 5; i++) {
      list.insert(i);
    }
    expect(list.head.next.next.next.next.value).toStrictEqual(0);
  })
  test('Should return true when finding a value within the linked list that exists.', () => {
    const list = new LinkedList();
    for(let i = 0; i < 10; i++) {
      list.insert(i);
    }
    for(let i = 0; i < 10; i++) {
      expect(list.includes(i)).toBe(true);
    }
  })
  test('Should return false when searching for a value in the linked list that does not exist.', () => {
    const list = new LinkedList();
    for(let i = 0; i < 10; i++) {
      list.insert(i);
    }
    for(let i = 0; i < 10; i++) {
      expect(list.includes(i + 300)).toBe(false);
    }
  })
  test('Should properly return a collection of all the values that exist in the linked list.', () => {
    const list = new LinkedList();
    for(let i = 0; i < 10; i++) {
      list.insert(i);
    }
    expect(list.toString()).toStrictEqual('{ 9 } -> { 8 } -> { 7 } -> { 6 } -> { 5 } -> { 4 } -> { 3 } -> { 2 } -> { 1 } ->  NULL');
  })
})
