const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const googlebooks = new Schema({
  title: { type: String, required: true },
  authors: { type: [String], required: true },
  description: { type: String, required: true },
  image: { type: String, default: "https://via.placeholder.com/200x200" },
  link: { type: Date, required: true },
});

const Books = mongoose.model("Books", googlebooks);

module.exports = Books;
