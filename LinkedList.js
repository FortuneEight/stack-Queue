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

    insert(data, index) {
        // insert adds data in the middle

        if (index < 0 || index > this.length - 1) {
            console.error("Your data cannot be added because the index is not right.");
            return -1;
        } else if (index == 0) {
            this.prepend(data);
        } else if (index == this.length - 1) {
            this.append(data);
        } else {
            const newNode = new Node(data);

            let current = this.head;
            let counter = 0;

            while (counter < index - 1) {
                counter++;
                current = current.next;
            }

            [current.next, newNode.next] = [newNode, current.next];

            this.length++;
        }
    }

    delete(index) {
        // deletes the data at an index

        if (index < 0 || index > this.length - 1) {
            console.error("This data does not exist!");
            return -1;
        } else if (index == 0) {
            this.head = this.head.next;
            this.length--;
        } else if (index == this.length - 1) {
            let current = this.head;
            let counter = 0;
            while (counter < this.length - 2) {
                counter++;
                current = current.next;
            }
            current.next = null;
            this.tail = current;
            this.length--;
        } else {
            let current = this.head;
            let counter = 0;
            while (counter < index - 1) {
                counter++;
                current = current.next;
            }

            current.next = current.next.next;
            this.length--;
        }
    }

    reverse() {
        // reverses the whole list

        if (!this.head) {
            console.error("There is no linked list!");
            return -1;
        }

        let node = this.head;

        [this.head, this.tail] = [this.tail, this.head];

        let prv = null;
        let nxt = null;

        for (let i = 0; i < this.length; i++) {
            nxt = node.next;
            node.next = prv;
            prv = node;
            node = nxt;
        }

    }
}