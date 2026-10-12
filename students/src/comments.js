const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  content: String,
  studentId: { type: Schema.Types.ObjectId, ref: "student" },
});

const comment = mongoose.model("comment", commentSchema);

module.exports = comment;
