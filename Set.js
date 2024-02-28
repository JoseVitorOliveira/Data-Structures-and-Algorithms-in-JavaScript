/* Sets */

/* is a collection of distinct elements with no specific order. */

/* The set interface provides methods to perform typical set operations like union, intersection, difference, and subset. */

/* The set data structure has two main operations: */

/* 1. add: adds an element to the set. */

/* 2. remove: removes an element from the set. */

/* Other operations include has, values, and size. */

var Set = function() {
    var collection = [] // the set;
    this.has = function(element) {
        return (collection.indexOf(element) !== -1); // returns true if the element is in the set;
    }
    this.values = function() {
        return collection; // returns the values in the set;
    }
    this.add = function(element) {
        if (!this.has(element)) {
            collection.push(element); // adds an element to the set;
            return true;
        }
        return false;
    }
    this.remove = function(element) {
        if (this.has(element)) {
            index = collection.indexOf(element);
            collection.splice(index, 1); // removes an element from the set;
            return true;
        }
        return false;
    }
    this.size = function() {
        return collection.length; // returns the size of the set;
    }
    this.union = function(otherSet) {
        var unionSet = new Set();
        var firstSet = this.values();
        var secondSet = otherSet.values();
        firstSet.forEach(function(value) {
            unionSet.add(value);
        });
        secondSet.forEach(function(value) {
            unionSet.add(value);
        });
        return unionSet; // returns the union of two sets;
    }
    this.intersection = function(otherSet) {
        var intersectionSet = new Set();
        var firstSet = this.values();
        firstSet.forEach(function(value) {
            if (otherSet.has(value)) {
                intersectionSet.add(value);
            }
        });
        return intersectionSet; // returns the intersection of two sets;
    }
    this.difference = function(otherSet) {
        var differenceSet = new Set();
        var firstSet = this.values();
        firstSet.forEach(function(value) {
            if (!otherSet.has(value)) {
                differenceSet.add(value);
            }
        });
        return differenceSet; // returns the difference of two sets;
    }
    this.subset = function(otherSet) {
        var firstSet = this.values();
        return firstSet.every(function(value) {
            return otherSet.has(value);
        }); // returns true if the set is a subset of another set;
    }
}

var set1 = new Set();
var set2 = new Set();
set1.add(1);
set2.add(2);
console.log(set1.values());
console.log(set2.values());
set1.add(2);
set1.add(3);
set1.add(4);
console.log(set1.size());
console.log(set1.subset(set2));
console.log(set2.subset(set1));
console.log(set1.intersection(set2).values());
console.log(set1.difference(set2).values());
console.log(set1.union(set2).values());
set1.remove(4);
console.log(set1.values());