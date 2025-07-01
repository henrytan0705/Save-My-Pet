require("dotenv").config(); // Allow .env variables to load in
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000; // Load in PORT env var or use default 3000
const usersRoutes = require("./routes/user");

app.use(express.json()); // Parse incoming JSON requests
app.use(cors()); // Enable CORS for cross-origin requests
app.use(express.urlencoded()); // Parse URL-encoded data

app.get("/", (req, res) => {
  res.send("API Call to ROOT API endpoint");
});

// connect api routes to the app
app.use("/api/users", usersRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
