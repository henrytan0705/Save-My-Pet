const express = require("express");
const router = express.Router();
const Message = require("../models/Message");

// POST /api/messages
router.post("/", async (req, res) => {
  try {
    const { firstName, lastName, email, message } = req.body;

    const newMessage = new Message({
      firstName,
      lastName,
      email,
      message,
    });

    await newMessage.save();

    res.status(201).json({ message: "Message submitted successfully!" });
  } catch (error) {
    console.error("Error saving message:", error);
    res.status(500).json({ error: "Something went wrong." });
  }
});

module.exports = router;
