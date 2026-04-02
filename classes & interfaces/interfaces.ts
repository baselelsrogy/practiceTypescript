interface Authenticatable {
  email: string;
  password: string;

  login(): void;
  logout(): void;
}

let user: Authenticatable; // should have the Authenticatable properties

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

class AuthenticatableUser implements Authenticatable {
  constructor(
    public email: string,
    public userName: string,
    public password: string,
  ) {}

  login(): void {
    // ...
  }

  logout(): void {
    // ...
  }
}

//...

interface AuthenticatableAdmin extends Authenticatable {
  role: string;
}

let userBasel: AuthenticatableAdmin;

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
