'use strict';

const nextable = (state) => {
    this.isNextable = (object) =>
        object !== null
        && typeof object === 'object'
        && typeof object.getNext === 'function';
    let getNext = () => {
        if (this.isNextable(state.next)) {
            return state.next;
        } else {
            return null;
        }
    };
    let setNext = (object) => {
        if (this.isNextable(object)) {
            state.next = object;
        }
        return this;
    }
    return {
        getNext,
        setNext
    };
}

const previousable = (state) => {
    this.isPreviousable = (object) =>
        object !== null
        && typeof object === 'object'
        && typeof object.getPrev === 'function';

    let getPrev = () => {
        if (this.isPreviousable(state.prev)) {
            return state.prev;
        } else {
            return false;
        }
    }
    let setPrev = (object) => {
        if (this.isPreviousable(object)) {
            state.prev = object;
        }
        return this;
    }
    return {
        getPrev,
        setPrev
    };
}

const iterable = (state) => {
    return Object.assign(
        {},
        nextable(state),
        previousable(state)
    );
}

module.exports = {
    nextable,
    previousable,
    iterable
}
