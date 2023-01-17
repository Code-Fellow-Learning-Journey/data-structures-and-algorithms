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
    current.next = node
  }

  // traverse a linked list and log the value of each node
  traverse() {
    let current = this.head;

    while (current) {
      // do the thing
      console.log(current.value);
      current = current.next;
    }
  }

  insert(value) {
    let node = new Node(value);
    node.next = this.head;
    this.head = node;
  }

  insertBefore(value, newValue) {
    let current = this.head;
    while (current.next !== null) {
      if (current.next.value === value) {
        let node = new Node(newValue);
        node.next = current.next;
        current = node;
        return;
      }
      return current;
    }
  }

  insertAfter(value, newValue) {
    let current = this.head;
    while (current.next !== null) {
      if (current.next.value === value) {
        let node = new Node(newValue);
        node = current.next;
        current.next = node;
        return;
      }
      return current;
    }
  }
}

let list = new LinkedList();
list.add('a');
list.add('b');
list.add('c');
list.add('d');
list.add('e');


console.log(JSON.stringify(list));
list.traverse();

module.exports = LinkedList;
