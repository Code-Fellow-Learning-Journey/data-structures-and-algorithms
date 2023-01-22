'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // add a node to the end of the linked list
  append(value) {
    let node = new Node(value);

    // if no head exists, we assign the new node as head and we are done
    if (!this.head) {
      this.head = node;
      return;
    }

    // traverse the linked list and add the new node to the end
    let current = this.head;

    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }



  insert(value) {
    let node = new Node(value);
    node.next = this.head;
    this.head = node;
  }

  insertBefore(value, newValue) {
    if (!this.head) {
      throw new Error('Link List Empty');
    }
    if (this.head.value === value) {
      this.insert(newValue);
      return;
    }

    let current = this.head;

    while (current) {
      if (current.next.value === value) {
        let node = new Node(newValue);
        node = current.next;
        current.next = node;
        return;
      }
      current = current.next;
    }
  }

  insertAfter(value, newValue) {
    if (!this.head) {
      throw new Error('Link List Empty');
    }

    let current = this.head;

    while (current) {
      if (current.value === value) {
        let node = new Node(newValue);
        node = current.next;
        current.next = node;
      }
      current = current.next;
    }
  }

  kthFromEnd(k){
    let offset = this.head;
    let nBehind = this.head;

    for(let i = 0; i < k; i++){
      offset = offset.next;
    }

    while(offset.next){
      offset = offset.next;
      nBehind = nBehind.next;
    }

    return nBehind.value;
  }
}




let list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);


// console.log(JSON.stringify(list));
list.traverse();

// list.insertBefore(3, 'a');
// list.insertAfter(5, 'a');


console.log('kthFromEnd Works!!!!', list.kthFromEnd(2));
console.log('include result', list.includes(3));
console.log(list.toString());


module.exports = LinkedList;
