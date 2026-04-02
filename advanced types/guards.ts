type FileSource = { type: 'file'; path: string };
const fileSource: FileSource = {
  type: 'file',
  path: 'some/path/to/file.svg',
};

type DBSource = { type: 'db'; connectionUrl: string };
const dbSource: DBSource = { type: 'db', connectionUrl: 'some-connection-url' };

type Source = DBSource | FileSource;

function isFile(source: Source) {
  return source.type === 'file';
}

function loadData(source: Source) {
  // open and read file or reach out to database server
  if (isFile(source)) {
    // source.path; => use that to open the file
    return;
  }
  // source.connectionUrl; => to reach out to database
}

class User {
  constructor(public name: string) {}

  join() {
    // do something
  }
}

class Admin {
  constructor(permissions: string[]) {}

  scan() {
    //
  }
}

const user = new User('Basel');
const admin = new Admin(['ban', 'restore']);

type Entity = User | Admin;

function init(entity: Entity) {
  // join() or scan()
  if (entity instanceof User) {
    entity.join();
    return;
  }

  entity.scan();
}
