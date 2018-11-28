const db = require("../models");

// Defining methods for the MapsController
module.exports = {
  create: function (req, res) {
    db.Map
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
