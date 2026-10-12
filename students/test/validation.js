const assert = require("assert");
const Student = require("../src/student");

describe("validation", () => {
  it("name is required", async () => {
    const student = new Student({ name: undefined });
    await student.validate().catch((err) => {
      const { message } = err.errors.name;
      assert(message === "Name is required");
    });
  });

  it("name must be longer than 2", async () => {
    const student = new Student({ name: "He" });
    await student.validate().catch((err) => {
      const { message } = err.errors.name;
      assert(message === "Name is too short");
    });
  });
});
