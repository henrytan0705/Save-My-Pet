require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      process.env.DB_CONNECTION_URL || "mongodb://localhost/save-my-pet",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Connected to MongoDB...");
  } catch (err) {
    console.log("Could not connect to MongoDB...", err);

    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
