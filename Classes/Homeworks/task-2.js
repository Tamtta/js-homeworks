class User {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  getFullName() {
    return this.name + " " + this.surname;
  }
}

class Student extends User {
  constructor(name, surname, year) {
    super(name, surname);
    this.year = year;
    if (this.year < 2018) {
      throw new Error("Student hasn't graduated, because he/she failed!");
    }
  }

  getCourse() {
    let currentYear = 2022;
    let course = currentYear - this.year;
    if (course === 4) return this.name + " is on fourth grade!";
    if (course === 3) return this.name + " is on third grade!";
    if (course === 2) return this.name + " is on second grade!";
    if (course === 1) return this.name + " is on first grade!";
    if (course === 0) return this.name + " is still waiting for exam results!";
  }
}

let student = new Student("John", "Smith", 2018);

console.log(student.name); // print 'John'
console.log(student.surname); // print 'John'
console.log(student.getFullName()); // print 'John Smith'
console.log(student.year); // print 2018
console.log(student.getCourse()); // print 4 - fourth course, because current year 2022

let tamtaa = new Student("Tamta", "Joj", 2022);
console.log(tamtaa.name);
console.log(tamtaa.getCourse());
