const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MapSchema = new Schema({
  latitude: { type: String, required: true },
  longitude: { type: String, required: true },
  date: { type: Date, default: Date.now },
  comments: { type: String, required: false },
  email: { type: String, required: false },
  photo: { type: String, required: false },
  projectName: { type: String, required: true }
});

const Map = mongoose.model("Map", MapSchema);

module.exports = Map;
