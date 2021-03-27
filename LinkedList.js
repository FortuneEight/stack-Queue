// Class for Linked List

class LinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    display() {
        console.log(`Length: ${this.length}  ||  ${this.head.data}  ||  ${this.tail.data}`);
        let counter = 0;
        let curr = this.head;
        while (counter < this.length) {
            console.log(`   ${counter}: ${curr.data}`);
            curr = curr.next;
            counter++;
        }
    }

    prepend(data) {
        // prepend adds to the front of the list
        const node = new Node();

        node.data = data;

        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }

        this.length++;
    }

    append(data) {
        // append adds to the back of the list

        const node = new Node();

        node.data = data;

        if (!this.head) {
            this.prepend(data);
        } else {
            this.tail.next = node;
            this.tail = node;
        }

        this.length++;
    }
}