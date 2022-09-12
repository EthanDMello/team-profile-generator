// import employee class
import Employee from "./Employee.js";

// Engineer class to extend employee be exported
export default class Engineer extends Employee {
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
