const express = require("express");
const multer = require("multer");
const cloudinary = require("../util/cloudinary");
const Post = require("../models/Post");
const fs = require("fs");

const router = express.Router();

// Get all posts with filtering
router.get("/", async (req, res) => {
  try {
    const { status, search, limit } = req.query;

    let query = {};

    // Handle status filter
    if (status === "lost") query.isLost = true;
    if (status === "found") query.isLost = false;

    // Search functionality
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: "i" } },
        { breed: { $regex: search, $options: "i" } },
        { location: { $regex: search, $options: "i" } },
      ];
    }

    let queryBuilder = Post.find(query).sort({ createdAt: -1 });

    if (limit) {
      queryBuilder = queryBuilder.limit(parseInt(limit));
    }

    const posts = await queryBuilder.exec();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: "Failed to retrieve posts." });
  }
});

const upload = multer({ dest: "uploads/" });

router.post("/", upload.single("image"), async (req, res) => {
  try {
    console.log(req.body);

    const {
      name,
      location,
      microchipped,
      breed,
      animalType,
      sex,
      additionalInfo,
      isLost,
      lat,
      lng,
    } = req.body;

    let uploadedImage;
    // upload img file to cloudinary for url
    if (req.file) {
      uploadedImage = await cloudinary.uploader.upload(req.file.path, {
        folder: "pet-images",
      });

      // clean up file from /uploads
      fs.unlinkSync(req.file.path);
    }

    const newPost = new Post({
      name,
      location,
      microchipped,
      breed,
      animalType,
      sex,
      additionalInfo,
      isLost: isLost === "true",
      lat: parseFloat(lat),
      lng: parseFloat(lng),
      img: uploadedImage?.secure_url || "",
    });

    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (err) {
    console.error("Error creating post:", err);
    res.status(400).json({
      message: "Failed to create post. Error: " + err,
      error: process.env.NODE_ENV === "development" ? err.message : undefined,
    });
  }
});

router.put("/:id", (req, res) => {
  res.send("PUT API call to Post endpoint.");
});

router.delete("/:id", (req, res) => {
  res.send("DELETE API call to Post endpoint.");
});

module.exports = router;
