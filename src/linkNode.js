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

module.exports = {
    node,
    iterable,
    linkNode
};
