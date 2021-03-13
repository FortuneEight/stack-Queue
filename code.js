let log = console.log;
let cls = console.clear;

// Create a new stack
// const stack = new Stack();

// let item;

// console.clear();
// stack.push(1);
// stack.push(2);
// stack.push(3);
// item = stack.pop();
// stack.push(4);
// console.log(stack.peek());
// console.log(stack);



// Create a new Queue
// const queue = new Queue();

// let item;

// console.clear();
// queue.enqueue("First");
// queue.enqueue("Second");
// queue.enqueue("Third");
// item = queue.dequeue();
// console.log(queue, item);



// Create my version of an array

const arr = new MyArray();

cls();

arr.push(1);
arr.push(2);
arr.push(3);
arr.push(4);
arr.push(5);

arr.delete(2);

log(arr.display());