const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Maps collection and inserts the Maps below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/w5"
);

const MapSeed = [
  {
    latitude: "33.863361949966965",
    longitude: "-117.9878633469343",
    date: new Date(Date.now())
  }
];

db.Map
  .remove({})
  .then(() => db.Map.collection.insertMany(MapSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
