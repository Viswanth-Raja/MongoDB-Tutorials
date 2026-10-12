const assert = require("assert");
const Student = require("../src/student");

describe("Create the first data", () => {
  it("Save the student", (done) => {
    const Jason = new Student({ name: "jason" });
    Jason.save().then(() => {
      assert(!Jason.isNew);
      done();
    });
  });
});
