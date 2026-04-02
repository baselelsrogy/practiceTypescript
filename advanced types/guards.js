"use strict";
const fileSource = {
    type: 'file',
    path: 'some/path/to/file.svg',
};
const dbSource = { type: 'db', connectionUrl: 'some-connection-url' };
function isFile(source) {
    return source.type === 'file';
}
function loadData(source) {
    // open and read file or reach out to database server
    if (isFile(source)) {
        // source.path; => use that to open the file
        return;
    }
    // source.connectionUrl; => to reach out to database
}
class User {
    name;
    constructor(name) {
        this.name = name;
    }
    join() {
        // do something
    }
}
class Admin {
    constructor(permissions) { }
    scan() {
        //
    }
}
const user = new User('Basel');
const admin = new Admin(['ban', 'restore']);
function init(entity) {
    // join() or scan()
    if (entity instanceof User) {
        entity.join();
        return;
    }
    entity.scan();
}
