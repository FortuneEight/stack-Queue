// Class for the Queue (FIFO)

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    enqueue(data) {
        const node = new Node(data);
        if (!this.first) {
            // There is nothing in the queue.
            this.first = node;
            this.last = node;
        } else {
            // There is something in the queue.
            this.last.next = node;
            this.last = node;
        }
        this.length++;
    }

    dequeue() {
        const origFirst = this.first;

        if (this.first == this.last) {
            this.first = null;
            this.last = null;
        } else {
            this.first = this.first.next;
        }

        this.length--;
        return origFirst.data;
    }
}