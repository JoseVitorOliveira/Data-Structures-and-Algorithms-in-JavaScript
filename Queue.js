/* Queues */

/* is a linear data structure that follows the First In, First Out (FIFO) principle.  */

/* The first element added to the queue will be the first element to be removed. */

/* The queue data structure has two main operations: */

/* 1. enqueue: adds an element to the queue. */

/* 2. dequeue: removes the least recently added element. */

/* Other operations include front, size, and isEmpty. */

var Queue = function() {
    this.collection = [];
    this.values = function() {
        console.log(this.collection); // returns the values in the queue;
    };
    this.enqueue = function(element) {
        this.collection.push(element); // adds an element to the queue;
    };
    this.dequeue = function() {
        return this.collection.shift(); // removes an element from the queue;
    };
    this.front = function() {
        return this.collection[0]; // returns the first element in the queue;
    };
    this.size = function() {
        return this.collection.length; // returns the size of the queue;
    };
    this.isEmpty = function() {
        return (this.collection.length === 0); // returns true if the queue is empty;
    };
}

var queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.values();
queue.dequeue();
queue.values();
console.log(queue.front());
console.log(queue.size());
queue.enqueue(4);
queue.values();
queue.dequeue();
queue.values();