const Engineer = require("../lib/Engineer");

describe("engineer", () => {
  const newClass = new Engineer("test", 1, "test@email.com", "TestGithub");
  describe("constructor", () => {
    // testing the constructor of the class
    it("should return a new class with name, id, email and github", () => {
      expect(newClass).toEqual({
        id: 1,
        name: "test",
        email: "test@email.com",
        github: "TestGithub",
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
      expect(newClass.getRole()).toEqual("Engineer");
    });

    it("return class Github", () => {
      expect(newClass.getGithub()).toEqual("TestGithub");
    });
  });
});
