const db = require("../models");
const mongo = require("mongodb")


module.exports={
    create: function(req, res){
        db.Project
        .create(req.body)
        .then(dbModel => {
            console.log(dbModel._id)
            res.send({id: dbModel._id})
        })
        .catch(err => res.status(422).json(err))
    }
}