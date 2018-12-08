const db = require("../models");


module.exports={
    create: function(req, res){
        db.Project
        .create(req.body)
        .then(dbModel => {
            console.log(dbModel)
            const {primaryEmail, projectSlug, ...projBundle} = dbModel.toObject()
            res.send(projBundle)
        })
        .catch(err => res.status(422).json(err))
    },

    //lookupByProjectId  .then to return data and .catch to respond to your messup.
    lookupByProjectId: function (req, res){
        db.Entry
        .find({projectSlug: req.params.id})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))       
    },

    verifyProject: function(req, res){
        console.log(req.body, "<-req.body")
        db.Project
        .findOne({projectName: req.body.projectID,
                password: req.body.password})
        .then( result => res.json(result))
        .catch( err => res.status(422).json(err))
    },

    projectExists: function (req, res){
        db.Project
        .findOne({projectName: req.body.projectName})
        .then( result => {
            if(result) {
                res.json({
                    projectName: result.projectName,
                    projectDescription: result.projectDescription
                })
            } else {
                res.json(false)
            }
            }
        )
    }

    
}