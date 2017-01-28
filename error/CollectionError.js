'use strict'
let ExtendableError = require('./ExtendableError.js');

class CollectionError extends ExtendableError {
    constructor(message) {
        super(message);
        this.name = 'CollectionError';
    }
}

module.exports = CollectionError;
