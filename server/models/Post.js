const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  microchipped: {
    type: String,
    enum: ["Yes", "No", "Unknown"],
    default: "Unknown",
  },
  breed: {
    type: String,
  },
  animalType: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ["Male", "Female", "Unknown"],
    default: "Unknown",
  },
  additionalInfo: {
    type: String,
  },
  img: {
    type: String,
  },
  status: {
    type: String,
    enum: ["Lost", "Found"],
    default: "Lost",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
