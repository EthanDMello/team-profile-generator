// Employee class is be exported
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  //   class methods to return name id and role
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getRole() {
    return "Employee";
  }
}
