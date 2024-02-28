/* Stacks */

/* is a linear data structure that follows the Last In, First Out (LIFO) principle.  */

/* The last element added to the stack will be the first element to be removed. */

/* The stack data structure has two main operations: */

/* 1. push: adds an element to the stack. */

/* 2. pop: removes the most recently added element. */

/* Other operations include peek and size. */

var Stack = function() {
    this.count = 0 // size of the stack;
    this.storage = {};

    // put an element on the stack
    this.push = function(value) {
        this.storage[this.count] = value;
        this.count++;
    }

    // pop an element from the stack
    this.pop = function() {
        if (this.count === 0) {
            return undefined;
        }

        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return "removed:", result;
    }

    // get the size of the stack
    this.size = function() {
        return this.count;
    }

    // get the top element of the stack
    this.peek = function() {
        return this.storage[this.count - 1];
    }
}

var Stack = new Stack();
Stack.push(1);
console.log(Stack.peek());
Stack.pop(1);
console.log(Stack.peek());
Stack.push(2);
Stack.push(3);
console.log(Stack.size());
