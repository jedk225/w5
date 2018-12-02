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
    }
}