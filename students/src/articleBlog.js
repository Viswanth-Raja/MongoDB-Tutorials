const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleBlogSchema = new Schema({
  title: String,
  content: String,
  comments: [{ type: Schema.Types.ObjectId, ref: "comment" }],
});

const articleBlog = mongoose.model("articleBlog", articleBlogSchema);

module.exports = articleBlog;
