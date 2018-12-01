// include mongoose in our project
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Middleware for handling multipart/form-data, which is primarily used for uploading files
const multer = require('multer');

const projectSchema = new Schema ({
    projectName: { type: String, required: true },
    primaryEmail: { type: String, required: true },
    projectDescription: { type: String, required: true },
    password: { type: String, required: true },
    projectSlug: { type: String, required: true, unique: true }
     
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;