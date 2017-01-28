'use strict'
const CollectionError = require('./error/CollectionError.js');

class Collection {
    constructor() {
        if (new.target === Collection) {
            throw new CollectionError('Cannot instantiate the abstract class Collection');
        }
        this.data = [];
        return this;
    }
    put(value) {
        this.data.push(value);
        return this;
    }
    get() {
        return this.data.pop();
    }
}

module.exports = Collection;
