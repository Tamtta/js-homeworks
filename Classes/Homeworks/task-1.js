class Validator {
  constructor() {}

  isEmail(email) {
    if (typeof email !== "string") {
      throw new Error("Paramater should be a string!");
    }

    if (
      email
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      return true;
    } else {
      return false;
    }
  }

  isDomain(domain) {
    if (typeof domain !== "string") {
      throw new Error("Paramater should be a string!");
    }

    let regExp = /^[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,6}$/i;

    if (regExp.test(domain.toLowerCase())) {
      return true;
    } else {
      return false;
    }
  }

  isDate(date) {
    if (typeof date !== "string") {
      throw new Error("Paramater should be a string!");
    }

    if (Date.parse(date)) {
      return true;
    } else {
      return false;
    }
  }

  isPhone(phone) {
    if (typeof phone !== "string") {
      throw new Error("Paramater should be a string!");
    }

    let regExp =
      /^\+?([995]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{2})[-. ]?([0-9]{2})[-. ]?([0-9]{2})$/;

    if (regExp.test(phone)) {
      return true;
    } else {
      return false;
    }
  }
}

var validator = new Validator();

console.log(validator.isEmail("tamtuki.joj@gmail.com"));
console.log(validator.isDomain("jshtml.net"));
console.log(validator.isDate("12.05.2020"));
console.log(validator.isPhone("+995 555 11-11-21")); // it can be format of your country
