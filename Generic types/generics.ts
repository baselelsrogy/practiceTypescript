let names: Array<string> = ['Max', 'Basel'];

type DataStore<T> = {
  [key: string]: T;
};

let store: DataStore<string | number> = {};
store.name = 'Basel';
store.id = 10;

let nameStore: DataStore<string> = {};

function merge<T, U>(a: T, b: U) {
  return [a, b];
}

const ids = merge<number, string>(1, 'Basel');

function mergeObj<T extends object, U extends object>(a: T, b: U) {
  return { ...a, ...b };
}

const merged = mergeObj({ userName: 'Basel' }, { age: 22 });
console.log(merged);

class User<T> {
  constructor(public id: T) {}
}

const user = new User(22);
const user2 = new User('22');
