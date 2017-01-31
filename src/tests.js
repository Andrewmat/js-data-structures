'use strict';
const { node, iterable, linkNode } = require('./linkNode.js');

// Checking the correctness of the link node
let myNode1 = linkNode({
    value: 1,
    next: null
});
let myNode2 = linkNode({
    value: 2,
    next: myNode1
});
let myNode3 = linkNode({
    value: 3,
    next: myNode2
});
let myNode4 = linkNode({
    value: 'begin',
    next: myNode3
});

let curr = myNode4;
while (curr !== null) {
    console.log(curr.getValue());
    curr = curr.getNext();
}
