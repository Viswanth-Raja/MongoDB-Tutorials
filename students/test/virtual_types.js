const assert = require("assert");
const Student = require("../src/student");

describe("Virtual Types", () => {
  const jason = new Student({
    name: "jason",
    articles: [{ title: "AngularJS" }],
  });
  jason
    .save()
    .then(() => Student.findOne({ name: "jason" }))
    .then((student) => {
      done();
    });
});
