// import employee class
import Employee from "./Employee.js";

// Intern class to extend employee be exported
export default class Intern extends Employee {
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
