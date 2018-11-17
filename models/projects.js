// include mongoose in our project
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Middleware for handling multipart/form-data, which is primarily used for uploading files
const multer = require('multer');

const projectSchema = new Schema ({
    location: { type: String, required: true },
    timestamp: { type: Date, default: Date.now, required: true },
    comment: String,
    photo: { data: Buffer, contentType: String }

});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;