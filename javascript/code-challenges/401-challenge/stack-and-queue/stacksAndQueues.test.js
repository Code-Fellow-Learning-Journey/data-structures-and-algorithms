'use strict';

const { Queue, Stack } = require('./stackAndQueue');

describe('Stack Tests', () =>{
  it('Can successfully push onto a stack', () => {
    let stack = new Stack();
    stack.push('a');

    expect(stack.top.value).toEqual('a');
  });

  it('Can successfully push onto a stack', () => {
    let stack= new Stack();
    stack.push('a');
    stack.push('b');
    stack.push('c');

    expect(stack.top.value).toEqual('c');
    expect(stack.top.next.value).toEqual('b');
    expect(stack.top.nex.next.value).toEqual('a');
  });

  it('Can successfully empty a stack after multiple pops', () => {
    ('Can successfully push onto a stack', () => {
      let stack= new Stack();
      stack.push('a');
      stack.push('b');
      stack.push('c');

      expect(stack.top.value).toEqual('c');
      stack.pop();
      expect(stack.top.value).toEqual('b');
      stack.pop();
      expect(stack.top.value).toEqual('a');
      stack.pop();
      expect(stack.top).toBeNull();
  });

  it('Can successfully push and pop', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);

    expect(stack.top.value).toEqual(2);
    expect(stack.top.next.value).toEqual(1);
    expect(stack.top.next.next).toBeNull();
    stack.pop();
    expect(stack.top.value).toEqual(1);
    expect(stack.top.next).toBeNull();
    let expected = stack.pop();
    expect(expected).toEqual(1);
    expect(stack.top).toBeNull();
  });
});

describe('Queue', () => {
  it('can enqueue and dequeue', () => {
    let q = new Queue();
    q.enqueue(1);
    q.enqueue(2);
    expect(q.front.value).toEqual(1);
    expect(q.back.value).toEqual(2);
    let returnedValue = q.dequeue();
    expect(returnedValue).toEqual(1);
    expect(q.front.value).toEqual(2);
    expect(q.back.value).toEqual(2);
    q.dequeue()
    expect(q.front).toBeNull();
  });
});











// Can successfully push onto a stack
// Can successfully push multiple values onto a stack
// Can successfully pop off the stack
// Can successfully empty a stack after multiple pops
// Can successfully peek the next item on the stack
// Can successfully instantiate an empty stack
// Calling pop or peek on empty stack raises exception
// Can successfully enqueue into a queue
// Can successfully enqueue multiple values into a queue
// Can successfully dequeue out of a queue the expected value
// Can successfully peek into a queue, seeing the expected value
// Can successfully empty a queue after multiple dequeues
// Can successfully instantiate an empty queue
// Calling dequeue or peek on empty queue raises exception
