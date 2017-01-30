'use strict'

const node = (state) => {
    let getValue = () => {
        return state.value;
    };
    return { getValue };
}
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

const linkNode = (state) => {
    return Object.assign(
        {},
        iterable(state),
        node(state)
    );
}

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
