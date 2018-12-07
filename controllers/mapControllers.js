const db = require("../models");

// Defining methods for the MapsController
module.exports = {
  findAll: function(req, res) {
    console.log("got to FindAll")
    console.log(req.params.id)
    db.Map
      .find({projectName: req.params.id})
      .sort({ date: -1 })
      .then(dbModel => {
        console.log(dbModel);
        res.json(dbModel)})
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Map
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Map
      .create(req.body)
      .then(dbModel => res.status(201).json(dbModel))
      .catch(err => res.status(422).json(err));
  }
  ,
  update: function(req, res) {
    db.Map
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Map
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};