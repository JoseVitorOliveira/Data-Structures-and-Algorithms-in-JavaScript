/* Hash Table */

/*  is a data structure that implements an associative array abstract data type,
 a structure that can map keys to values. */

 /* It uses a hash function to compute an index into an array of buckets or slots,
from which the desired value can be found. */

var hash = (string, max) => {
    var hash = 0;
    for (var i = 0; i < string.length; i++) {
        hash += string.charCodeAt(i);
    } 
    return hash % max; // hash % max will return a number between 0 and max-1
}

let HashTable = function() {
    let storage = [];
    const storageLimit = 14;

    this.values = function() {
        console.log(storage);
    }

    this.add = function(key, value) {
        var index = hash(key, storageLimit);
        if (storage[index] === undefined) {
            storage[index] = [[key, value]];
        } else {
            var inserted = false;
            for (var i = 0; i < storage[index].length; i++) {
                if (storage[index][i][0] === key) {
                    storage[index][i][1] = value;
                    inserted = true;
                }
            }
            if (inserted === false) {
                storage[index].push([key, value]);
            }
        }
    }

    this.remove = function(key) {
        var index = hash(key, storageLimit);
        if (storage[index].length === 1 && storage[index][0][0] === key) {
            delete storage[index];
        } else {
            for (var i = 0; i < storage[index].length; i++) {
                if (storage[index][i][0] === key) {
                    delete storage[index][i];
                }
            }
        }
    }

    this.lookup = function(key) {
        var index = hash(key, storageLimit);
        if (storage[index] === undefined) {
            return undefined;
        } else {
            for (var i = 0; i < storage[index].length; i++) {
                if (storage[index][i][0] === key) {
                    return storage[index][i][1];
                }
            }
        }
    
    }
}

console.log(hash('Edward', 10));
let hashtable = new HashTable();
hashtable.add('Edward', 'Person');
hashtable.add('John', 'Person');
hashtable.add('Jill', 'Person');
hashtable.add('Jack', 'Animal');
hashtable.add('Jane', 'Animal');
hashtable.add('Flower', 'Plant');
console.log(hashtable.lookup('Edward'));
hashtable.values();
