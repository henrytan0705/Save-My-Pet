const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    maxlength: 100,
  },
  location: {
    type: String,
    required: true,
    trim: true,
    maxlength: 200,
  },
  microchipped: {
    type: String,
    enum: ["Yes", "No", "Unknown"],
    default: "Unknown",
  },
  sex: {
    type: String,
    trim: true,
    maxlength: 100,
  },
  animalType: {
    type: String,
    required: true,
    trim: true,
  },
  sex: {
    type: String,
    enum: ["Male", "Female", "Unknown"],
    default: "Unknown",
  },
  additionalInfo: {
    type: String,
    trim: true,
    maxlength: 1000,
  },
  img: {
    type: String,
    match: /^https?:\/\/.+\.(jpg|jpeg|png|webp|gif)$/i, // Optional: validate file URLs
  },
  isLost: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
