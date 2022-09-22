// import employee class
const Employee = require("./Employee");

// Intern class to extend employee be exported
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  //  get role class method to override Employee class method
  getRole() {
    return "Intern";
  }

  getSchool() {
    return this.school;
  }
}

module.exports = Intern;
