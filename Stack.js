// Class for the Stack (LIFO)

class Stack {
    constructor() {
        this.top = null;
        this.length = 0;
    }

    push(data) {
        const node = new Node(data);

        if (!this.top) {
            // There is nothing in the stack. Make the top the node and change the length.
            this.top = node;
        } else {
            // There is an existing element. Create a new top, and set the next property.
            let origTop = this.top;
            this.top = node;
            this.top.next = origTop;
        }
        this.length++;
    }

    pop() {
        let origTop = this.top;
        if (this.length == 1) {
            // There is only one item, make the top of the stack null.
            this.top = null;
        } else {
            this.top = this.top.next;
        }
        this.length--;
        return origTop.data; // Return origTop to return the Node.
    }

    peek() {
        if (this.top) {
            return this.top.data; // Return this.top to return the Node.
        }
    }
}