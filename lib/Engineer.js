// import employee class
const Employee = require("./Employee");
// Engineer class to extend employee be exported
class Engineer extends Employee {
  constructor(github) {
    this.id = id;
    this.email = email;
    super(name, id, email);
  }

  //  get role class method to override Employee class method
  getRole() {
    return "Engineer";
  }
}

module.exports = Employee;
