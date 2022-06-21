class DB {
  constructor() {}

  user = new Map();
  arrayOfUsers = [];
  matchedUser = {};
  matchedUsers = [];

  create(object) {
    if (typeof object !== "object") {
      throw new Error("Parameter must be an Object!");
    }

    if ([Object.getOwnPropertyNames(object)].length > 4) {
      throw new Error("Parameter must have only 4 properties");
    }

    if (
      "name" in object &&
      "age" in object &&
      "country" in object &&
      "salary" in object
    ) {
      let id =
        object.name +
        Math.floor(Math.random() * 10) +
        object.salary * 10 +
        object.country +
        object.age;

      this.user.set(id, object);

      return id;
    } else {
      throw new Error("One of the required field is missing");
    }
  }

  read(id) {
    if (id === undefined) {
      throw new Error("Parameter must be passed!");
    }

    if (typeof id !== "string") {
      throw new Error("Parameter must be a String!");
    }

    if (id.length === 0) {
      return null;
    } else {
      return this.user;
    }
  }

  readAll() {
    this.user.forEach((value) => this.arrayOfUsers.push(value));
    return this.arrayOfUsers;
  }

  update(id, property) {
    if (id === undefined) {
      throw new Error("ID must not be empty!");
    }

    if (typeof id !== "string") {
      throw new Error("ID must be a String!");
    }

    if (property === false || property === null || property === undefined) {
      throw new Error("Parameter is not valid!");
    }

    let obj = this.user;
    return obj.set(id, { ...obj.get(id), ...property });
  }

  delete(id) {
    if (id === false || id === null || id === undefined || id === undefined) {
      throw new Error("Parameter is not valid!");
    }

    this.user.delete(id);
    return this.user;
  }

  find(query) {
    if (query === false || query === null || id === undefined) {
      throw new Error("Parameter is not valid!");
    }

    for (let i = 0; i < this.arrayOfUsers.length; i++) {
      let obj = this.arrayOfUsers[i];
      if (obj.name === query.name) {
        this.matchedUser.name = obj.name;
      } else {
        return this.matchedUsers;
      }

      if (obj.age > query.age.min) {
        this.matchedUser.age = obj.age;
      } else {
        return this.matchedUsers;
      }

      if (obj.country === query.country) {
        this.matchedUser.country = obj.country;
      } else {
        return this.matchedUsers;
      }

      if (obj.salary > query.salary.min && obj.salary < query.salary.max) {
        this.matchedUser.salary = obj.salary;
      } else {
        return this.matchedUsers;
      }
    }

    this.matchedUsers = [this.matchedUser];

    return this.matchedUsers;
  }
}

let db = new DB();

const person = {
  name: "Pitter", // required field with type string
  age: 21, // required field with type number
  country: "ge", // required field with type string
  salary: 500, // required field with type number
};

const id = db.create(person);
console.log(id);
const customer = db.read(id);
console.log(customer);
const customers = db.readAll(); // array of users
console.log(customers);
console.log(db.update(id, { age: 22 })); // id
// console.log(db.delete(id)); // true

const query = {
  name: "Pitter",
  country: "ge",
  age: {
    min: 20,
  },
  salary: {
    min: 300,
    max: 600,
  },
};
const matchedCustomers = db.find(query);
console.log(matchedCustomers);
