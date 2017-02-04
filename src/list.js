'use strict';

const src = require('../src.js');
const { linkedNode, iterableNode } = require(src.node);

const linkedList = (state) => {
    let first,
        last,
        length;
    let createNewNode = (value) => linkedNode({ value, next: null });
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
        return ;
    };
    let forEach = (execute) => {
        if (first != null && typeof execute === 'function') {
            let curr = first,
                index = 0;
            while (curr !== null) {
                execute(curr.value(), index++);
                curr = curr.getNext();
            }
        }
        return state;
    };
    let get = (index) => {
        if (first != null && typeof index === 'number') {
            if (index === length - 1) {
                return last.value();
            }
            let curr = first,
                i = 0;
            while (i++ < index) {
                if (curr === null) {
                    break;
                }
                curr = curr.getNext();
            }
            if (curr === null) {
                return undefined;
            }
            return curr.value();
        }
        return null;
    }

    return {
        add,
        get,
        forEach,
        last : () => { return last.value(); },
        length: () => { return length; }
    };
}

module.exports = { linkedList };
