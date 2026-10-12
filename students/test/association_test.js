const assert = require("assert");
const Student = require("../src/student");
const ArticleBlog = require("../src/articleBlog");
const Comment = require("../src/comments");

describe("Association Test", () => {
  let jason, articleBlog, comment;

  beforeEach((done) => {
    jason = new Student({ name: "jason" });
    articleBlog = new ArticleBlog({
      title: "MongoDB",
      content: "Mocha and Mongoose",
    });
    comment = new Comment({ content: "Well Done" });

    jason.articleBlog.push(articleBlog);
    articleBlog.comments.push(comment);
    comment.studentId = jason;
    done();
  });

  it("Associate Student with populate", () => {
    Student.find({ name: "jason" })
      .populate("articleBlog")
      .then((student) => {
        assert(student.articleBlog[0].comment.content === "Well Done");
      });
  });

  it("nested populate", () => {
    Student.find({ name: "jason" })
      .populate({
        path: "articleBlog",
        populate: {
          path: "comments",
          model: "comment",
          populate: {
            path: "student",
            model: "comment",
          },
        },
      })
      .then((student) => {
        assert(student.name === "jason");
        assert(student.articleBlog[0].title === "MongoDB");
        assert(student.articleBlog[0].comment.content === "Well Done");
        done();
      });
  });
});
