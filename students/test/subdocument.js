const assert = require("assert");
const Student = require("../src/student");

describe("Sub Document", (done) => {
  // it("Create a document", () => {
  //   const jason = new Student({
  //     name: "jason",
  //     articles: [{ title: "javaScript" }],
  //   });
  //   jason.save().then(() => {
  //     Student.findOne({ name: "jason" }).then((student) => {
  //       assert(student.articles[0].title === "javaScript");
  //       done();
  //     });
  //   });
  // });

  // it("adding a record", () => {
  //   const jason = new Student({
  //     name: "jason",
  //     articles: [],
  //   });
  //   jason
  //     .save()
  //     .then(() => Student.findOne({ name: "jason" }))
  //     .then((student) => {
  //       student.articles.push({ title: "MongoDB" });
  //       return student.save();
  //     })
  //     .then(() => Student.findOne({ name: "jason" }))
  //     .then((student) => {
  //       assert(student.articles[0].title === "MongoDB");
  //       done();
  //     });
  // });

  it("removing a record", () => {
    const jason = new Student({
      name: "jason",
      articles: [{ title: "React Native" }],
    });
    jason
      .save()
      .then(() => Student.findOne({ name: "jason" }))
      .then((student) => {
        student.articles.remove();
        return student.save();
      })
      .then(() => Student.findOne({ name: "jason" }))
      .then((student) => {
        assert(student.articles.length === 0);
        done();
      });
  });
});
