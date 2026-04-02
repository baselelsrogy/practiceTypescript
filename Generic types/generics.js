"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let names = ['Max', 'Basel'];
let store = {};
store.name = 'Basel';
store.id = 10;
let nameStore = {};
function merge(a, b) {
    return [a, b];
}
const ids = merge(1, 'Basel');
function mergeObj(a, b) {
    return Object.assign(Object.assign({}, a), b);
}
const merged = mergeObj({ userName: 'Basel' }, { age: 22 });
console.log(merged);
class User {
    constructor(id) {
        this.id = id;
    }
}
const user = new User(22);
const user2 = new User('22');
