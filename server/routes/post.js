const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

// Get all posts with filtering
router.get("/", async (req, res) => {
    try {
        const { status, search, limit } = req.query;
        
        let query = {};

        // Handle status filter
        if (status === 'lost') query.isLost = true;
        if (status === 'found') query.isLost = false;

        // Search functionality
        if (search) {
            query.$or = [
                { name: { $regex: search, $options: 'i' } },
                { breed: { $regex: search, $options: 'i' } },
                { location: { $regex: search, $options: 'i' } }
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
