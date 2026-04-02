function generateError(msg?: string) {
  throw new Error(msg);
}

generateError('An Error occurred');

type User = {
  name: string;
  age: number;
  role?: 'admin' | 'guest'; // optional property => "?"
};

let input = '';
const didProvideInput = input ?? false;
