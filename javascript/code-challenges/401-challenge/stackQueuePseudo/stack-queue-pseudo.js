
class PseudoQueue {

  constructor() {

    this.stack1 = [];

    this.stack2 = [];

  };

  enqueue(element) {

    this.stack1.push(element);

    console.log('Stack-1 elements are in the queue: ', this.stack1);

  }

  dequeue() {

    if (this.stack2.length === 0) {

      if (this.stack1.length === 0) {

        console.log(

          'Dequeue not possible because queue is empty..');

      }

      while (this.stack1.length > 0) {

        let x = this.stack1.pop();

        this.stack2.push(x);

      }

    }

    console.log('Element after Dequeue: ' + this.stack2.pop());

  }

}

let q = new PseudoQueue;

q.enqueue(1);

q.enqueue(2);

q.enqueue(3);

q.enqueue(4);

q.dequeue();

q.dequeue();

console.log(q);

