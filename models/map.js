const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MapSchema = new Schema({
  latitude: { type: String, required: true },
  longitude: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Map = mongoose.model("Map", MapSchema);

module.exports = Map;
