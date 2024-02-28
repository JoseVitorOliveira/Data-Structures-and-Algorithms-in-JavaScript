/* Priority Queues */

/* is a type of queue where each element has an associated priority  */

var PriorityQueue = function() {
    this.collection = [];
    this.values = function() {
        console.log(this.collection); // returns the values in the queue;
    };
    this.enqueue = function(element) {
        if (this.isEmpty()) {
            this.collection.push(element);
        } else {
            var added = false;
            for (var i = 0; i < this.collection.length; i++) {
                if (element[1] < this.collection[i][1]) { // checking priorities
                    this.collection.splice(i, 0, element);
                    added = true;
                    break;
                }
            }
            if (!added) {
                this.collection.push(element);
            }
        }
    }
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

var queue = new PriorityQueue();
queue.enqueue(["Apple", 2]);
queue.enqueue(["Banana", 3]);
queue.enqueue(["Carrot", 1]);
queue.values();
queue.dequeue();
queue.values();