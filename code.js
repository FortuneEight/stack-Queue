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

// const arr = new MyArray();

// cls();

// arr.push(1);
// arr.push(2);
// arr.push(3);
// arr.push(4);
// arr.push(5);
// arr.push(6);

// log(arr.display());


// Create a Linked List

const linkedList = new LinkedList();

cls();

linkedList.prepend(1);
linkedList.prepend("Two");
linkedList.prepend(3);
linkedList.prepend([1, true, "Three"]);


linkedList.append("Four");
linkedList.append(5);
linkedList.append(false);

// linkedList.insert("5even", -1);
linkedList.insert("EIGHT!", 0);
linkedList.insert(9, linkedList.length - 1);
// linkedList.insert(["ten", 11, true], linkedList.length);

linkedList.insert(4.1234, 4)

linkedList.delete(0);
linkedList.delete(linkedList.length - 1);
// linkedList.delete(linkedList.length);
linkedList.delete(2);

linkedList.display();

console.log("--------REVERSE--------")

linkedList.reverse();
linkedList.display();