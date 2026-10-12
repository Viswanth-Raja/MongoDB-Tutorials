const assert = require("assert");
const Student = require("../src/student");

describe("Updating records", (done) => {
  let jason;
  let jason2;

  beforeEach((done) => {
    jason = new Student({
      name: "jason",
      studentNumber: 2500,
      articleCount: 5,
      grade: 10,
    });
    jason.save().then(() => {
      done();
    });
    console.log(jason);
  });

  /* it("update by instance", (done) => {
    console.log(jason);
    jason.set("name", "alex");
    jason
      .save()
      .then(() => Student.find({}))
      .then((students) => assert(students[0].name === "alex"));
    done();
  }); */

  /* it("update one", async (done) => {
    const student = await Student.updateOne(
      { name: "jason" },
      { studentNumber: 3000 },
    );
    const res = await Student.find({});
    assert(res[0].studentNumber === 3000);
    console.log(res);
  }); */

  /* it("update many", async (done) => {
    const student = await Student.updateMany(
      { name: "jason" },
      { studentNumber: 3000 },
    );
    const res = await Student.find({});
    assert(res[0].studentNumber === 3000);
    console.log(res);
  }); */

  xit("update artCount", async () => {
    const artCount = await Student.findOne({ name: "jason" });
    const student = await Student.updateOne(
      { name: "jason" },
      { $mul: { grade: artCount.articleCount } },
    );
    const res = await Student.find({ name: "jason" });
    assert(res[0].grade === 50);
    console.log(res[0]);
  });
});
