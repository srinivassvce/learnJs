class Queue {
    constructor() {
        this.queue = [];
    }

    add(data) {
        this.queue.unshift(data);
    }

    remove() {
        return this.queue.pop();
    }
}

const queue = new Queue();
queue.add(2);
console.log(queue.queue);
queue.add(3);
console.log(queue.queue);
queue.add(5);
console.log(queue.queue);

console.log(queue.remove());
console.log(queue.queue);
console.log(queue.remove());
console.log(queue.queue);
console.log(queue.remove());
console.log(queue.queue);