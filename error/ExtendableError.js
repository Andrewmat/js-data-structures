'use strict';

class ExtendableError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ExtendableError';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, this.constructor);
        } else {
            this.stack = (new Error(message)).stack;
        }
    }
}

module.exports = ExtendableError;
