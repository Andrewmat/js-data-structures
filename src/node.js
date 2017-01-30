'use strict'

// Factory function to instantiate a container of a value
const node = (state) => {
    let getValue = () => {
        return state.value;
    };
    return { getValue };
}
// Factory function to instantiate an iterable that has a pointer to another iterable
const iterable = (state) => {
    // duck-typing to check if an object is iterable
    this.is = (object) =>
        object !== null
        && typeof object === 'object'
        && typeof object.getNext === 'function';
    let getNext = () => {
        if (this.is(state.next)) {
            return state.next;
        } else {
            return null;
        }
    };
    return { getNext };
}

// Factory function to instantiate a node that has a link to another node
const linkNode = (state) => {
    return Object.assign(
        {},
        iterable(state),
        node(state)
    );
}

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

module.exports = {
    node,
    iterable,
    linkNode
};
