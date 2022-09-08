// import employee class
const Employee = require("./Employee");

// Engineer class to extend employee be exported
class Engineer extends Employee {
  constructor(github) {
    super(id, email);
    this.github = github;
  }

  //  get role class method to override Employee class method
  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;

const ethan = new Engineer("ethan", 01, "e.n.dmello@live.com");
ethan.getRole();
