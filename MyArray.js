// My array class

class MyArray {
    constructor() {
        this.data = {};
        this.length = 0;
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
    }

    pop() {
        const item = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return item;
    }

    get(index) {
        return this.data[index];
    }

    delete(index) {
        const item = this.data[index];
        delete this.data[index];

        // collapse everything

        for (let i = index; i < this.length; i++) {
            this.data[i] = this.data[i + 1];
        }

        delete this.data[this.length - 1];

        this.length--;
        return item;
    }

    display() {
        let text = `[`;
        for (let i = 0; i < this.length; i++) {
            text += `${this.data[i]}, `;
        }

        text += `len: ${this.length}]`;
        return text;
    }
}