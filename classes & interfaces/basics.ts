// class User {
//   name: string;
//   age: number;
//   constructor(n: string, a: number) {
//     this.name = n;
//     this.age = a;
//   }
// }

class User {
  readonly firstName: string = 'Class'; // "readonly" property assign value only first time but you never change again
  public hobbies: string[] = []; // you could remove "public" cause he outside the constructor
  constructor(
    public name: string,
    private age: number, // this used only inside the class "private"
    public role?: string,
  ) {}
}

const basel = new User('Basel', 22);
const hamza = new User('Hamza', 12, 'member');

// basel.firstName = "Basel" // that's doesn't work cause this property is "readonly"

console.log(basel);
console.log(hamza);
