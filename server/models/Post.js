const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    microchipped: {
        type: String,
        enum: ["yes", "no"],
        required: true
    },
    breed: {
        type: String,
        required: true
    },
    animalType: {
        type: String,
        enum: ["dog", "cat", "bird", "other"],
        required: true
    },
    sex: {
        type: String,
        enum: ["male", "female", "unknown"],
        required: true
    },
    additionalInfo: {
        type: String
    },
    status: {
        type: String,
        enum: ["Lost", "Found", "Endangered", "Rescued"],
        required: true
    },
    coordinates: {
        type: [Number], // [longitude, latitude]
        index: "2dsphere"
    },
    img: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Post", PostSchema);