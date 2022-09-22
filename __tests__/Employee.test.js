const employee = require("../lib/Employee");

describe("employee", () => {
  const newClass = new employee("test", 1, "test@email.com");
  describe("constructor", () => {
    // testing the constructor of the class
    it("should return a new class with name id and email", () => {
      expect(newClass).toEqual({
        email: "test@email.com",
        id: 1,
        name: "test",
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
      expect(newClass.getRole()).toEqual("Employee");
    });
  });
});
