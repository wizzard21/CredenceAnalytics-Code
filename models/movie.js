const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
  },
  summary: {
    type: String,
  },
});

module.exports = mongoose.model("Movie", MovieSchema);