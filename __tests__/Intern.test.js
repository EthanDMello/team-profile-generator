const Intern = require("../lib/Intern");

describe("Intern", () => {
  const newClass = new Intern("test", 1, "test@email.com", "school");
  describe("constructor", () => {
    // testing the constructor of the class
    it("should return a new class with name, id, email and school", () => {
      expect(newClass).toEqual({
        id: 1,
        name: "test",
        email: "test@email.com",
        school: "school",
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
      expect(newClass.getRole()).toEqual("Intern");
    });

    it("return class office number", () => {
      expect(newClass.getSchool()).toEqual("school");
    });
  });
});
