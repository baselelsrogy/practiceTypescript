// enum Basel {
//   Admin,
//   Editor,
//   Guest,
// }

type Role = 'admin' | 'guest' | 'editor' | 'reader';
type User = {
  name: string;
  age: number;
  role: Role;
  permission: string[];
};

let userRole: Role;

userRole = 'admin';

let possibleResults: [1 | -1, 1 | -1];
possibleResults = [1, -1];

function access(role: Role) {
  //...
}
