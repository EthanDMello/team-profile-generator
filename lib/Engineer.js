// import employee class
const Employee = require("./Employee");

// Engineer class to extend employee be exported
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }

  //  get role class method to override Employee class method
  getRole() {
    return "Engineer";
  }

  getGithub() {
    return this.github;
  }
}

// export class
module.exports = Engineer;
