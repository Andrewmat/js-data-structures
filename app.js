'use strict';
const src = require('./src.js');
const { linkedList } = require(src.list);

let mylst = linkedList();
for (let i = 0; i < 30; ++i) {
    mylst.add('' + i + 'var');
}

mylst.forEach((el, ind) => {
    console.log('lst[' + ind + ']: ' + el);
});
