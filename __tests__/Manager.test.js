const Manager = require("../lib/Manager");

describe("Manager", () => {
  const newClass = new Manager("test", 1, "test@email.com", 2);
  describe("constructor", () => {
    // testing the constructor of the class
    it("should return a new class with name, id, email and office number", () => {
      expect(newClass).toEqual({
        id: 1,
        name: "test",
        email: "test@email.com",
        officeNumber: 2,
      });
    });
  });

  describe("Class functions", () => {
    // testing class functions
    it("return class name", () => {
      expect(newClass.getName()).toEqual("test");
    });

    it("return class id", () => {
      expect(newClass.getId()).toEqual(1);
    });

    it("return class email", () => {
      expect(newClass.getEmail()).toEqual("test@email.com");
    });

    it("return class role", () => {
      expect(newClass.getRole()).toEqual("Manager");
    });

    it("return class office number", () => {
      expect(newClass.getOfficeNumber()).toEqual(2);
    });
  });
});
