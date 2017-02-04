'use strict';

const src = require('../src.js');
const { linkedNode, iterableNode } = require(src.node);

const linkedList = (state) => {
    let first;
    let last;
    let length;
    let createNewNode = (value) => linkedNode({ value, next: null });
    let getLength = () => {
        return length;
    }
    let init = (value) => {
        let newNode = createNewNode(value);
        first = newNode;
        last = newNode;
        length = 1;
    };
    let add = (value) => {
        if (last != null) {
            let newNode = createNewNode(value);
            last.setNext(newNode);
            last = newNode;
            length++;
        } else {
            init(value);
        }
        return state;
    };
    let forEach = (execute) => {
        if (first != null && typeof execute === 'function') {
            let curr = first,
                index = 0;
            while (curr !== null) {
                execute(curr.getValue(), index++);
                curr = curr.getNext();
            }
        }
        return state;
    };
    let get = (index) => {
        if (first != null && typeof index === 'number') {
            let curr = first,
                i = 0;
            while (i < index) {
                if (curr === null) {
                    return undefined;
                }
                curr = curr.getNext();
            }
            return curr;
        }
    }

    return {
        add,
        get,
        forEach,
        getLength
    };
}

module.exports = { linkedList };
