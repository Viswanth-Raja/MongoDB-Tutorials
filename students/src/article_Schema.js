const mongoose = require("mongoose")
const Schema = mongoose.Schema

const article = new Schema({
  title:String
})

module.exports = article