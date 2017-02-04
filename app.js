'use strict';

const src = require('./src.js');
const { doubleLinkedList } = require(src.list);


function main() {
    let mylst = doubleLinkedList();
    for (let i = 0; i < 30; ++i) {
        mylst.add('' + i + 'var');
    }

    console.log('length ' + mylst.length() + ':');
    mylst.forEach((el, ind) => {
        console.log('lst[' + ind + ']: ' + el);
    });
}
main();