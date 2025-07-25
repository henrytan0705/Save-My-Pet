const express = require("express");
const multer = require("multer");
const cloudinary = require("../util/cloudinary");
const Post = require("../models/Post");
const fs = require("fs");

const router = express.Router();

// Get all posts with filtering
router.get("/", async (req, res) => {
  try {
    const {
      status,
      search,
      sort,
      animalType,
      breed,
      location,
      microchipped,
      limit,
    } = req.query;

    let query = {};

    // Status filter (handles both array and single value)
    if (status) {
      if (Array.isArray(status)) {
        query.status = { $in: status };
      } else {
        query.status = status;
      }
    }
    // Search functionality
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: "i" } },
        { breed: { $regex: search, $options: "i" } },
        { location: { $regex: search, $options: "i" } },
        { additionalInfo: { $regex: search, $options: "i" } },
      ];
    }

    // Additional filters
    if (animalType) query.animalType = { $regex: animalType, $options: "i" };
    if (breed) query.breed = { $regex: breed, $options: "i" };
    if (location) query.location = { $regex: location, $options: "i" };
    if (microchipped) {
      // Handle both lowercase and capitalized values
      query.microchipped = { 
        $regex: `^${microchipped}$`, 
        $options: "i" 
      };
    }
    // Sorting options
    let sortOption = { createdAt: -1 }; // Default: newest first
    if (sort === "oldest") {
      sortOption = { createdAt: 1 };
    }
    let queryBuilder = Post.find(query).sort(sortOption);

    // Limit for previews
    if (limit) {
      queryBuilder = queryBuilder.limit(parseInt(limit));
    }

    
  const posts = await queryBuilder.exec();
    const transformedPosts = posts.map((post) => {
      return {
        ...post._doc,
      };
    });

    res.json(transformedPosts);
  } catch (err) {
    console.error("Error fetching posts:", err);
    res.status(500).json({
      message: "Failed to retrieve posts",
      error: process.env.NODE_ENV === "development" ? err.message : undefined,
    });
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
      status,
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
      status: status,
      coordinates: [parseFloat(lat), parseFloat(lng)],
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

// Update post
router.put("/:id", async (req, res) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedPost) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.json(updatedPost);
  } catch (err) {
    console.error("Error updating post:", err);
    res.status(400).json({
      message: "Failed to update post",
      error: process.env.NODE_ENV === "development" ? err.message : undefined,
    });
  }
});

// Delete post
router.delete("/:id", async (req, res) => {
  try {
    const deletedPost = await Post.findByIdAndDelete(req.params.id);
    if (!deletedPost) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.json({ message: "Post deleted successfully" });
  } catch (err) {
    console.error("Error deleting post:", err);
    res.status(400).json({
      message: "Failed to delete post",
      error: process.env.NODE_ENV === "development" ? err.message : undefined,
    });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.json(post);
  } catch (err) {
    res.status(500).json({ message: "Error fetching post", error: err.message });
  }
});
module.exports = router;
