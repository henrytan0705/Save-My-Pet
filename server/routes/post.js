const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

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
            limit
        } = req.query;

        let query = {};

        // Status filter
        if (status) {
            query.status = status;
        }

        // Search functionality
        if (search) {
            query.$or = [
                { name: { $regex: search, $options: 'i' } },
                { breed: { $regex: search, $options: 'i' } },
                { location: { $regex: search, $options: 'i' } },
                { additionalInfo: { $regex: search, $options: 'i' } }
            ];
        }

        // Additional filters
        if (animalType) query.animalType = animalType;
        if (breed) query.breed = breed;
        if (location) query.location = location;
        if (microchipped) query.microchipped = microchipped;

        // Sorting options
        let sortOption = { createdAt: -1 }; // Default: newest first
        if (sort === 'oldest') {
            sortOption = { createdAt: 1 };
        }

        let queryBuilder = Post.find(query).sort(sortOption);

        // Limit for previews
        if (limit) {
            queryBuilder = queryBuilder.limit(parseInt(limit));
        }

        const posts = await queryBuilder.exec();

        const transformedPosts = posts.map(post => {
            return {
                ...post._doc,
            };
        });

        res.json(transformedPosts);
    } catch (err) {
        console.error('Error fetching posts:', err);
        res.status(500).json({
            message: 'Failed to retrieve posts',
            error: process.env.NODE_ENV === 'development' ? err.message : undefined
        });
    }
});

// Create new post
router.post("/", async (req, res) => {
    try {
        const newPost = new Post({
            ...req.body,
            status: req.body.status || 'lost' // Default to 'lost' if not specified
        });
        const savedPost = await newPost.save();
        res.status(201).json(savedPost);
    } catch (err) {
        console.error('Error creating post:', err);
        res.status(400).json({
            message: 'Failed to create post',
            error: process.env.NODE_ENV === 'development' ? err.message : undefined
        });
    }
});

// Update post
router.put("/:id", async (req, res) => {
    try {
        const updatedPost = await Post.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updatedPost) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.json(updatedPost);
    } catch (err) {
        console.error('Error updating post:', err);
        res.status(400).json({
            message: 'Failed to update post',
            error: process.env.NODE_ENV === 'development' ? err.message : undefined
        });
    }
});

// Delete post
router.delete("/:id", async (req, res) => {
    try {
        const deletedPost = await Post.findByIdAndDelete(req.params.id);
        if (!deletedPost) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.json({ message: 'Post deleted successfully' });
    } catch (err) {
        console.error('Error deleting post:', err);
        res.status(400).json({
            message: 'Failed to delete post',
            error: process.env.NODE_ENV === 'development' ? err.message : undefined
        });
    }
});

module.exports = router;