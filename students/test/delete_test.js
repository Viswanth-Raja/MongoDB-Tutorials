const assert = require("assert");
const Student = require("../src/student");

describe("delete methods", (done) => {
  let jason;
  beforeEach((done) => {
    jason = new Student({ name: "Jason" });
    jason.save().then(() => {
      done();
    });
  });

  it("delete by id", () => {
    Student.findByIdAndDelete(jason._id)
      .then(() => Student.find({ name: "jason" }))
      .then((student) => assert(student === null));
  });

  it("delete by name", () => {
    Student.findOneAndDelete({ name: "jason" })
      .then(() => Student.find({ name: "jason" }))
      .then((student) => assert(student === null));
  });

  it("delete by any but one", () => {
    Student.deleteOne({ name: "jason" })
      .then(() => Student.find({ name: "jason" }))
      .then((student) => assert(student === null));
  });
});
