'use strict';

const src = require('../src.js');
const { linkedNode, iterableNode } = require(src.node);

const linkedList = (state) => {
    let first,
        last,
        length = 0;
    let createNewNode = (value) => linkedNode({ value, next: null });
    let init = (value) => {
        let newNode = createNewNode(value);
        first = newNode;
        last = newNode;
        length = 1;
    };
    let add = (value) => {
        if (length !== 0) {
            let newNode = createNewNode(value);
            last.setNext(newNode);
            last = newNode;
        } else {
            init(value);
        }
        return length++;
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
    };

    return {
        add,
        get,
        forEach,
        first: () => { return first.value(); },
        last: () => { return last.value(); },
        length: () => { return length; }
    };
}

const doubleLinkedList = (state) => {
    let first,
        length = 0;
    let createNewNode = (value, next, prev) => iterableNode({ value, next, prev });
    let init = (value) => {
        first = createNewNode(value, null, null);
        first.setNext(first);
        first.setPrev(first);
    };
    let last = () => { return first.getPrev(); };
    let add = (value) => {
        if (length !== 0) {
            let newNode = createNewNode(value, first, last());
            last().setNext(newNode);
            first.setPrev(newNode);
        } else {
            init(value);
        }
        return length++;
    };
    let forEach = (execute) => {
        if (first != null && typeof execute === 'function') {
            let curr = first,
                index = 0;
            do {
                execute(curr.value(), index++);
                curr = curr.getNext();
            } while (curr !== first);
        }
    };
    let get = (index) => {
        if (first != null && typeof index === 'number' && index < length) {
            let curr = first;
            let stepsFromLast = length - index,
                stepsFromFirst = index;
            let steps, stepperFunction;
            if (stepsFromLast < stepsFromFirst) {
                steps = stepsFromLast;
                stepperFunction = 'getPrev';
            } else {
                steps = stepsFromFirst;
                stepperFunction = 'getNext';
            }
            let i = 0;
            while (i++ < steps) {
                curr = curr[stepperFunction]();
            }
            return curr.value();
        }
        return null;
    }
    return {
        add,
        get,
        forEach,
        first: () => { return first.value(); },
        last: () => { return last().value(); },
        length: () => { return length; }
    }
}

module.exports = {
    linkedList,
    doubleLinkedList
};
