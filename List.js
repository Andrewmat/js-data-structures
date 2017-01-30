'use strict'
const Collection = require('./Collection.js');

class List extends Collection {
    constructor() {
        super();
        this.length = 0;
        return this;
    }
    put(index, value) {
        this.data[index] = value;
        this.length++;
        return this;
    }
    get(index) {
        return this.data[index];
    }
    remove(index) {
        let d = this.data[index];
        delete this.data[index];
        this.length--;
        return d;
    }
}
