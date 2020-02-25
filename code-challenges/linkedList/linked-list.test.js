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
  kthFromEnd(k) {
    const valArray = [];
    let current = this.head;
    if(!this.head || k < 0) {
      return 'EXCEPTION';
    } else {
      while(current !== null) {
        valArray.unshift(current.value);
        if (valArray.length > k + 1) {
          valArray.pop();
        }
        current = current.next;
      }
      if (k < valArray.length) {
        console.log(valArray)
        return valArray[k];
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

function mergeLists(list1, list2) {
  let current1 = list1.head;
  let current2 = list2.head;
  let nodeHolderA;
  let nodeHolderB;
  // loop through lists
  while(current1.next || current2.next) {
    // if one of the lists is longer than the other
    if (current1.next && current2.next) {
      // hold the next nodes
      nodeHolderA = current1.next;
      nodeHolderB = current2.next;
      // merge the list at this point
      current2.next = nodeHolderA;
      current1.next = current2;
      // move to next nodes
      current1 = nodeHolderA;
      current2 = nodeHolderB;
      // if the 1st list is shorter
    } else if (current1.next === null) {
      current1.next = current2;
      break;
    } else if (current2.next === null) {
      current2.next = current1.next;
      current1.next = current2;
      break;
    }
  }
  if(!current1.next && !current2.next) {
    current1.next = current2;
  }
  return list1;
}



// Test Linked list
describe('Testing Linked-List', () => {
  test('Should successfully merge two lists of equal length.', () => {
    list1 = new LinkedList();
    list2 = new LinkedList();
    list1.append(1);
    list1.append(3);
    list1.append(2);
    list2.append(5);
    list2.append(9);
    list2.append(4);
    mergeLists(list1, list2);
  })

  //   test('Should fail when k is greater than the length of the linked list.', () => {
  //     const list = new LinkedList;
  //     for(let i = 0; i < 3; i++) {
  //       list.append(i);
  //     }
  //     expect(list.kthFromEnd(5)).toBe('EXCEPTION');
  //   });
  //   test('Should fail when k is equal to the length of the linked list.', () => {
  //     const list = new LinkedList;
  //     for(let i = 0; i < 3; i++) {
  //       list.append(i);
  //     }
  //     expect(list.kthFromEnd(3)).toBe('EXCEPTION');
  //   });
  //   test('Should fail when k is not a positive integer.', () => {
  //     const list = new LinkedList;
  //     for(let i = 0; i < 3; i++) {
  //       list.append(i);
  //     }
  //     expect(list.kthFromEnd(-2)).toBe('EXCEPTION');
  //   });
  //   test('Should fail where the linke ist is of a size 1.', () => {
  //     const list = new LinkedList;
  //     list.append(1);
  //     expect(list.kthFromEnd(1)).toBe('EXCEPTION');
  //   });
  //   test('Should return the kth node value where k is in the middle of the linked list', () => {
  //     const list = new LinkedList;
  //     for(let i = 0; i < 3; i++) {
  //       list.append(i);
  //     }
  //     expect(list.kthFromEnd(1)).toStrictEqual(1);
  //   });
  //   test('Should instantiate an empty linked list.' , () => {
  //     const list = new LinkedList();
  //     expect(list.head).toStrictEqual(null);
  //   });
  //   test('Should insert into the linked list.', () => {
  //     const list = new LinkedList();
  //     for( let i = 0; i < 6; i++) {
  //       list.insert(i);
  //       expect(list.head.value).toStrictEqual(i);
  //     }
  //   })
  //   test('The head property should properly point to the first node in the linked list.', () => {
  //     const list = new LinkedList();
  //     list.insert(2);
  //     list.insert(3);
  //     expect(list.head.next.value).toEqual(2);
  //   })
  //   test('Should properly insert multple nodes into the linked list.', () => {
  //     const list = new LinkedList();
  //     for(let i = 0; i < 5; i++) {
  //       list.insert(i);
  //     }
  //     expect(list.head.next.next.next.next.value).toStrictEqual(0);
  //   })
  //   test('Should return true when finding a value within the linked list that exists.', () => {
  //     const list = new LinkedList();
  //     for(let i = 0; i < 10; i++) {
  //       list.insert(i);
  //     }
  //     for(let i = 0; i < 10; i++) {
  //       expect(list.includes(i)).toBe(true);
  //     }
  //   })
  //   test('Should return false when searching for a value in the linked list that does not exist.', () => {
  //     const list = new LinkedList();
  //     for(let i = 0; i < 10; i++) {
  //       list.insert(i);
  //     }
  //     for(let i = 0; i < 10; i++) {
  //       expect(list.includes(i + 300)).toBe(false);
  //     }
  //   })
  //   test('Should properly return a collection of all the values that exist in the linked list.', () => {
  //     const list = new LinkedList();
  //     for(let i = 0; i < 10; i++) {
  //       list.insert(i);
  //     }
  //     expect(list.toString()).toStrictEqual('{ 9 } -> { 8 } -> { 7 } -> { 6 } -> { 5 } -> { 4 } -> { 3 } -> { 2 } -> { 1 } ->  NULL');
  //   })
  // })

// // Testing for 2 insertions challenge
// describe('Testing 2 insertions', () => {
//   test('Should successfully add a node to the end of the linked list.', () => {
//     const list = new LinkedList();
//     list.append(1);
//     expect(list.head.value).toStrictEqual(1);
//     list.append(3);
//     list.append(2);
//     list.append(5);
//     expect(list.head.next.next.next.value).toStrictEqual(5);
//   });
//   test('Should successfully add multiple nodes to the end of the linked list.', () => {
//     const list = new LinkedList();
//     list.append(1);
//     expect(list.head.value).toStrictEqual(1);
//     list.append(3);
//     list.append(2);
//     list.append(5);
//     expect(list.head.next.next.next.value).toStrictEqual(5);
//   });
//   test('Should successfully insert a node before a node located at in the middle of a linked list.', () => {
//     const list = new LinkedList;
//     for(let i = 0; i < 3; i++) {
//       list.append(i);
//     }
//     list.insertBefore(1, 9);
//     expect(list.head.next.value).toStrictEqual(9);
//   }) ;
//   test('Should successfully insert a node before the first node of a linked list.', ()=> {
//     const list = new LinkedList;
//     list.head = new Node(3)
//     list.insertBefore(3, 5);
//     expect(list.head.value).toStrictEqual(5);
//   });
//   test('Should successfully insert after a node in the middle of the linked list.', ()=> {
//     const list = new LinkedList;
//     for(let i = 0; i < 3; i++) {
//       list.append(i);
//     }
//     list.insertAfter(1, 9);
//     expect(list.head.next.next.value).toStrictEqual(9);
//   });
//   test('Should successfully insert a node after the last node of the linked list.', ()=> {
//     const list = new LinkedList;
//     for(let i = 0; i < 3; i++) {
//       list.append(i);
//     }
//     list.insertAfter(2, 9);
//     expect(list.head.next.next.next.value).toStrictEqual(9);
//   });
});

