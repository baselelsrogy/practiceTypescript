"use strict";
let user; // should have the Authenticatable properties
user = {
    email: 'basel@example.com',
    password: 'abc1',
    login() {
        // reach out to a database, check credentials, create a session
    },
    logout() {
        // clear the session
    },
};
class AuthenticatableUser {
    email;
    userName;
    password;
    constructor(email, userName, password) {
        this.email = email;
        this.userName = userName;
        this.password = password;
    }
    login() {
        // ...
    }
    logout() {
        // ...
    }
}
let userBasel;
userBasel = {
    email: 'basel@email.com',
    password: 'basel1234',
    role: 'admin',
    login() {
        //...
    },
    logout() {
        //...
    },
};
