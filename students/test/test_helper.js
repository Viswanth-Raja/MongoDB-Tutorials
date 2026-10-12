const mongoose = require("mongoose");
const Student = require("../src/student");

mongoose.connect("mongodb://localhost/students_host");

mongoose.connection
  .once("open", () => {
    console.log("We are connected");
  })
  .on("error", (error) => {
    console.warn("An error occurred", error);
  });

beforeEach((done) => {
  mongoose.connection.collections.students.drop();
  done();

  // const { student, articleBlog, comment } = mongoose.connection.collections;

  // student.drop(() => {
  //   articleBlog.drop(() => {
  //     comment.drop(() => {
  //       done();
  //     });
  //   });
  // });
});
