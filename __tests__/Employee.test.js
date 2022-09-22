// import employee from "../lib/Employee";
const employee = require("../lib/Employee");

describe("employee", () => {
  describe("constructor", () => {
    it("should return a new class with name id and email", () => {
      const newClass = new employee("test", 1, "test@email.com");

      expect(newClass).toEqual({
        email: "test@email.com",
        id: 1,
        name: "test",
      });
    });
  });
});
