let src = {};
src.__root = 'C:/workspace/js-data-structures/src';
src.iterable = src.__root + '/iterable.js';
src.node = src.__root + '/node.js';
src.list = src.__root + '/list.js';

src.error = {};
src.error.__root = src.__root + '/error';
src.error.ExtendableError = src.error.__root;

module.exports = src;
