class Node {
  constructor (value) {
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
      if (this.head === null) {
        this.head = node;
      } else if (this.head !== null & value !== null) {
        let originalHead = this.head;
        this.head = node;
        this.head.next = originalHead;
      } else {
        console.error('There is no value');
      }
  }
  insertBefore(value, newVal) {
    // if the head contains the value then we use insert to replace the head with the new node
    let current = this.head;
    if (current.value === value) {
      this.insert(newVal);
    } else {
      const node = new Node(newVal);
      while (current.next && current.next.value !== value) {
        current = current.next;
      }
      if (current.next === null) {
        return 'EXCEPTION';
      }   
      current.next = node;
    }     
  }
  insertAfter(value, newVal) {
    let current = this.head
    if (current.value === value) {
      this.append(newVal);
    } else {
      const node = new Node(newVal);
      while (current.value !== value && current.next) {
        current = current.next;
      }
      if (current.value === value) {
        current.next = node;
      } else {
        return 'EXCEPTION';
      }
    }
  }
  append(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
    } else if (this.head !== null & val !== null) {
      let current = this.head;
      while(current.next !== null) {
        current = current.next;
      }
      current.next = node;
    } else {
      console.error('There is no value.');
    }
  }
  includes(val) {
    if (this.head !== null && val !== null) {
      let valid = false;
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
      console.error('There is no Head.');
    } else {
      console.error('There is no value.');
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





// Test Linked list
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

// Testing for 2 insertions challenge
describe('Testing 2 insertions', () => {
  test('Should successfully add a node to the end of the linked list.', () => {
    const list = new LinkedList();
    list.append(1);
    expect(list.head.value).toStrictEqual(1);
    list.append(3);
    list.append(2);  
    list.append(5); 
    expect(list.head.next.next.next.value).toStrictEqual(5);
  });
  test('Should successfully add multiple nodes to the end of the linked list.', () => {
    const list = new LinkedList();
    list.append(1);
    expect(list.head.value).toStrictEqual(1);
    list.append(3);
    list.append(2);  
    list.append(5); 
    expect(list.head.next.next.next.value).toStrictEqual(5);
  });
  test('Should successfully insert a node before a node located at in the middle of a linked list.', () => {
    const list = new LinkedList;
    for(let i = 0; i < 3; i++) {
      list.append(i);
    }
    list.insertBefore(1, 9);
    console.log(list)
    expect(list.head.next.value).toStrictEqual(9);
  }) ;
  test('Should successfully insert a node before the first node of a linked list.', ()=> {
    const list = new LinkedList;
    list.head = new Node(3)
    list.insertBefore(3, 5);
    expect(list.head.value).toStrictEqual(5);
  });
  test('Should successfully insert after a node in the middle of the linked list.', ()=> {
    const list = new LinkedList;
    for(let i = 0; i < 3; i++) {
      list.append(i);
    }
    list.insertAfter(1, 9);
    console.log(list)
    expect(list.head.next.next.value).toStrictEqual(9);
  });
  test('Should successfully insert a node after the last node of the linked list.', ()=> {
    const list = new LinkedList;
    for(let i = 0; i < 3; i++) {
      list.append(i);
    }
    list.insertAfter(2, 9);
    console.log(list)
    expect(list.head.next.next.next.value).toStrictEqual(9);
  });
});

