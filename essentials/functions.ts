function add(a: number, b: number): number {
  return a + b;
}

function log(message: string): void {
  console.log(message);
}

function logAndThrow(errorMessage: string): never {
  console.log(errorMessage);
  throw new Error(errorMessage);
}

const logMsg = (msg: string) => {
  console.log(msg);
};

function performJob(cb: (msg: string) => void) {
  // ...
  cb('Job done!');
}

type User = {
  name: string;
  age: number;
  greet: () => string;
};

let userName: User = {
  name: 'Basel',
  age: 23,
  greet() {
    console.log('hello world');
    return this.name;
  },
};

userName.greet();
