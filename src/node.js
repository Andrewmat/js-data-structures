'use strict'
const src = require('../src.js');
const { nextable } = require(src.iterable);

const node = (state) => {
    let getValue = () => {
        return state.value;
    };
    let setValue = (val) => {
        state.value = val;
        return this;
    }
    return { value : getValue, setValue };
}

const linkedNode = (state) => {
    return Object.assign(
        {},
        nextable(state),
        node(state)
    );
}
const iterableNode = (state) => {
    return Object.assign(
        {},
        iterable(state),
        node(state)
    );
}

module.exports = {
    node,
    linkedNode,
    iterableNode
};
