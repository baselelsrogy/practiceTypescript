type DataStore = {
  [prop: string]: string | number;
};

let someObj: Record<string, number | string>;

someObj = {
  name: 'Sara',
  phone: '01020342017',
  id: 5001,
  gender: 'Female',
  status: 'Single',
};

let store: DataStore = {};

// ...

store.id = 5;
store.name = 'Basel';
store.email = 'basel@example.com';

let roles = ['guest', 'admin', 'editor'] as const;

const firstRole = roles[1];

const dataEnties = {
  entry1: 0.23,
  entry2: -0.5,
} satisfies Record<string, number>;

interface Basel {
  name: string;
  email: string;
  id: number;
  phone: number;
  role: string;
}
