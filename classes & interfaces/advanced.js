"use strict";
// Getters and Setters
class User1 {
    _firstName = '';
    _lastName = '';
    set firstName(name) {
        if (name.trim() === '') {
            throw new Error('Invalid name.');
        }
        this._firstName = name;
    }
    set lastName(last) {
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
    jobTitle;
    constructor(jobTitle) {
        super();
        this.jobTitle = jobTitle;
        super.firstName = 'Max';
    }
    work() {
        //....
        console.log(this._firstName);
    }
}
class UIElement {
    indentifier;
    constructor(indentifier) {
        this.indentifier = indentifier;
    }
    clone(targetLocation) {
        // logic to duplicate the UI Element
    }
}
// let uiElement = new UIElement(); // => this doesn't work with abstract classes
class SideDrawer extends UIElement {
    identifier;
    position;
    // work with extends classes
    constructor(identifier, position) {
        super(identifier);
        this.identifier = identifier;
        this.position = position;
    }
}
