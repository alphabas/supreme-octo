const mongoose = require("mongoose");

const userTemplate = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("personal", userTemplate);
