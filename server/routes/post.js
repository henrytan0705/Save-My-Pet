const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

// Get all posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ error: "Failed to retrieve posts." });
  }
});

router.post("/", (req, res) => {
  res.send("POST API call to Post endpoint.");
});

router.put("/:id", (req, res) => {
  res.send("PUT API call to Post endpoint.");
});

router.delete("/:id", (req, res) => {
  res.send("DELETE API call to Post endpoint.");
});

module.exports = router;
