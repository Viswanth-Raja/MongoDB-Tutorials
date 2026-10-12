const assert = require("assert");
const Student = require("../src/student");

describe("Read the Data", (done) => {
  let jason;
  let jason2;

  beforeEach((done) => {
    jason = new Student({ name: "jason" });
    jason2 = new Student({ name: "jason" });
    jason.save();
    jason2.save().then(() => {
      done();
    });
  });

  /* it("Find all Jason", async () => {
    const students = await Student.find({ name: "jason" });
    console.log(students);
    assert(students[0]._id.toString() === jason._id.toString());
    console.log(students[0]._id);
    console.log(jason._id);
  }); */

  xit("find one Jason", async () => {
    const student = await Student.findOne({ _id: jason._id });
    console.log(student);
    assert(student.name === "jason");
  });
});
