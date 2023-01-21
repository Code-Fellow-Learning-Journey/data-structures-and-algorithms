'use strict';

const LinkedList = require('./linkedList');

describe('Linked List', () => {
  let list = new LinkedList();
  it('accepts new nodes as expected', () => {
    list.add('a');
    list.add('b');
    list.add('c');
    // {a} -> {b} -> {c} -> null
    expect(list.head.value).toEqual('a');
    expect(list.head.next.value).toEqual('b');
    expect(list.head.next.next.value).toEqual('c');
  });
});

describe('Link List inser Before', () => {
  let list = new LinkedList();
  it('accepts new node as expectd', () => {
    list.addBefore(3, 'a');
    list.traverse();

    expect(list.head.value).toEqual(3);
    expect(list.head.next.value).toEqual('a');
    expect(list.head.next.next.value).toEqual('b');
    expect(list.head.next.next.next.value).toEqual('c');
  });
});

describe('Link List inser After', () => {
  let list = new LinkedList();
  it('accepts new node as expectd', () => {
    list.addAfter(3, 'a');
    list.traverse();

    expect(list.head.value).toEqual(3);
    expect(list.head.next.value).toEqual('a');
    expect(list.head.next.next.value).toEqual('b');
    expect(list.head.next.next.next.value).toEqual('c');
  });
});



