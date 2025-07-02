const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("GET API call to User endpoint.");
});

router.post("/", (req, res) => {
  res.send("POST API call to User endpoint.");
});

router.put("/", (req, res) => {
  res.send("PUT API call to User endpoint.");
});

router.delete("/", (req, res) => {
  res.send("DELETE API call to User endpoint.");
});

module.exports = router;
