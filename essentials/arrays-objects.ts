let hobbies: (string | number)[] = ['sports', 'programming'];

hobbies.push(10);

let usersWork: string[];

let users: (string | number)[];
let users2: Array<number | string>;
users = ['basel', 'ali', 'hamza', 22, 11, 10];

let possibleResults: [number, number];
possibleResults = [1, -1];

let user: {
  name: string;
  age: number | string;
  hobbies: string[];
  role: {
    description: string;
    id: number;
  };
} = {
  name: 'Basel',
  age: 22,
  hobbies: ['cooking', 'drawing'],
  role: {
    description: 'admin',
    id: 5,
  },
};

let val: {} = 'is a value'; // this is "{}" mention to assing any value -> string or number or boolean not null or undefine values

let data: Record<string, number | string>; // this is a real object {}

data = {
  name: 'basel',
};
