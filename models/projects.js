// include mongoose in our project
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Middleware for handling multipart/form-data, which is primarily used for uploading files
const multer = require('multer');

const projectSchema = new Schema ({
    projectName: { type: String },
    primaryEmail: { type: String },
    options: {type: Array },
    optLocation: { type: Boolean},
    optTimeStamp: { type: Boolean},
    // timestamp: { type: Date, default: Date.now},
    optText: {type: Boolean},
    optPhoto: { type: Boolean }
    // photo: { data: Buffer, contentType: String }    
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;