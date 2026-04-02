"use strict";
function getLength(val) {
    if (typeof val === 'string') {
        // 'hello world' => ["hello", "world"] .length is 2
        const numberOfWords = val.split(' ').length;
        return `${numberOfWords} words`;
    }
    return val.length;
}
const numOfWords = getLength('does this work?');
console.log(numOfWords);
const numOfItems = getLength(['basel', 'sara', 'khadeja', 'yahia']);
console.log(numOfItems);
