"use strict";
// class User {
//   name: string;
//   age: number;
//   constructor(n: string, a: number) {
//     this.name = n;
//     this.age = a;
//   }
// }
class User {
    name;
    age;
    role;
    firstName = 'Class'; // "readonly" property assign value only first time but you never change again
    hobbies = []; // you could remove "public" cause he outside the constructor
    constructor(name, age, // this used only inside the class "private"
    role) {
        this.name = name;
        this.age = age;
        this.role = role;
    }
}
const basel = new User('Basel', 22);
const hamza = new User('Hamza', 12, 'member');
// basel.firstName = "Basel" // that's doesn't work cause this property is "readonly"
console.log(basel);
console.log(hamza);
