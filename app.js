'use strict';
const src = require('./src.js');
const { linkedList } = require(src.list);

let mylst = linkedList();
mylst.add(1);
mylst.add(2);
mylst.add(5);

mylst.forEach((el, ind) => {
    console.log('lst[' + ind + ']: ' + el);
})
