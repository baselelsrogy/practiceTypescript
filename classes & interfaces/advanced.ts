// Getters and Setters

class User1 {
  protected _firstName: string = '';
  private _lastName: string = '';

  set firstName(name: string) {
    if (name.trim() === '') {
      throw new Error('Invalid name.');
    }
    this._firstName = name;
  }
  set lastName(last: string) {
    if (last.trim() === '') {
      throw new Error('Invalid name.');
    }
    this._lastName = last;
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  static eid = 'USER';
}

console.log(User1.eid);

const ali = new User1();

ali.firstName = 'Ali';
ali.lastName = 'Sayed';

console.log(ali.fullName);

class Employee extends User1 {
  constructor(public jobTitle: string) {
    super();
    super.firstName = 'Max';
  }

  work() {
    //....
    console.log(this._firstName);
  }
}

abstract class UIElement {
  constructor(public indentifier: string) {}

  clone(targetLocation: string) {
    // logic to duplicate the UI Element
  }
}

// let uiElement = new UIElement(); // => this doesn't work with abstract classes

class SideDrawer extends UIElement {
  // work with extends classes
  constructor(
    public identifier: string,
    public position: 'left' | 'right',
  ) {
    super(identifier);
  }
}
